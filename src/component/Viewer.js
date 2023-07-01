import './Viewer.css'
import {EMOTION_LIST} from "../util/ImageUtils";

const Viewer = ({content, emotionId}) => {
    const emotionItem = EMOTION_LIST.find(it => it.id === emotionId)

    return (
        <div className={'Viewer'}>
            <section>
                <h4>오늘의 감정</h4>
                <div className={['EmotionImgWrapper', `EmotionImgWrapper${emotionId}`].join(' ')}>
                    <img alt={emotionItem.name} src={emotionItem.src}/>
                    <div className={'EmotionDescription'}>{emotionItem.name}</div>
                </div>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <div className={'ContentWrapper'}>
                    <p>{content}</p>
                </div>
            </section>
        </div>
    )
}

export default Viewer