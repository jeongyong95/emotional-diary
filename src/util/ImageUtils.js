import emotion1 from '../image/emotion1.png'
import emotion2 from '../image/emotion2.png'
import emotion3 from '../image/emotion3.png'
import emotion4 from '../image/emotion4.png'
import emotion5 from '../image/emotion5.png'

const getEmotionImage = (emotionId) => {
    switch (emotionId) {
        case 1 :
            return emotion1;
        case 2 :
            return emotion2
        case  3:
            return emotion3
        case 4:
            return emotion4
        default:
            return emotion5
    }
}
export const EMOTION_LIST = [
    {
        id:1,
        name:"완전 좋음",
        src: getEmotionImage(1)
    },
    {
        id:2,
        name:"좋음",
        src: getEmotionImage(2)
    },
    {
        id:3,
        name:"보통",
        src: getEmotionImage(3)
    },
    {
        id:4,
        name:"나쁨",
        src: getEmotionImage(4)
    },
    {
        id:5,
        name:"완전 나쁨",
        src: getEmotionImage(5)
    }
]