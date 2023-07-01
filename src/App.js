import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import New from "./page/New";
import Diary from "./page/Diary";
import Edit from "./page/Edit";
import {useEffect, useReducer, useRef, useState} from "react";
import {reducer, TYPE_CREATE, TYPE_DELETE, TYPE_INIT, TYPE_UPDATE} from "./reducer";
import {INIT_DATA} from "./mock";
import {DiaryDispatchContext, DiaryStateContext} from "./context";

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, dispatch] = useReducer(reducer, [])
    const idReference = useRef(0)

    const handleOnCreate = (date, content, emotionId) => {
        dispatch({
            type: TYPE_CREATE,
            data: {
                id: idReference.current,
                date: new Date(date).getTime(),
                content,
                emotionId
            },
        })
        idReference.current++
    }

    const handleOnUpdate = (targetId, date, content, emotionId) => {
        dispatch({
            type: TYPE_UPDATE,
            data: {
                id: targetId,
                date: new Date(date).getTime(),
                content, emotionId
            },
        })
    }

    const handleOnDelete = (targetId) => {
        dispatch({
            type: TYPE_DELETE,
            data: {
                id: targetId
            }
        })
    }

    useEffect(() => {
        dispatch({
            type: TYPE_INIT,
            initData: INIT_DATA
        })
        setIsLoaded(true)
    })


    if (isLoaded) {
        return (
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{handleOnCreate, handleOnUpdate, handleOnDelete}}>
                    <div className="App">
                        <Routes>
                            <Route path={"/"} element={<Home/>}/>
                            <Route path={"/new"} element={<New/>}/>
                            <Route path={"/diary/:id"} element={<Diary/>}/>
                            <Route path={"/edit/:id"} element={<Edit/>}/>
                        </Routes>
                    </div>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        );
    } else {
        return (
            <div className={"App"}>
                <div>데이터를 로딩중입니다.</div>
            </div>
        )
    }
}

export default App;
