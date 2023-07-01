import Header from "../component/Header";
import Button from "../component/Button";
import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../context";
import {getMonthRange} from "../util/DateUtils";
import DiaryList from "../component/DiaryList";

const Home = () => {
    const [pivotDate, setPivotDate] = useState(new Date())
    const data = useContext(DiaryStateContext)
    const [filteredData, setFilteredData] = useState([])

    const goNextMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }

    const goPreviousMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }

    useEffect(() => {
        if (data.length > 0) {
            const {startTimestamp, endTimestamp} = getMonthRange(pivotDate)
            data.filter(it => it.date >= startTimestamp && it.date <= endTimestamp)
        } else {
            setFilteredData([])
        }
    }, [data, pivotDate])

    return (
        <>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                    left={<Button text={'<'} onClick={goPreviousMonth}/>}
                    right={<Button text={'>'} onClick={goNextMonth}/>}
            />
            <DiaryList data={data}/>
        </>
    )
}

export default Home