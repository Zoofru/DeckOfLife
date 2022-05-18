import AboutComponent from "../landing/about/aboutcomponent"
import Updates from "../landing/news/updates"
import Footer from '../landing/footer/footer';
import LandingHeader from '../landing/landingheader/landingheader';

const HomePage = () => {


    return(
        <div className='home'>
            <LandingHeader></LandingHeader>

            <div className="about-the-game" id='About'>
                <AboutComponent></AboutComponent>
            </div>
            
            <div className="updates-news" id='News'>
                <Updates></Updates>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default HomePage