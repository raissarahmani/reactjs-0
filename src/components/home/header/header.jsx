import './style-header.css'

function Header() {
    return (
        <header className="home-header">
            <nav className="header-nav">
                <img src="Tickitz 1.svg" /> 
                <p> Home </p> 
                <p> List Movie </p>
            </nav>
            <button className="header-button"> Sign Up </button>
        </header>
    )
}

export default Header