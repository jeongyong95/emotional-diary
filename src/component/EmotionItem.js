import "./EmotionItem.css"

const EmotionItem = ({id, src, name, onClick, isSelected}) => {
    const handleOnClick = () => {
        onClick(id)
    }

    return (
        <div className={["EmotionItem", isSelected ? `EmotionItemOn${id}` : `EmotionItemOff`].join(" ")}
             onClick={handleOnClick}>
            <img alt={`emotion${id}`} src={src}/>
            <span>{name}</span>
        </div>
    )
}

export default EmotionItem