import './profile.scss'
import ProfileBar from './left/profilebar'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/usercontext'
import axios from 'axios'
import Username from '../../components/username'

const Profile = props => {
    const { user, setUser } = useContext(UserContext)
    const [userRank, setUserRank] = useState({})

    useEffect(() => {
        const refreshUser = async () => {
            if(!user) {
                if(localStorage.getItem('UAT')) {
                    const res = await axios.get(`${process.env.REACT_APP_API}/retrieve`, {
                        headers: {
                            'Authorization' : `${localStorage.getItem('UAT')}`
                        }
                    })
                    console.log(res)
                    setUser(res.data.user)
                }
            }
    
            if(localStorage.getItem('UAT')) {
                refreshUser()
            }

        }

        const getRank = async () => {
            if(user) {
                const res = await axios.get(`${process.env.REACT_APP_API}/rank/${user.rank}`, {
                    headers: {
                        'Authorization': localStorage.getItem('UAT')
                    }
                })
                setUserRank(res.data.rank)
            }
        }

        getRank()
    }, [setUser, user])

    return(
        <div className="profile">
            { user ? 
                <>
                    <div className='left'>
                        <ProfileBar></ProfileBar>
                    </div>

                    <div className='center'>
                        <div className='banner'>
                            <img className='profile-banner' src={user.profileBanner} alt='banner'/>
                        </div>
                        <div className='user-info'>
                            <div className='rank-container'>
                                <div className='rank-profile-container'>
                                    <img className='profile-rank' src={userRank.icon} alt='rank'/>
                                </div>
                            </div>

                            <div className='acc-icon-and-rank'>
                                <div className='img'>
                                    <img className='profile-image-profile' src={user.accountIcon} alt='profile' /> 
                                </div>

                                <div className='username-container'>
                                    <Username 
                                        className='username mobile' 
                                        username={user.username}
                                        color='black'
                                        iconWidth='25%'
                                        fontSize='xxx-large'
                                    ></Username>
                                </div>

                            </div>

                            <div className='bio'>
                                <p className='font-roboto'>{user.profileBio}</p>
                            </div>

                        </div>
                    </div>
                </>
                :
                <></>
            }
        </div>
        )
    }

export default Profile