import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import New from "./page/New";
import Diary from "./page/Diary";
import Edit from "./page/Edit";
import Header from "./component/Header";

function App() {
    return (
        <div className="App">
            <header>
                <Link to={"/"}>Home</Link>
                <Link to={"/new"}>New</Link>
                <Link to={"/diary"}>diary</Link>
                <Link to={"/edit"}>edit</Link>
            </header>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/new"} element={<New/>}/>
                <Route path={"/diary/:id"} element={<Diary/>}/>
                <Route path={"/edit"} element={<Edit/>}/>
            </Routes>
        </div>
    );
}

export default App;
