
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

import { useReducer, useRef, createContext, useEffect, useState } from 'react';

// 예제 데이터 //
// const mockData = [
//     {
//         id: 0,
//         createdDate: new Date("2024-11-19").getTime(),
//         emotionID: 1,
//         content: "1번 일기장"
//     },
//     {
//         id: 1,
//         createdDate: new Date("2024-12-13").getTime(),
//         emotionID: 2,
//         content: "2번 일기장"
//     },
//     {
//         id: 2,
//         createdDate: new Date("2025-01-01").getTime(),
//         emotionID: 3,
//         content: "3번 일기장"
//     },
//     {
//         id: 3,
//         createdDate: new Date("2024-12-01").getTime(),
//         emotionID: 3,
//         content: "4번 일기장"
//     }
// ];

//
function reducer(state, action) {
    let nextState;

    switch(action.type) {
        case "INIT": 
            return action.data;
        case "CREATE": {
            nextState = [action.data, ...state];
            break;
        }
        case "UPDATE": {
            nextState = state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
            break;
        }
        case "DELETE": {
            nextState = state.filter((item) => String(item.id) !== String(action.id));
            break;
        }
        default:
            return state;
    }

    localStorage.setItem ("diary", JSON.stringify(nextState));  //로컬 저장소에 데이터 저장 
    return nextState;
};

// Context //
export const DiaryStateContext = createContext();     //변하지 않는 속성 
export const DiaryDispatchContext = createContext();  //변하는 속성 

// Main // 
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, dispatch] = useReducer(reducer, []); 
    const idRef = useRef(0);

    useEffect(() => {
        const storedData = localStorage.getItem("diary");
        if(!storedData){
            setIsLoading(false);
            return;
        }
        const parsedData = JSON.parse(storedData); 
        if(!Array.isArray(parsedData)) {
            setIsLoading(false);
            return; 
        }
        let maxID = 0; 
        parsedData.forEach((item) => {
            if(Number(item.id) > maxID)
                maxID = Number(item.id);
        });
        idRef.current = maxID + 1;
        dispatch({
            type: "INIT",
            data: parsedData
        });
        setIsLoading(false);
    }, []);

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
    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id
        });
    };
    
    if(isLoading) { 
        return <div> 데이터 로딩중입니다...</div> 
    }
    
    return (
        <>
        <DiaryStateContext.Provider value={data}> 
            <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}> 
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path='/new' element={<New/>} />
                    <Route path='/edit/:id' element={<Edit/>} />
                    <Route path='/diary/:id' element={<Diary/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
        </>
    );
};

export default App;


// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지 