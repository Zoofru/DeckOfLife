import { Link, useNavigate } from "react-router-dom"
import './nav.scss'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import GavelIcon from '@mui/icons-material/Gavel';
import { useContext } from "react";
import { UserContext } from "../../context/usercontext";

const Nav = props => {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        localStorage.removeItem('UAT')
        localStorage.removeItem('CUSER')
        setUser(null)
        navigate('/')
    }

    const navItems = ["Home", "Tribunal", "Play", "Profile", "Settings", "Logout"]
    const displayNav = navItems.map((item, index) => {
        //Dont send user to a logout page, just log them out via onclick
        if(item === 'Logout') {
            return(
                <div className="nav-item item-tab last-tab" key={index} onClick={logoutUser}>
                    <LogoutIcon className="icon-nav"></LogoutIcon>
                    <h6 className="nav-item-text white font-roboto">{item}</h6>
                </div>
            )
        } else if(item === 'Home') {
            return(
                <Link to={`/${item}`} className='hideLink nav-item item-tab first-tab'  key={index}>
                    <div className="nav-item">
                        <HomeRoundedIcon className="icon-nav"></HomeRoundedIcon>
                        <h5 className="nav-item-text white font-roboto">{item}</h5>
                    </div>
                </Link>
            )
        } else {
            return(
                <Link to={`/${item}`} className='hideLink nav-item item-tab'  key={index}>
                    <div className="nav-item">
                        {item === 'Tribunal' ?
                                <GavelIcon className="icon-nav"></GavelIcon>
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
                            <h5 className="nav-item-text white font-roboto">{item}</h5>
                    </div>
                </Link>
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