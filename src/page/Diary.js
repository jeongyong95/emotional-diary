import {useNavigate, useParams} from "react-router-dom";
import useDiary from "../hook/useDiary";
import {getFormattedDate} from "../util/DateUtils";
import Header from "../component/Header";
import Button from "../component/Button";
import Viewer from "../component/Viewer";

const Diary = () => {
    const {id} = useParams()
    const data = useDiary(id)
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    const handleGoEdit = () => {
        navigate(`/edit/${id}`)
    }

    if (!data) {
        return <main>
            <div>일기를 불러오고 있습니다.</div>
        </main>
    } else {
        const {date, emotionId, content} = data;
        const title = `${getFormattedDate(new Date(Number(date)))} 기록`
        return (
            <div>
                <Header title={title}
                        left={<Button text={'< 뒤로 가기'} onClick={handleGoBack}/>}
                        right={<Button text={'수정하기'} onClick={handleGoEdit}/>}
                />
                <div>{id}번 일기</div>
                <div>Diary 페이지입니다.</div>
                <Viewer content={content} emotionId={emotionId}/>
            </div>
        )
    }
}

export default Diary