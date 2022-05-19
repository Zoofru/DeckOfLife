import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/usercontext'
import './usercard.scss'

const UserCard = props => {
    const { user } = useContext(UserContext)
    const [userRank, setUserRank] = useState({})

    useEffect(() => {
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
    }, [user])

    return(
        <div className="user-card">
            {user !== null ? 
                <div className="account-username-icon">
                    <div className="account-icon-user-card">
                        <img className="account-icon" src={user.accountIcon} alt="account icon" />
                    </div>

                    <div className="account-username">
                        {user.isStaff ? 
                            <>
                                <img className='account-perm' src='https://i.imgur.com/6P1CHsh.png' alt='account-rank'/>
                                <p className="font-roboto white user-card-username red">{user.username}</p>
                            </>
                        : 
                            <p className="font-roboto white user-card-username">{user.username}</p>
                        }               
                    </div>
                </div>
            :
                <></>    
            }

            <div className="user-card-divider"></div>

            {user !== null && userRank !== undefined ?
                <>
                    {/* <div className='user-card-stats'>
                        <p className='white font-roboto uc-stat'>Completed Challenges: <span className='stat'>{user.challengesComplete}</span></p>
                        <p className='white font-roboto uc-stat'>Failed Challenges: <span className='stat'>{user.challengesComplete}</span></p>
                    </div> */}

                    <div className='rank'>
                        <p className='font-roboto white rank-title'>{userRank.title}</p>
                        <img className='rank-img' src={userRank.icon} alt='user rank' />
                    </div>
                </>
            :
                <></>
            }

        </div>
    )
}

export default UserCard