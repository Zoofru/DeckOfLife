import { useState } from "react"
import { Link } from "react-router-dom"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {
    const [passwordInput, setPasswordInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [rememberMeChecked, setRememberMeChecked] = useState(false)
    const navigate = useNavigate()


    const handleLogin = async e => {
        e.preventDefault()

        const formattedEmail = emailInput.toLowerCase()
        const res = await axios.post(`${process.env.REACT_APP_API}/user/login`, {
            email: formattedEmail,
            password: passwordInput
        })
        // console.log(res)

        if(res.data.user) {
            //Store user information in user context
            //Send user to users homepage
            navigate('/home')
        }


        setPasswordInput('')
        setEmailInput('')
    }

    const Styles = {
        checkBoxText: {
            color: '#0062FF',
        },
    }

    return(
        <div className="login-page">

            <div className="login-img-mobile">
                <img className="mobile-img" src="https://i.imgur.com/KqtiLvZ.png" alt="suits" />
            </div>

            <div className="login-info">
                <h1 className="font login-title">Welcome, <br /> <span className='blue-neon'>Card Chaser</span></h1>
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

            <div className="login-img">
                <img className="cyberpunk-login-img" src='https://i.imgur.com/SmVP3He.jpg' alt="cyberpunk-img" />
            </div>
        </div>
    )
}

export default Login