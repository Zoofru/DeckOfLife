import LandingNav from "../components/landingnav"
import AboutComponent from "../components/aboutcomponent"
import Updates from "../components/updates"

const HomePage = () => {
    return(
        <div className='home'>
            <video autoPlay muted loop id='homepage-stars'>
                <source src="https://i.imgur.com/YV3qhf6.mp4"></source>
            </video>
            {/* credit:  https://www.pexels.com/video/stars-and-the-planet-earth-7184620/ */}
            <div className="home-header">
                <LandingNav></LandingNav>
                <div className='home-content-container'>
                    <div className='title-img-container'>
                        <div className='title'>
                            <h1 className="game-title">Deck Of Life</h1>
                            {/* <h1 className='game-title deck'>DECK</h1> 
                            <h1 className='game-title of'>OF</h1>
                            <h1 className='game-title life'>LIFE</h1> */}
                        </div>
                        {/* <img className='homepage-cards' src='https://i.imgur.com/2s5Xh9x.jpg' alt='cards'/> */}
                    </div>
                </div>
                <div className='home-register-btns'>
                    <button className='init-btns'>Initialize Code</button>
                    <button className='init-btns req-access'>Request Access</button>
                </div>
            </div>

            <div className="about-the-game" id='About'>
                <AboutComponent></AboutComponent>
            </div>
            
            <div className="updates-news">
                <Updates></Updates>
            </div>
        </div>
    )
}

export default HomePage