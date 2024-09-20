import './style-sign.css'
import sign1 from './tickitz.png'

function SignUp() {
    return (
        <div className="sign-container">
            <div className="sign-box1">
                <img src={sign1} />
                <p className="sign-p"> wait, watch, wow!</p>
            </div>
            <div className="sign-box2">
                <img src="Tickitz 1.svg" />
                <p id="box2-line1"> Sign Up </p> <br></br>
                <p id="box2-line2"> Fill your additional details </p> <br></br> <br></br>
                <p id="box2-form">
                    <label> First Name </label>
                    <input type="text" id="form-firstname" placeholder="Write your first name" /> <br></br><br></br>
                    <label> Last Name </label>
                    <input type="text" id="form-lastname" placeholder="Write your last name" /> <br></br><br></br>
                    <label> Phone Number </label>
                    <input type="text" id="form-phone" placeholder="Write your phone number" /> <br></br><br></br>
                    <label> Email </label>
                    <input type="text" id="form-email" placeholder="Write your email" /> <br></br><br></br>
                    <label> Password </label>
                    <input type="password" id="form-pass" placeholder="Write your password" /> <br></br><br></br>
                </p>
                <button className="sign-button"> Sign Up </button> <br></br> <br></br>
                <p id="box2-line3"> Already have account? 
                    <a href=""> Sign In </a> </p>
            </div>
        </div>
    )
}

export default SignUp