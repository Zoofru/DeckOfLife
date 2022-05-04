import LandingNav from "../components/landingnav"
import AboutComponent from "../components/aboutcomponent"

const HomePage = () => {
    return(
        <div className='home'>
            <div className="home-header">
                <LandingNav></LandingNav>
                <div className='home-content-container'>
                    <div className='title-img-container'>
                        <div className='title'>
                            <h1 className='game-title deck'>DECK</h1> 
                            <h1 className='game-title of'>OF</h1>
                            <h1 className='game-title life'>LIFE</h1>
                        </div>
                        <img className='homepage-cards' src='https://i.imgur.com/2s5Xh9x.jpg' alt='cards'/>
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
        </div>
    )
}

export default HomePage