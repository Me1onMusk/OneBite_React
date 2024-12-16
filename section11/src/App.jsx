import './App.css';
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef, useReducer, createContext, useMemo } from 'react';
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

export const ToDoStateContext = createContext(); 
export const ToDoDispatchContext = createContext();

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = (content) => { 
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().toLocaleDateString()
            }
        });
    };
    
    const onUpdate = (targetID) => {
        dispatch({
            type: "UPDATE",
            targetID: targetID
        });
    };

    const onDelete = (targetID) => {    
        dispatch({
            type: "DELETE",
            targetID: targetID
        });
    };
    
    const memoizedDispatch = useMemo(() => {
        return (
            {onCreate, onUpdate, onDelete}
        );
    }, []);

    return (
        <div className='App'>
        {/* <Exam /> */}
        <Header />

        <ToDoStateContext.Provider value={todos}>
            <ToDoDispatchContext.Provider value={{memoizedDispatch}}>
            <Editor/>
            <List/>
            </ToDoDispatchContext.Provider>
        </ToDoStateContext.Provider>

        </div>
    )
}

export default App