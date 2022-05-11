import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

const Signup = () => {
    const [verifyTOS, setVerifyTOS] = useState(true)
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [initCodeInput, setInitCodeInput] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        if(verifyTOS) {

            //Format username to starts with capital and continue lowercase
            //EX: SpOnGeBoB -> Spongebob
            let firstLetterUsername = usernameInput[0]
            firstLetterUsername.toUpperCase()

            let splitUsername = usernameInput.split('')
            splitUsername.splice(0, 1)
            
            let rejoinName = splitUsername.join('').toLowerCase().split('')
            rejoinName.unshift(firstLetterUsername)

            const formattedUsername = rejoinName.join('')
            const formattedEmail = emailInput.toLowerCase()

            //create user
            const res = await axios.post(`${process.env.REACT_APP_API}/user/create`, {
                username: formattedUsername,
                email: formattedEmail,
                password: passwordInput
            })


            // create new code and attach it to user
            if(res.data.user) {
                await axios.post(`${process.env.REACT_APP_API}/code/new`, {
                    userId: res.data.user[0].id
                })
            }
    
            setPasswordInput('')
            setEmailInput('')
            setUsernameInput('')
            setInitCodeInput('')
        } else {
            // TODO: Give user feedback about needing to read and agree to TOS
            console.log('not TOS')
        }
    }

    const TosCheckLabel = <small className='tos-check'>I agree with Deck Of Life's <Link className='tos-privacy-link' to='/tos'>Terms Of Service</Link>, and <Link className='tos-privacy-link' to='/privacy-policy'>Privacy Policy.</Link></small>

    return (
        <div className="signup-page">
            <div className="signup-img-container">
                <img className="signup-img" src="https://i.imgur.com/tQwBYLd.jpg" alt="neon-city" />
            </div>

            <div className="signup-info">
                <h1 className="signup-title font">Chase the Thrill!</h1>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <input 
                        className="signup-input" 
                        type='text' 
                        autoComplete='off' 
                        spellCheck='off' 
                        placeholder='Username'
                        value={usernameInput}
                        onChange={e => { setUsernameInput(e.target.value)}}
                        required
                    />

                    <input 
                        className="signup-input" 
                        type='email' 
                        autoComplete='off' 
                        spellCheck='off' 
                        placeholder='Email'
                        value={emailInput}
                        onChange={e => { setEmailInput(e.target.value)}}
                        required
                    />

                    <input 
                        className="signup-input" 
                        type='password' 
                        autoComplete='off' 
                        spellCheck='off' 
                        placeholder='Password'
                        value={passwordInput}
                        onChange={e => { setPasswordInput(e.target.value)}}
                        required
                    />

                    <input 
                        className="signup-input last-input" 
                        type='text' 
                        autoComplete='off' 
                        spellCheck='off' 
                        placeholder='Initialization Code'
                        value={initCodeInput}
                        onChange={e => { setInitCodeInput(e.target.value)}}
                        // required
                    />

                    <div className="user-actions-signup">
                        <FormGroup>
                            <FormControlLabel 
                                control={
                                    <Checkbox 
                                        defaultChecked 
                                        sx={{color: "#0062FF"}} 
                                        size="small"
                                        onChange={e => setVerifyTOS(!verifyTOS) }
                                    />
                                } 
                                label={TosCheckLabel}
                            />
                        </FormGroup>
                    </div>

                    <button type='submit' className='signup-submit'>Join</button>
                </form>
            </div>
        </div>
    )
}

export default Signup