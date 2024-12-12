import "./Editor.css"
import { useState, useRef } from "react";

const Editor = ({onCreate}) => {

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onKeyDown = (e) => {
        if(e.keyCode === 13) //엔터 누르면 추가 
            onSubmit(); 
    }

    const onSubmit = () => {
        if(content === "") { //입력값이 공백이면
            contentRef.current.focus();  //입력칸 포커스 
            return;  
        }
        onCreate(content);  //content 보내기
        setContent("");     //빈 문자열로 초기화 
    };

    return (
        <div className="Editor">
            <input 
                ref = {contentRef}
                value={content} 
                onChange={onChangeContent} 
                onKeyDown = {onKeyDown}
                placeholder="새로운 ToDo..."/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;