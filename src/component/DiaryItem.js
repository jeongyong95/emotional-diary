import './DiaryItem.css'
import {useNavigate} from "react-router-dom";
import {getEmotionImage} from "../util/ImageUtils";
import Button from "./Button";

const DiaryItem = ({id, emotionId, content, date}) => {
    const navigate = useNavigate()

    const handleOnClickGoDetail = () => {
        navigate(`/diary/${id}`)
    }

    const handleGoEdit = () => {
        navigate(`/edit/${id}`)
    }

    return (
        <div className={'DiaryItem'}>
            <div className={['ImgSection', `ImgSection${emotionId}`].join(' ')} onClick={handleOnClickGoDetail}>
                <img alt={`emotion${emotionId}`} src={getEmotionImage(emotionId)}/>
            </div>

            <div className={'InfoSection'} onClick={handleOnClickGoDetail}>
                <div className={'DateWrapper'}>
                    {new Date(parseInt(date)).toLocaleDateString()}
                </div>
                <div className={'ContentWrapper'}>
                    {content.slice(0, 25)}
                </div>
            </div>
            <div className={'ButtonSection'}>
                <Button onClick={handleGoEdit} text={'수정하기'}/>
            </div>
        </div>

    )
}

export default DiaryItem