import "./ToDoItem.css"

const ToDoItem = ({id, isDone, content, date, onUpdate, onDelete}) => { 

    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    const onClick = () => {
        onDelete(id);
    };

    return (
        <div className="ToDoItem">
            <input 
                onChange={onChangeCheckBox} 
                checked={isDone} 
                type="checkbox" /> 
            <div className="content">{content}</div>
            <div className="date">{date}</div>
            <button onClick={onClick}>삭제</button>
        </div>
    );
};

export default ToDoItem;