import './style-now.css'
import now1 from './poster1.png'
import now2 from './poster2.png'
import now3 from './poster3.png'

function Now() {
    return (
        <div className="home-now">
            <div className="now-class1">
                <p className="class1-p1"> Now Showing </p>
                <p className="class1-p2"> view all </p>
            </div>
            <div className="now-class2">
                <div className="class2-container">
                    <img src={now1} />
                </div>
                <div className="class2-container">
                    <img src={now2} />
                </div>
                <div className="class2-container">
                    <img src={now3} />
                </div>
                <div className="class2-container">
                    <img src={now1} />
                </div>
                <div className="class2-container">
                    <img src={now2} />
                </div>
                <div className="class2-container">
                    <img src={now3} />
                </div>
                <div className="class2-container">
                    <img src={now1} />
                </div>
                <div className="class2-container">
                    <img src={now2} />
                </div>
                <div className="class2-container">
                    <img src={now3} />
                </div>
            </div>
        </div>
    )
}

export default Now