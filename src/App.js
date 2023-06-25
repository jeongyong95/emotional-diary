import './App.css';
import getEmotionImage from './util/ImageUtils'

function App() {
    return (
        <div className="App">
            <h1>안녕! 나는 일기장이야ㅎ</h1>
            <main>
                <article>
                    <img alt={"감정1"} src={getEmotionImage(1)}/>
                    <img alt={"감정2"} src={getEmotionImage(2)}/>
                    <img alt={"감정3"} src={getEmotionImage(3)}/>
                    <img alt={"감정4"} src={getEmotionImage(4)}/>
                    <img alt={"감정5"} src={getEmotionImage(5)}/>
                </article>
            </main>
        </div>
    );
}

export default App;
