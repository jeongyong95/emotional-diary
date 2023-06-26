import "./Header.css"

const Header = ({title, left, right}) => {
    return <header className={"Header"}>
        <div className={"left"}>{left}</div>
        <div className={"title"}>{title}</div>
        <div className={"right"}>{right}</div>
    </header>
}

export default Header