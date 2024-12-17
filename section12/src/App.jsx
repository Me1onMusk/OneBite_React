
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import New from './pages/new';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
import Header from './components/Header';

import { getEmotionImage } from "./util/get-emotion-image";
import Button from './components/Button';
import { useReducer, useRef } from 'react';

// 예제 데이터 //
const mockData = [
    {
        id: 0,
        createdDate: new Date().getTime(),
        emotionID: 1,
        content: "1번 일기장"
    },
    {
        id: 1,
        createdDate: new Date().getTime(),
        emotionID: 2,
        content: "2번 일기장"
    },
    {
        id: 2,
        createdDate: new Date().getTime(),
        emotionID: 3,
        content: "3번 일기장"
    }
];

//
function reducer(state, action) {
    switch(action.type) {
        case "CREATE":
            return (
                [action.data, ...state]
            );
        case "UPDATE":
            return (
                state.map((item) => String(item.id) === String(action.data.id) ? action.data : item )
            );
        case "DELETE":
            return;
        default:
            return;
    }
};

//
function App() {
    const [data, dispatch] = useReducer(reducer, mockData); 
    const idRef = useRef(mockData.length);

    // 새로운 일기 추가 
    const onCreate = (createdDate, emotionID, content) => {
        //액션 
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++, 
                createdDate, 
                emotionID, 
                content 
            }
        });
    };

    // 새로운 일기 수정
    const onUpdate = (id, createdDate, emotionID, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createdDate,
                emotionID,
                content
            }
        });
    };

    // 기존 일기 삭제 
    const onDelete = () => {
        dispatch({
            type: "DELETE",
            data: {

            }
        });
    };
    
    return (
        <>
        <button 
            onClick={() => {
                onCreate(new Date().getDate(), 1, "새로운 일기장");
        }}>추가 
        </button>
        <button 
            onClick={() => {
                onUpdate(1, new Date().getTime(), 1, "1번 일기장 수정완료");
        }}>수정 
        </button>
        <Header 
            leftChild={<Button text={"left"}/>}
            title={"Header"}
            rightChild={<Button text={"right"}/>} />
        <Button 
            text={123} 
            type={"DEFAULT"} 
            onClick={() => {}}  /> 
        <Button 
            text={123} 
            type={"POSITIVE"} 
            onClick={() => {}}  /> 
        <Button 
            text={123} 
            type={"NEGATIVE"} 
            onClick={() => {}}  /> 
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/new' element={<New/>} />
            <Route path='/edit/:id' element={<Edit/>} />
            <Route path='/diary/:id' element={<Diary/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
        </>
    );
};

export default App;


// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지 