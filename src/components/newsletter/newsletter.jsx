import './style-nl.css'

function Newsletter() {
    return (
         <div className="home-newsletter">
            <div className="home-nl">
                <p id="nl-line3"> Be the vanguard of the </p>
                <p id="nl-line4"> Moviegoers </p> <br></br> <br></br>
                <p id="nl-form">
                    <input type="text" id="newsletter" placeholder="Type your email" />
                    <button className="nl-button"> Join now </button>
                </p>
                <p id="nl-line5"> By joining you as a Tickitz member, <br></br> we will always send you the latest updates via email.</p>
            </div>
         </div>
    )
}

export default Newsletter