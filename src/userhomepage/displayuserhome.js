import { useEffect, useContext } from "react"
import { UserContext } from "../context/usercontext"
import axios from "axios"
import Nav from './left/nav'
import UserCard from "./left/usercard"
import Tribunal from './middle/tribunal'
import FriendsRequests from "./right/friendsrequests"
import Leaderboard from "./right/leaderboard"
import './displayuserhome.scss'

const DisplayUserHome = () => {
    const { setUser } = useContext(UserContext)
    
    useEffect(() => {
        const refreshUser = async () => {
            if(localStorage.getItem('UAT')) {
                const res = await axios.get(`${process.env.REACT_APP_API}/retrieve`, {
                    headers: {
                        'Authorization' : `${localStorage.getItem('UAT')}`
                    }
                })
                setUser(res.data.user)
            }
        }

        if(localStorage.getItem('UAT')) {
            refreshUser()
        }

        
    }, [setUser])

    return(
        <div className="home-page">
            <div className="left-side-home">
                <UserCard></UserCard>
                <Nav></Nav>
            </div>

            <div className="center-home">
                <div className="tribunal-center">
                    <Tribunal></Tribunal>
                </div>
            </div>

            <div className="right-home">
                <FriendsRequests></FriendsRequests>
                <Leaderboard></Leaderboard>
            </div>
        </div>
    )
}

export default DisplayUserHome