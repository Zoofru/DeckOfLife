import { useState } from "react"

const Login = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleLogin = async e => {
        e.preventDefault()
        console.log(password)
        console.log(email)

        setPassword('')
        setEmail('')
    }

    return(
        <div className="login-page">
            <div className="login-img">
                <img className="cyberpunk-login-img" src='https://i.imgur.com/SmVP3He.jpg' alt="cyberpunk-img" />
            </div>

            <div className="login-info">
                <h1 className="font login-title">Deck Of Life</h1>
                <form className="login-form" onSubmit={handleLogin}>

                    <input 
                        className="login-from-email-input login-input font" 
                        type='email' 
                        autoComplete="false" 
                        spellCheck='false' 
                        placeholder="-> Email" 
                        value={email} 
                        onChange={e => { setEmail(e.target.value) }}
                    />

                    <input 
                        className="login-from-password-input login-input font" 
                        type='password' 
                        autoComplete="false" 
                        spellCheck='false' 
                        placeholder="-> Password" 
                        value={password} 
                        onChange={e => { setPassword(e.target.value) }} 
                    />

                    <button className="login-form-submit font" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login