
import { useState, useEffect } from 'react';
import Button from './Button';
import './Editor.css'
import EmotionItem from './EmotionItem';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constants';
import { getStringedDate } from '../util/getStringedDate';

const Editor = ({initData, onSubmit}) => { 
    const nav = useNavigate();
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionID: 3,
        content: ""
    });

    useEffect(() =>{
        if(initData) { //데이터가 잘 불러오면 
            setInput({
                ...initData, 
                createdDate: new Date(Number(initData.createdDate))
            });
        }
    }, [initData]); 

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