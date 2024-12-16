import { ToDoDispatchContext } from "../App"; 
import "./ToDoItem.css"
import { memo, useState, useContext } from 'react'; 

const ToDoItem = ({id, isDone, content, date}) => { 
    const {onUpdate, onDelete} = useContext(ToDoDispatchContext);

    const [isHovered, setIsHovered] = useState(false); //호버 상태
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onChangeCheckBox = () => {
        onUpdate(id);
    };
    
    // 모달 열기
    const openModal = () => {
        setIsModalOpen(true);
    };

    // 모달 닫기
    const closeModal = () => {
        setIsModalOpen(false); 
        onChangeCheckBox(); 
    };

    // 삭제 처리
    const handleDelete = () => {
        onDelete(id); // 항목 삭제
        closeModal(); // 모달 닫기
    };

    return (
        <div className="ToDoItem">
            <input 
                onChange={onChangeCheckBox} 
                checked={isDone} 
                type="checkbox" /> 
            <div className="content">{content}</div>
            <div className="date">{date}</div>
            <button 
                disabled={!isDone} 
                onClick={openModal} 
                style={{backgroundColor: isDone ? isHovered ? 'rgb(220, 55, 70)' : 'rgb(240, 66, 81)' : 'rgb(220, 220, 220)'}}
                onMouseEnter={() => setIsHovered(true)}  
                onMouseLeave={() => setIsHovered(false)} > 
            삭제
            </button>
            {/* 모달 */}
            {isModalOpen && (
                <div className="modal">
                    <p>정말 [ {content} ]을(를) 삭제하시겠습니까?</p>
                    <button className="btn_check" onClick={handleDelete}>확인</button>
                    <button className="btn_cancel" onClick={closeModal}>취소</button>
                </div>
            )}
        </div>
    );
};

export default ToDoItem;