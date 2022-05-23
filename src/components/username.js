import { useContext } from "react"
import { UserContext } from "../context/usercontext"
import './username.scss'

const Username = props => {
    const { user } = useContext(UserContext)

    const Styles = {
        iconStyle: {
            width: props.iconWidth
        },
        usernameStyle: {
            fontSize: props.fontSize,
            color: props.color
        }
    }

    return(
        <div className="username-comp">
            {user ? 
                <>
                    {user.isStaff ? <img style={Styles.iconStyle} src="https://i.imgur.com/6P1CHsh.png" alt='staff'/> : <></> }
                    <p className="white font-roboto" style={Styles.usernameStyle}>{props.username}</p>
                </>
            :
                <></>
            }
        </div>
    )
}

export default Username