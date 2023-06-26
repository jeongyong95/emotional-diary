import "./Editor.css"
import {useEffect, useState} from "react";
import {getFormattedDate} from "../util/DateUtils";
import Button, {POSITIVE} from "./Button";
import {useNavigate} from "react-router-dom";
import {EMOTION_LIST} from "../util/ImageUtils";
import EmotionItem from "./EmotionItem";

const Editor = ({initData, onSubmit}) => {
    const [state, setState] = useState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
    })
    useEffect(() => {
        setState({
            ...initData,
            date: getFormattedDate(new Date(parseInt(initData.date))),
        })
    }, [initData])
    const navigate = useNavigate()

    const handleChangeDate = (event) => {
        setState({
            ...state,
            date: event.target.value
        })
    }

    const handleGoBack = () => {
        navigate(-1)
    }

    const handleChangeContent = (event) => {
        setState({
            ...state,
            content: event.target.value
        })
    }

    const handleChangeEmotion = (emotionId) => {
        setState({
            ...state,
            emotionId: emotionId
        })
    }

    const handleSubmit = () => {
        onSubmit(state)
    }

    return (
        <div className={"Editor"}>
            <div className={"EditorSection"}>
                <h4>오늘의 날짜</h4>
                <div className={'InputWrapper'}>
                    <input type={"date"} value={state.date} onChange={handleChangeDate}/>
                </div>
            </div>

            <div className={"EditorSection"}>
                <h4>오늘의 감정</h4>
                <div className={"InputWrapper EmotionListWrapper"}>
                    {EMOTION_LIST.map(it => <EmotionItem key={it.id} {...it} onClick={handleChangeEmotion}
                                                         isSelected={state.emotionId === it.id}/>)}
                </div>
            </div>

            <div className={"EditorSection"}>
                <h4>오늘의 일기</h4>
                <div className={'InputWrapper'}>
                    <textarea placeholder={"오늘은 어땠나요?"}
                              value={state.content}
                              onChange={handleChangeContent}/>
                </div>
            </div>

            <div className={"EditorSection BottomSection"}>
                <Button text={"취소하기"} onClick={handleGoBack}/>
                <Button type={POSITIVE} text={"등록하기"} onClick={handleSubmit}/>
            </div>
        </div>
    )
}

export default Editor