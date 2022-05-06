const createUpdate = props => {
    return(
        <div className="new-update">
            <div className="update">
                <img className="update-img" src={props.img} alt="hello" />
                <p className="update-date">{props.date}</p>
                <h2 className="update-title">{props.title}</h2>
                <div className="read-news">
                    <button className="read-update-news">READ NEWS</button>
                </div>
            </div>
        </div>
    )
}

export default createUpdate