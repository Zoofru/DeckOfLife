import { useState, useContext } from "react"
import { UserContext } from "../../context/usercontext";
import { Link } from "react-router-dom"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import axios from 'axios'
import './login.scss'


const Login = () => {
    const [passwordInput, setPasswordInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [rememberMeChecked, setRememberMeChecked] = useState(false)

    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = async e => {
        e.preventDefault()

        const formattedEmail = emailInput.toLowerCase()
        const res = await axios.post(`${process.env.REACT_APP_API}/user/login`, {
            email: formattedEmail,
            password: passwordInput
        })
        console.log(res)

        if(res.data.user) {
            //Store user information in user context
            localStorage.setItem('UAT', res.data.acessToken)
            setUser(res.data.user)
            navigate('/home')
        }


        setPasswordInput('')
        setEmailInput('')
    }

    const Styles = {
        checkBoxText: {
            color: '#0062FF',
        },
        arrow: {
            width: '10%',
            height: '60%'
        }
    }

    const returnToLanding = () => {
        navigate('/')
    }

    return(
        <div className="login-page">
            <title>Login</title>
            <div className="login-img-mobile">
                <img className="mobile-img" src="https://i.imgur.com/KqtiLvZ.png" alt="suits" />
            </div>

            <div className="login-info">
                <div className="return-cont">
                    <ArrowCircleLeftOutlinedIcon 
                        style={Styles.arrow} 
                        className={'back-arrow'} 
                        onClick={returnToLanding}
                    ></ArrowCircleLeftOutlinedIcon>
                </div>
                <div className="login-info">
                    <h1 className="font login-title">Welcome, <br /> <span className='blue-neon'> Card Chaser</span></h1>
                    <form className="login-form" onSubmit={handleLogin}>

                        <input 
                            className="login-from-email-input login-input font" 
                            type='email' 
                            autoComplete="false" 
                            spellCheck='false' 
                            placeholder="-> Email" 
                            value={emailInput}
                            required
                            onChange={e => { setEmailInput(e.target.value) }}
                        />

                        <input 
                            className="login-from-password-input login-input font input-password" 
                            type='password' 
                            autoComplete="false" 
                            spellCheck='false' 
                            placeholder="-> Password" 
                            value={passwordInput}
                            required
                            onChange={e => { setPasswordInput(e.target.value) }} 
                        />
                        
                        <div className="user-actions-login">
                            <FormGroup>
                                <FormControlLabel 
                                    control={
                                        <Checkbox 
                                            defaultChecked 
                                            sx={{color: "#0062FF"}} 
                                            size="small"
                                            onChange={e => setRememberMeChecked(!rememberMeChecked) }
                                        />
                                    } 
                                    label="Remember me" 
                                    style={Styles.checkBoxText}
                                />
                            </FormGroup>

                            <Link to='/forgot-password' className="forgot-password">
                                <p>Forget password?</p>
                            </Link>

                        </div>

                        <button className="login-form-submit font" type="submit">Sign In</button>
                    </form>
                </div>
            </div>

            <div className="login-img">
                <img className="cyberpunk-login-img" src='https://i.imgur.com/SmVP3He.jpg' alt="cyberpunk-img" />
            </div>
        </div>
    )
}

export default Login