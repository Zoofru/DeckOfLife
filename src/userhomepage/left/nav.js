import { Link, useNavigate } from "react-router-dom"
import './nav.scss'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Nav = props => {
    const navigate = useNavigate()

    const logoutUser = () => {
        localStorage.removeItem('UAT')
        localStorage.removeItem('CUSER')
        navigate('/')
    }

    const navItems = ["Home", "Play", "Profile", "Settings", "Logout"]
    const displayNav = navItems.map((item, index) => {
        //Dont send user to a logout page, just log them out via onclick
        if(item === 'Logout') {
            return(
                <div className="nav-item" key={index} onClick={logoutUser}>
                    <LogoutIcon className="icon-nav"></LogoutIcon>
                    <h6 className="nav-item-text white font-roboto">{item}</h6>
                </div>
            )
        } else {
            return(
                <div className="nav-item" key={index}>
                    {item === 'Home' ? 
                        <HomeRoundedIcon className="icon-nav"></HomeRoundedIcon>
                    :
                        item === 'Play' ?
                            <SportsEsportsRoundedIcon className='icon-nav'></SportsEsportsRoundedIcon>
                        :
                            item === 'Profile' ?
                                <PersonRoundedIcon className='icon-nav'></PersonRoundedIcon>
                            :
                                item === 'Settings' ?
                                    <SettingsIcon className="icon-nav"></SettingsIcon>
                                :
                                <></>
                    }
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