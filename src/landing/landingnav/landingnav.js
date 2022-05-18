import { Link } from 'react-router-dom'
import './landingnav.scss'

const LandingNav = props => {
    const menuItems = ['About The Game', 'Login', 'News']

    const displayMenu = menuItems.map((item, index) => {
        let itemSplitAtSpace = item.split(' ')

        if(item === 'Login') {
            return(
                <Link className='hideLink display-flex-jc-center' to='/login' key={index}> 
                    <h5 className='menu-item'>{item}</h5>
                </Link>
            )
        } else {
            return(
                <a className='hideLink display-flex-jc-center' href={`#${itemSplitAtSpace[0]}`} key={index}> 
                    <h5 className='menu-item'>{item}</h5>
                </a>
            )
        }
    })

    return(
        <div className='landingNav'>
            <div className='logo'>
                Deck Of Life
            </div>
            
            <div className='landing-nav-menu'>
                {displayMenu}
            </div>
        </div>
    )
}

export default LandingNav