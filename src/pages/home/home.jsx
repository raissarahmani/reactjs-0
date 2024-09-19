import './style-home.css'
import Header from '../../components/home/header/header'
import Adsect from '../../components/home/adsect/adsect'
import Now from '../../components/home/section-now/now'
import Up from '../../components/home/section-up/up'
import Newsletter from '../../components/home/newsletter/newsletter'
import Footer from '../../components/home/footer/footer'

function Home () {
    return (
        <div id="root-home">
             <Header />
             <Adsect />
             <Now />
             <Up />
             <Newsletter />
             <Footer />
        </div>
    )
}

export default Home