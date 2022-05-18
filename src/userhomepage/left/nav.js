import { Link, useNavigate } from "react-router-dom"
import './nav.scss'


const Nav = props => {
    const navigate = useNavigate()

    const logoutUser = () => {
        localStorage.removeItem('UAT')
        navigate('/')
    }

    const navItems = ["Home", "Play", "Profile", "Settings", "Logout"]
    const displayNav = navItems.map((item, index) => {
        //Dont send user to a logout page, just log them out via onclick
        if(item === 'Logout') {
            return(
                <div className="nav-item" key={index} onClick={logoutUser}>
                    <h5 className="nav-item-text white font-roboto">{item}</h5>
                </div>
            )
        } else {
            return(
                <div className="nav-item" key={index}>
                    <Link to={`/${item}`} className='hideLink'>
                        <h5 className="nav-item-text white font-roboto">{item}</h5>
                    </Link>
                </div>
            )
        }
    })

    return(
        <div className="nav">
            <div className="navbar">
                {displayNav}
            </div>
        </div>
    )
}

export default Nav