
import { useState, useContext } from "react";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";
import { DiaryStateContext } from "../App";

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();  //12월 01일 00시 00분 00초 
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1, 0, 23, 59, 59).getTime();  //12월 31일 23시 59분 59초 

    return (
        data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime)
    );
};

const Home = () => {
    const data = useContext(DiaryStateContext); //App에 있는 MockData를 가져오기 
    const [pivotDate, setPivotDate] = useState(new Date()); 

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1)); 
    };

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1)); 
    };

    const monthlyData = getMonthlyData(pivotDate, data);

    return (
        <>
            <Header 
                leftChild={<Button text={"<"} onClick={onDecreaseMonth} />} 
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} 
                rightChild={<Button text={">"} onClick={onIncreaseMonth} />}>
            </Header> 
            <DiaryList data={monthlyData} />
        </>
    );
};

export default Home;