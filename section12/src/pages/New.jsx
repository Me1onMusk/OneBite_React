import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";
import EmotionItem from "../components/EmotionItem";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
    const {onCreate} = useContext(DiaryDispatchContext);
    const nav = useNavigate();

    // 생성 페이지 전송 //
    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(), 
            input.emotionID, 
            input.content
        ); 
        nav('/', {replace: true});  //홈 이동 & 뒤로가기 방지
    };
    
    return (
        <>
            <Header 
                leftChild={<Button text={"<뒤로가기"} onClick={()=>{nav(-1)}} />}
                title={"새 일기 쓰기"}
            />
            <Editor onSubmit={onSubmit} />
        </>
    );
};

export default New;