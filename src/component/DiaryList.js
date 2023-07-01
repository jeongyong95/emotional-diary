import './DiaryList.css'
import Button, {POSITIVE} from "./Button";
import {compare, getSortOptions, SORT_LATEST} from "../util/ListUtils";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import DiaryItem from "./DiaryItem";

const DiaryList = ({data}) => {
    const navigate = useNavigate()
    const [sort, setSort] = useState(SORT_LATEST)
    const [sortedData, setSortedData] = useState([])

    useEffect(() => {
            const compare = (a, b) => {
                if (sort === SORT_LATEST) {
                    return Number(b.date) - Number(a.date)
                } else {
                    return Number(a.date) - Number(b.date)
                }
            }

            const copyList = JSON.parse(JSON.stringify(data))
            copyList.sort(compare)
            setSortedData(copyList)
        }, [data, sort]
    )

    const handleOnChage = (event) => {
        setSort(event.target.value)
    }

    const handleOnClickGoNew = () => {
        navigate('/new')
    }

    const sortOptions = getSortOptions()
    return (
        <div className={"DiaryList"}>
            <div className={"MenuWrapper"}>
                <div className={"LeftColumn"}>
                    <select value={sort} onChange={handleOnChage}>
                        {
                            sortOptions.map(
                                (it, index) =>
                                    <option key={index} value={it.value}>{it.name}</option>
                            )
                        }
                    </select>
                </div>
                <div className={"RightColumn"}>
                    <Button type={POSITIVE} text={"새 일기 쓰기"} onClick={handleOnClickGoNew}/>
                </div>
            </div>
            <div className={"ListWrapper"}>
                {
                    sortedData.map(it => <DiaryItem key={it.id} {...it}/>)
                }
            </div>
        </div>
    )
}

export default DiaryList