
import { useNavigate, useParams } from "react-router-dom"; 
import Header from "../components/Header"; 
import Button from "../components/Button"; 
import Viewer from "../components/Viewer"; 
import useDiary from "../hooks/useDiary";  //커스텀 훅 
import getStringedDate from "../util/getStringedDate";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => { 
    const nav = useNavigate();
    const params = useParams(); 

    // 메타 타이틀 변경하기 // 
    usePageTitle(`${params.id}번 일기`);

    const curDiaryItem = useDiary(params.id);
    if (!curDiaryItem)
        return <div>데이터 로딩중</div>
    
    const { createdDate, emotionID, content } = curDiaryItem;
    const title = getStringedDate(new Date(createdDate));

    return ( 
        <>
            <Header 
                leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)}/>} 
                title={`${title}-기록`} 
                rightChild={<Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />} 
            /> 
            <Viewer emotionID={emotionID} content={content} />
        </>
    ); 
}; 

export default Diary; 