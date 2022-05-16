import { useEffect, useState } from "react"
import axios from "axios"
import Nav from "../components/nav"
import UserCard from "../components/usercard"

const Home = props => {
    const [proofs, setProofs] = useState([])
    
    useEffect(() => {
        const retrieveProof = async numToGet => {
            const res = await axios.get(`${process.env.REACT_APP_API}/proof/get/${numToGet}`, {
                headers: {
                    'Authorization': localStorage.getItem('UAT')
                }
            })

            setProofs(res.data.proofs)
        }
        
        retrieveProof(5)
    })

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

export default Home