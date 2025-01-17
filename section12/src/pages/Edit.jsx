import { useNavigate, useParams } from "react-router-dom"; 
import Button from "../components/Button"; 
import Header from "../components/Header"; 
import { useContext } from "react"; 
import { DiaryDispatchContext } from "../App"; 
import Editor from "../components/Editor"; 
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => { 
    const nav = useNavigate(); 
    const {onUpdate, onDelete} = useContext(DiaryDispatchContext);
    const params = useParams(); //파라미터 가져오기 

    // 메타 타이틀 변경하기 // 
    usePageTitle(`${params.id}번 일기 수정`);

    const curDiaryItem = useDiary(params.id);  //커스텀 훅 
    if (!curDiaryItem) {
        return <div>데이터 로딩중</div>
    }

    // 삭제 하기 //
    const onClickDelete = () => { 
        if (window.confirm("일기를 삭제할까요?")) {  //윈도우 팝업창 (T/F 반환) 
            onDelete(params.id);                     //일기 삭제  
            nav('/', {replace: true});               //홈 이동 & 뒤로가기 방지 
        } 
    };

    // 수정 페이지 전송 // 
    const onSubmit = (input) => {
        if(window.confirm("일기를 수정할까요?")){
            onUpdate(
                params.id, 
                input.createdDate.getTime(), 
                input.emotionID, 
                input.content
            ); 
            nav('/', {replace: true});  //홈 이동 & 뒤로가기 방지
        }
    };
    
    return (
        <>
            <Header 
                leftChild={<Button onClick={()=>nav(-1)} text={"< 뒤로가기"} />} 
                title={"일기 수정하기"} 
                rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />}/>
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </>
    ); 
}; 

export default Edit; 