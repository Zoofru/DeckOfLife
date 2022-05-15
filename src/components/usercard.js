import { useContext } from 'react'
import { UserContext } from '../context/usercontext'

const UserCard = props => {
    const { user } = useContext(UserContext)

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

        </div>
    )
}

export default UserCard