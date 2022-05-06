const createUpdate = props => {
    return(
        <div className="new-update">
            <div className="update">
                <div className="update-date">
                    <p>{props.date}</p>
                </div>
                <img className="update-img" src={props.img} alt="hello" />
                <h2 className="update-title">{props.title}</h2>
                <p className="update-info">{props.desc}</p>
            </div>
        </div>
    )
}

export default createUpdate