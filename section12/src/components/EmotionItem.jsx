
import { getEmotionImage } from '../util/get-emotion-image';
import './EmotionItem.css'

const EmotionItem = ({emotionID, emotionName, isSelected, onClick}) => {
    return (
        <div
            onClick={onClick} 
            className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionID}` : ""}`}>
            <img 
                className='emotionItem_img'
                src={getEmotionImage(emotionID)} />
            <div className='emotionItem_name'>
                {emotionName}
            </div>
        </div>
    );
};

export default EmotionItem;