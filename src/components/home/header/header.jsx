import './style-header.css'
import header1 from './Tickitz 1.svg'
import header2 from './gg_menu-right-alt.png'

function Header() {
    return (
        <header className="home-header">
            <nav className="header-nav">
                <img src={header1} /> 
                <p> Home </p> 
                <p> List Movie </p>
            </nav>
            <span className="home-shorts">
                <img src={header2} />
            </span>
            <button className="header-button"> Sign Up </button>
        </header>
    )
}

export default Header