import "./Button.css"

export const POSITIVE = 'positive'
export const NEGATIVE = 'negative'

const Button = ({text, type, onClick}) => {
    const buttonType = [POSITIVE, NEGATIVE].includes(type) ? type : "default"

    return <button className={[`Button`, `Button_${buttonType}`].join(" ")}
                   onClick={onClick}>
        {text}
    </button>
}
export default Button