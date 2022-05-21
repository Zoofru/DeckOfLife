import { useEffect, useState } from 'react'
import axios from 'axios'
import './leaderboard.scss'

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([])
    
    useEffect(() => {
        const getLeaderboardUsers = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API}/user/leaderboardusers`)
            setLeaders(res.data.users)
        }

        getLeaderboardUsers()
    }, [])

    const displayLeaders = leaders.map((leader, index) => {
        return(
            <tr key={index}>
                <td>
                    {index <= 2 ? 
                        <div className={`crown-container place-${index}`}>
                            <img className='crown' src='https://i.imgur.com/y4enC8Z.png' alt='crown' />
                        </div>
                    :
                        <></>
                    }
                    <img className='account-icon-leaderboard' src={leader.accountIcon} alt='account icon' />
                    {leader.username}
                    </td>
                <td>{leader.rank}</td>
                <td>{leader.challengesComplete}</td>
            </tr>
        )
    })
    
    return(
        <div className="leaderboard">
            <h5 className="white font-roboto">Leaderboard</h5>
            <div className="leaderboard-container">
                <table className='font-roboto white'>
                    <tr>
                        <th>Player</th>
                        <th>Rank</th>
                        <th>Cards</th>
                    </tr>
                    {displayLeaders}
                </table>
            </div>
        </div>
    )
}

export default Leaderboard