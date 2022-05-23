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
    }, [])

    return(
        <div className="profile">
            <div className='left'>
                <ProfileBar></ProfileBar>
            </div>

            <div className='center'>
                <div className='user-info'>
                    <div className='acc-icon-and-rank'>
                        { user ? 
                            <>
                                <div className='img'>
                                    <img className='profile-image-profile' src={user.accountIcon} alt='profile' /> 
                                </div>

                                <div className='rank'>
                                    <img className='profile-rank' src={userRank.icon} alt='rank'/>
                                </div>
                            </>
                        : 
                            <></>
                        }
                    </div>

                    <div className='info-container'>
                        {user ? 
                            <>
                                <Username 
                                    className='username' 
                                    username={user.username}
                                    iconWidth='15%'
                                    fontSize='x-large'
                                ></Username>

                                <div className='stats'>
                                    <p className='font-roboto white'>Challenges Completed: {user.challengesComplete}</p>
                                    <p className='font-roboto white'>Challenges Skipped: {user.challengesSkipped}</p>
                                    <p className='font-roboto white'>Challenges Failed: {user.challengesFailed}</p>
                                </div>
                            </>
                        :
                            <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile