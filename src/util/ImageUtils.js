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
export default getEmotionImage;