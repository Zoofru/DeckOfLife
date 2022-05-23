import { UserContext } from '../../context/usercontext';
import { useContext, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import './texteditor.scss'

const TextEditor = props => {
    const [inputContent, setInputContent] = useState('')
    const { user } = useContext(UserContext)

    const sendMessage = async () => {
        // const res = axios.post(`${process.env.REACT_APP_API}/post/create`, {
        //     postContent: inputContent
        // })
        // console.log(res)
        console.log(inputContent)
    }

    return(
        <div className="text-editor">
            <div className='upper'>
                <img className='profile-img-editor' src={user.accountIcon} alt='proflie icon'/>
                <textarea 
                    className='text-field font-roboto'
                    placeholder='Got Something to Say?'
                    onChange={e => setInputContent(e.target.value)}
                    value={inputContent}
                ></textarea>
            </div>

            <div className='lower'>
                <div className='input-types'>
                    <button className='btn-text-editor media-btn'>
                        <InsertPhotoOutlinedIcon className='media-icon'></InsertPhotoOutlinedIcon>
                    </button>
                </div>

                <div className='send'>
                    <button className='btn-text-editor send-btn' onClick={sendMessage}>
                        <SendIcon className='send-icon'></SendIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TextEditor