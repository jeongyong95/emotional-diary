import {useParams, useSearchParams} from "react-router-dom";

const Diary = () => {
    const {id} = useParams()
    const [query, setQuery] = useSearchParams()
    console.log(query.get("sort"))

    return <main>
        <h1>Diary</h1>
        <div>
            <div><label>Pathname</label></div>
            <input disabled={true} value={id}></input>
        </div>
    </main>
}

export default Diary