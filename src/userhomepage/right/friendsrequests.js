import axios from 'axios'
import { useEffect, useState } from 'react'
import './friendsrequests.scss'

const FriendsRequests = props => {
    const [friendRequests, setFriendRequests] = useState([])

    useEffect(() => {
        const getRequests = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API}/friendrequests/getUserReqs`, {
                headers: {
                    'Authorization': localStorage.getItem('UAT')
                }
            })
            setFriendRequests(res.data.friendsRequests)
        }

        getRequests()
    }, [])

    const deleteFriendReq = async (friendReq, index) => {
        await axios.delete(`${process.env.REACT_APP_API}/friendrequests/del/${friendReq.id}`, {
            headers: {
                'Authorization': localStorage.getItem('UAT')
            }
        })

        //When request is declined remove the request from friend req array
        //then set array = to itself just to get the component to re render
        friendRequests.splice(index, 1)
        setFriendRequests({friendRequests})
    }

    //only attempt to loop through friend requests if it has content.
    //if this isnt checked it will crash the site and wont load page.
    let displayRequests;
    if(friendRequests.length > 0) {
        displayRequests = friendRequests.map((friendReq, index) => {
            return(
                <div className='individual-friend-req' key={index}>
                    <div className='friend-req-info'>
                        <img className='friend-req-img' src={friendReq.requestinguserAccountIcon} alt='profile pic' />
                        <p className='white font-roboto'>{friendReq.requestingUserUsername}</p>
                    </div>
    
                    <div className='accept-btn'>
                        &#10003;
                    </div>
    
                    <div className='cancel-btn' onClick={() => deleteFriendReq(friendReq, index)}>
                        &#10006;
                    </div>
                </div>
            )
        })
    }

    return(
        <div className="friends-req">
            <h5 className="white font-roboto">Friends Requests</h5>
            <div className="friends-req-container">
                {displayRequests}
            </div>
        </div>
    )
}

export default FriendsRequests