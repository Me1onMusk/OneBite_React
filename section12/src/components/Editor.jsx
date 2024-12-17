
import { useState } from 'react';
import Button from './Button';
import './Editor.css'
import EmotionItem from './EmotionItem';
import { useNavigate } from 'react-router-dom';

const emotionList = [
    {
        emotionID: 1,
        emotionName: "완전 좋음"
    },
    {
        emotionID: 2,
        emotionName: "그냥 좋음"
    },
    {
        emotionID: 3,
        emotionName: "그럭 저럭"
    },
    {
        emotionID: 4,
        emotionName: "안 좋음"
    },
    {
        emotionID: 5,
        emotionName: "안안 좋음"
    }
];

// 날짜 yyyy-mm-dd
const getStringedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth()+1;
    let date = targetDate.getDate();
    if (month < 10) month = `0${month}`;
    if (date < 10) date = `0${date}`;

    return `${year}-${month}-${date}`;
};

const Editor = ({onSubmit}) => { 
    const nav = useNavigate();
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionID: 3,
        content: ""
    });

    // 날짜 넣기 // 
    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name === 'createdDate') value = new Date(value);

        setInput({
            ...input,
            [name] : value
        });
    };

    // 작성 완료 //
    const onClickSubmitButton = () => {
        onSubmit(input);
    };

    return (
        <div className='Editor'>
            <section className='date_section'>
                <h4>오늘의 날짜</h4>
                <input
                    name='createdDate'
                    onChange={onChangeInput} 
                    type='date' 
                    value={getStringedDate(input.createdDate)} />
            </section>
            <section className='emotion_section'>
                <h4>오늘의 감정</h4>
                <div className='emotion_list_wrapper'>
                    {emotionList.map(
                        (item) => 
                            <EmotionItem 
                                onClick={()=>onChangeInput({
                                    target: {
                                        name: "emotionID",
                                        value: item.emotionID
                                    }
                                })} 
                                key={item.emotionID} 
                                {...item} 
                                isSelected={item.emotionID === input.emotionID} />
                        )
                    }
                </div>
            </section>
            <section className='content_section'>
                <h4>오늘의 일기</h4>
                <textarea 
                    name='content' 
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder='오늘은 어땠나요?'></textarea>
            </section>
            <section className='button_section'>
                <Button 
                    onClick={() => nav(-1)}
                    text={"취소하기"} 
                    type={"NEGATIVE"} /> 
                <Button 
                    onClick={onClickSubmitButton}
                    text={"작성완료"} 
                    type={"POSITIVE"} />
            </section>
        </div>
    );
};

export default Editor;