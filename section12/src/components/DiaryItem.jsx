import { getEmotionImage } from "../util/get-emotion-image"; 
import Button from "./Button";
import './DiaryItem.css';

const DiaryItem = () => {
    const emotionID = 2;
    return (
        <div className='DiaryItem'>
            <div className={`img_section img_section_${emotionID}`}>
                <img src={getEmotionImage(emotionID)} />
            </div>
            <div className='info_section'>
                <div className="created_date">
                    {new Date().toLocaleDateString()}
                </div>
                <div className="content">
                    컨텐츠
                </div>
            </div>
            <div className='button_section'>
                <Button text={"수정하기"} />
            </div>
        </div>
    );
};

export default DiaryItem;