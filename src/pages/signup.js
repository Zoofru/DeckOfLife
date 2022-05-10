import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Signup = () => {
    const [verifyTOS, setVerifyTOS] = useState(false)

    const handleSubmit = async () => {

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
                        required
                    />

                    <input 
                        className="signup-input" 
                        type='email' 
                        autoComplete='off' 
                        spellCheck='off' 
                        placeholder='Email'
                        required
                    />

                    <input 
                        className="signup-input" 
                        type='text' 
                        autoComplete='off' 
                        spellCheck='off' 
                        placeholder='Password'
                        required
                    />

                    <input 
                        className="signup-input last-input" 
                        type='text' 
                        autoComplete='off' 
                        spellCheck='off' 
                        placeholder='Initialization Code'
                        required
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