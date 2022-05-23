import { Link, useNavigate } from "react-router-dom"
import './nav.scss'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import GavelIcon from '@mui/icons-material/Gavel';
import { useContext, useState } from "react";
import { UserContext } from "../../context/usercontext";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = props => {
    const { setUser } = useContext(UserContext)
    const [openNav, setOpenNav] = useState(false)
    const navigate = useNavigate()

    const logoutUser = () => {
        localStorage.removeItem('UAT')
        localStorage.removeItem('CUSER')
        setUser(null)
        navigate('/')
    }
    
    const toggleDrawer = (anchor, open) => (event) => {
        setOpenNav(!openNav)
    };

    const navItems = ["Home", "Tribunal", "Play", "Profile", "Settings", "Logout"]
    const displayNav = <Box
        sx={{ width: 'left' === 'top' || 'left' === 'bottom' ? 'auto' : 250}}
        role="presentation"
        onClick={toggleDrawer('left', false)}
        onKeyDown={toggleDrawer('left', false)}
    >
        {navItems.map((item, index) => {
            //Dont send user to a logout page, just log them out via onclick
            if(item === 'Logout') {
                return(
                    <div className="nav-item item-tab last-tab" key={index} onClick={logoutUser}>
                        <LogoutIcon className="icon-nav"></LogoutIcon>
                        <h6 className="nav-item-text font-roboto">{item}</h6>
                    </div>
                )
            } else if(item === 'Home') {
                return(
                    <Link to={`/${item}`} className='hideLink nav-item item-tab first-tab'  key={index}>
                        <div className="nav-item">
                            <HomeRoundedIcon className="icon-nav"></HomeRoundedIcon>
                            <h5 className="nav-item-text font-roboto">{item}</h5>
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
                            <h5 className="nav-item-text font-roboto">{item}</h5>
                        </div>
                    </Link>
                )
            }
        })}
    </Box>


    return(
        <div className="t">
            <Button onClick={toggleDrawer('left', true)}>
                <MenuIcon className="open-nav-icon"></MenuIcon>
            </Button>
            <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: '#18191A'
                    }
                }}
                anchor={'left'}
                open={openNav}
                onClose={toggleDrawer('left', false)}
            >
                {displayNav}
            </Drawer>
        </div>
    )
}

export default Nav