import Nav from "../components/nav"
import UserCard from "../components/usercard"

const Home = props => {
    return(
        <div className="home-page">
            <div className="left-side-home">
                <UserCard></UserCard>
                <Nav></Nav>
            </div>
        </div>
    )
}

export default Home