import "./ToDoItem.css"
import React, { memo, useState } from 'react';

const ToDoItem = ({id, isDone, content, date, onUpdate, onDelete}) => { 
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

// // 고차 컴포넌트 // 
// export default memo(ToDoItem, (prevProps, nextProps) => { 
//     // 반환값에 따라, props가 바뀌었는지 안바뀌었는지 판단 
//     // T -> Props 바뀌지 않음 -> 리렌더링 X 
//     // F -> Props 바뀜 -> 리렌더링 O 

//     if(prevProps.id !== nextProps) return false; 
//     if(prevProps.isDone !== nextProps) return false; 
//     if(prevProps.content !== nextProps.content) return false; 
//     if(prevProps.date !== nextProps.date) return false; 

//     return true;
// }); 

export default memo(ToDoItem); 