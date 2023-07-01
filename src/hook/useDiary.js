import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../context";
import {useNavigate} from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext)
    const [diary, setDiary] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const targetDiary = data.find(it => String(it.id) === String(id))
        if (targetDiary) {
            setDiary(targetDiary)
        } else {
            alert('존재하지 않는 일기입니다.')
            navigate('/', {
                replace: true
            })
        }
    }, [id, data])

    return diary;
}

export default useDiary