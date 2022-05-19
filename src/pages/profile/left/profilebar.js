import './profilebar.scss'
import { useContext } from 'react'
import { UserContext } from '../../../context/usercontext'
import Nav from '../../../userhomepage/left/nav'

const ProfileBar = props => {
    const { user } = useContext(UserContext)

    return(
        <div className='profilebar'>
            { user ? 
                <>
                    <img className='profilebar-profile-img' src={user.accountIcon} alt='profile image'/>
                    <Nav></Nav>
                </>
            :
                <></>
            }
        </div>
    )
}

export default ProfileBar