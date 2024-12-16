import './App.css';
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef } from 'react';

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

function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);

    const onCreate = (content) => { 
        const newToDo = { 
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().toLocaleDateString('ko-KR')
        };
        setTodos([newToDo, ...todos]);
    };
    
    const onUpdate = (targetID) => {
        setTodos(todos.map((todo) => 
            todo.id === targetID 
                ? {...todo, isDone: !todo.isDone} 
                : todo
            )
        ); 
    };

    const onDelete = (targetID) => {    
        setTodos(todos.filter((todo) => todo.id !== targetID));  //삭제 되지 않을 새로운 배열 
    };

    return (
        <div className='App'>
        <Header />
        <Editor onCreate = {onCreate} />
        <List todos = {todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    )
}

export default App