import './style-footer.css'
import footer1 from './Tickitz 2.svg'
import footer2 from './ebv.id 2.svg'
import footer3 from './Vector.svg'
import footer4 from './hiflix.png'
import logo1 from './Facebook.svg'
import logo2 from './bx_bxl-instagram.svg'
import logo3 from './x.svg'
import logo4 from './Group.svg'

function Footer() {
    return (
        <footer className="home-footer">
            <div className="footer1">
                <div className="footer1-class1">
                    <img src={footer1} />
                    <p className="class1-p8"> Stop waiting in line.<br></br> Buy ticket conveniently, watch movies quietly. </p>
                </div>
                <div className="footer1-class2">
                    <p className="class2-p6"> Explore </p>
                    <div className="footer1-explore">
                        <p className="class2-p7"> Home </p>
                        <p className="class2-p7"> List movie </p>
                    </div>
                </div>
                <div className="footer1-class3">
                    <p className="class2-p6"> Our Sponsor </p>
                    <div className="footer1-sponsor">
                        <img src={footer2} /> <br></br>
                        <img src={footer3} /> <br></br>
                        <img src={footer4} /> <br></br>
                    </div>
                </div>
                <div className="footer1-class4">
                    <div id="footer1-f1">
                        <p className="class2-p6"> Follow us </p>
                    </div>
                    <div className="footer1-f2">
                        <div id="logo"> 
                            <img src={logo1} /> <br></br>
                            <img src={logo2} /> <br></br>
                            <img src={logo3} /> <br></br>
                            <img src={logo4} /> <br></br>
                        </div>
                        <div id="ket"> 
                            <p> Tickitz Cinema id</p>
                            <p> tickitz.id </p> 
                            <p> tickitz.id </p>
                            <p> Tickitz Cinema id </p>
                        </div>
                    </div>          
                </div>
            </div>
            <div className="footer2">
                <p className="class2-p7"> © 2020 Tickitz. All Rights Reserved. </p>
            </div>
        </footer>
    )
}

export default Footer