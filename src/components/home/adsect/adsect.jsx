import './style-adsect.css'
import adsect1 from './spiderman.png'
import adsect2 from './lion.png'
import adsect3 from './starwars.png'

function Adsect() {
    return (
        <div className="home-adsect">
            <div className="adsect1">
                <p id="line1"> Nearest Cinema, Newest Movie, </p>
                <p id="line2"> Find out now! </p>
            </div>
            <div className="adsect2">
                <div className="adsect2-container adsect2-lower">
                    <img src={adsect1} />
                </div>
                <div className="adsect2-container adsect2-low">
                    <img src={adsect2} />
                </div>
                <div className="adsect2-container">
                    <img src={adsect3} />
                </div>
            </div>
        </div>
    )
}

export default Adsect