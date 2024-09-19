import './style.css'
import Header from '../../components/header/header'
import Adsect from '../../components/adsect/adsect'
import Now from '../../components/section-now/now'
import Up from '../../components/section-up/up'
import Newsletter from '../../components/newsletter/newsletter'
import Footer from '../../components/footer/footer'

function Home () {
    return (
        <div id="root">
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