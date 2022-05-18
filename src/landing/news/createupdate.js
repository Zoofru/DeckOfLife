import './createupdate.scss'

const createUpdate = props => {
    return(
        <div className="new-update">
            <div className="update">
                <img className="update-img" src={props.img} alt="hello" />
                <p className="update-date font-roboto">{props.date}</p>
                <h2 className="update-title font-roboto">{props.title}</h2>
                <div className="read-news">
                    <button className="read-update-news font-roboto">READ NEWS</button>
                </div>
            </div>
        </div>
    )
}

export default createUpdate