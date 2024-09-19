import './style-sign.css'

function SignIn() {
    return (
        <div className="sign-container">
            <div className="sign-box1">
                <img src="tickitz.png" />
                <p className="sign-p"> wait, watch, wow!</p>
            </div>
            <div className="sign-box2">
                <img src="Tickitz 1.svg" />
                <p id="box2-line1"> Sign In </p> <br></br>
                <p id="box2-line2"> Sign in with your data that you entered during your registration </p> <br></br> <br></br>
                <p id="box2-form">
                    <label> Email </label>
                    <input type="text" id="form-email" placeholder="Write your email" /> <br></br><br></br>
                    <label> Password </label>
                    <input type="password" id="form-pass" placeholder="Write your password" /> <br></br><br></br>
                </p>
                <button className="sign-button"> Sign In </button> <br></br> <br></br>
                <p id="box2-line3"> Forgot your password? 
                    <a href=""> Reset now </a></p> <br></br>
                <p id="box2-line4"> Dont have an account? 
                    <a href=""> Sign Up </a></p>
            </div>
        </div>
    )
}

export default SignIn