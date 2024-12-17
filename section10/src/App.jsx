import './App.css';
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef, useReducer, useCallback } from 'react';
import Exam from './components/Exam';

const mockData = [
    { 
        id: 0,
        isDone: false,
        content: "할일1...",
        date: new Date().toLocaleDateString('ko-KR')
    },
    {
        id: 1,
        isDone: false,
        content: "할일2...",
        date: new Date().toLocaleDateString('ko-KR')
    },
    {
        id: 2,
        isDone: false,
        content: "할일3...",
        date: new Date().toLocaleDateString('ko-KR')
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
                return state.map((item) => item.id === action.targetID ? {...item, isDone: !item.isDone} : item);
        case "DELETE":
                return state.filter((item) => item.id !== action.targetID);
        default: 
            return state;
    }
};

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((content) => { 
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().toLocaleDateString()
            }
        });
    }, []);
    
    const onUpdate = useCallback((targetID) => {
        dispatch({
            type: "UPDATE",
            targetID: targetID
        });
    }, []);

    const onDelete = useCallback((targetID) => {    
        dispatch({
            type: "DELETE",
            targetID: targetID
        });
    }, []);

    return (
        <div className='App'>
        {/* <Exam /> */}
        <Header />
        <Editor onCreate = {onCreate} />
        <List todos = {todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    )
}

export default App