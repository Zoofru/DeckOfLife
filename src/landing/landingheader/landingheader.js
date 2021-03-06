import LandingNav from '../landingnav/landingnav';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './landingheader.scss';

const LandingHeader = props => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => setModalOpen(true)
    const handleModalClose = () => setModalOpen(false)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        color: "#FFFF33",
        p: 4,
      };

    // HANDLE REQUEST ACCESS
    const handleInitReqSubmit = async () => {
        //TODO
    }

    return(
        <>
            <video autoPlay muted loop id='homepage-stars'>
                <source src="https://i.imgur.com/YV3qhf6.mp4"></source>
            </video>
            {/* credit:  https://www.pexels.com/video/stars-and-the-planet-earth-7184620/ */}
            
            <div className="home-header">
                <LandingNav></LandingNav>
                <div className='home-content-container'>
                    <div className='title-img-container'>
                        <div className='title'>
                            <h1 className="game-title">Deck Of Life</h1>
                        </div>
                    </div>
                </div>
                <div className='home-register-btns'>
                    <Link to='/signup'>
                        <button className='init-btns'>Initialize Code</button>
                    </Link>
                    <button className='init-btns req-access' onClick={handleModalOpen}>Request Access</button>
                </div>
            </div>

            {/* REQUEST ACCESS MODAL */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modalOpen}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
            }}
            >
                <Fade in={modalOpen}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        <h1 className='modal-title font'>Request Access</h1>
                    </Typography>

                    <div className='display-flex-jc-center'>
                        <div className='divider'></div>
                    </div>

                    <Typography id="transition-modal-description" className='modal-desc-layout' sx={{ mt: 2 }}>
                        <p className='font modal-desc'>
                            <span className='small'>Current users have access to a code, if you know someone who is already initiated, ask them for theirs.</span>
                            <br/><br/>
                            To request access to Deck Of Life simply enter your email below.
                        </p>
                        <form className='init-req-form' onSubmit={handleInitReqSubmit}>
                            <input className='input-email-req font' type='email' autocomplete='off' placeholder='->'></input>
                            <button className='init-req-form-btn font' type='submit'>Request</button>
                        </form>
                    </Typography>
                </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default LandingHeader