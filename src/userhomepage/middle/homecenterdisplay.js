import { useEffect, useState, useContext } from "react"
import axios from "axios"
import Nav from '../left/nav'
import UserCard from "../left/usercard"
import { UserContext } from "../../context/usercontext"
import './homecenter.scss'

const HomeCenterDisplay = props => {
    const [proofs, setProofs] = useState([])
    const { setUser } = useContext(UserContext)
    
    useEffect(() => {
        const retrieveProof = async numToGet => {
            const res = await axios.get(`${process.env.REACT_APP_API}/proof/get/${numToGet}`, {
                headers: {
                    'Authorization': localStorage.getItem('UAT')
                }
            })

            setProofs(res.data.proofs)
        }

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
        
        retrieveProof(5)
    }, [])

    const displayTribunalVideos = proofs.map((proof, index) => {
        return (
                <video className="tribunal-video" controls key={index}>
                    <source src={proof.proofUrl} type="video/mp4"></source>
                </video>
        )
    })
    
    return(
        <div className="home-page">
            <div className="left-side-home">
                <UserCard></UserCard>
                <Nav></Nav>
            </div>

            <div className="center-home">
                <p className="tribunal-title white font-roboto">Tribunal</p>
                <div className="tribunal">
                    {proofs.length > 0 ? displayTribunalVideos() : <p className="font-roboto tribunal-ph">Your tribunal videos will appear here when your vote is needed..</p> }
                </div>
            </div>
        </div>
    )
}

export default HomeCenterDisplay