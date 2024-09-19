import './style-footer.css'

function Footer() {
    return (
        <footer className="home-footer">
            <div className="footer1">
                <div className="footer1-class1">
                    <img src="Tickitz 2.svg" />
                    <p className="class1-p8"> Stop waiting in line. Buy tickets <br></br> conveniently, watch movies quietly. </p>
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
                        <img src="ebv.id 2.svg" /> <br></br>
                        <img src="Vector.svg" /> <br></br>
                        <img src="hiflix.png" /> <br></br>
                    </div>
                </div>
                <div className="footer1-class4">
                    <div id="footer1-f1">
                        <p className="class2-p6"> Follow us </p>
                    </div>
                    <div className="footer1-f2">
                        <div id="logo"> 
                            <img src="Facebook.svg" /> <br></br>
                            <img src="bx_bxl-instagram.svg" /> <br></br>
                            <img src="x.svg" /> <br></br>
                            <img src="Group.svg" /> <br></br>
                        </div>
                        <div id="ket"> 
                            <p className="class2-p7"> Tickitz Cinema id</p>
                            <p className="class2-p7"> tickitz.id </p>
                            <p className="class2-p7"> tickitz.id </p>
                            <p className="class2-p7"> Tickitz Cinema id </p>
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