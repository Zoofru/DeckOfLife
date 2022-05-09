import { useState } from "react"
import { Link } from "react-router-dom"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Login = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [rememberMeChecked, setRememberMeChecked] = useState(false)

    const handleLogin = async e => {
        e.preventDefault()
        console.log(password)
        console.log(email)

        setPassword('')
        setEmail('')
    }

    const Styles = {
        checkBoxText: {
            color: '#0062FF',
        },
    }

    return(
        <div className="login-page">
            <div className="login-img">
                <img className="cyberpunk-login-img" src='https://i.imgur.com/SmVP3He.jpg' alt="cyberpunk-img" />
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
                        value={email}
                        required
                        onChange={e => { setEmail(e.target.value) }}
                    />

                    <input 
                        className="login-from-password-input login-input font input-password" 
                        type='password' 
                        autoComplete="false" 
                        spellCheck='false' 
                        placeholder="-> Password" 
                        value={password}
                        required
                        onChange={e => { setPassword(e.target.value) }} 
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
    )
}

export default Login