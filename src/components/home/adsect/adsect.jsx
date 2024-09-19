import './style-adsect.css'

function Adsect() {
    return (
        <div className="home-adsect">
            <div className="adsect1">
                <p id="line1"> Nearest Cinema, Newest Movie, </p>
                <p id="line2"> Find out now! </p>
            </div>
            <div className="adsect2">
                <div className="adsect2-container adsect2-lower">
                    <img src="spiderman.png" />
                </div>
                <div className="adsect2-container adsect2-low">
                    <img src="lion.png" />
                </div>
                <div className="adsect2-container">
                    <img src="starwars.png" />
                </div>
            </div>
        </div>
    )
}

export default Adsect