import './profile.scss'
import ProfileBar from './left/profilebar'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/usercontext'
import axios from 'axios'

const Profile = props => {
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        const refreshUser = async () => {
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
    }, [])

    return(
        <div className="profile">
            <div className='left'>
                <ProfileBar></ProfileBar>
            </div>

            <div className='center'>

            </div>
        </div>
    )
}

export default Profile