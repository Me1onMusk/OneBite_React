
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
    const nav = useNavigate(); 
    const data = useContext(DiaryStateContext);  //데이터 가져오기 
    const [curDiaryItem, setCurDiaryItem] = useState();

    // 현재 일기 가져오기 (먼저 실행!!) // 
    useEffect(()=> {
        const currentDiaryItem = 
            data.find((item) => String(item.id) === String(id));
        
        if(!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav('/', {replace: true});               //홈 이동 & 뒤로가기 방지 
        }

        setCurDiaryItem(currentDiaryItem);
    }, [id]);
    
    return curDiaryItem;
};

export default useDiary;