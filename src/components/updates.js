import CreateUpdate from "./createupdate"

const updates = props => {
    
    let mayFourthDesc = "Today is the beginning of the Deck of Life! It is created by a single developer, Me! I Look forward to many ups and downs!"
    
    return(
        <div className="updates">
            <CreateUpdate
                img="https://i.imgur.com/toVsGAx.png" 
                title="Well, Hello There!"
                desc={mayFourthDesc}
                date='May 4th, 2022'
            ></CreateUpdate>
        </div>
    )
}

export default updates