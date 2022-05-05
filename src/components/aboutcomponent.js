import anime from "animejs"
import { useEffect } from "react"

const AboutComponent = () => {

    // -- possible issues --
    // -> moving to fast horizontally divs may get stuck open.
    // -> current way is simply pushing the div into the two sections above and below about
    
    useEffect(() => {
        let upMovingContainer = document.querySelectorAll('.up')
        let downMovingContainer = document.querySelectorAll('.down')
        let clubInfo = document.querySelector('.section-club-info')
        let spadeInfo = document.querySelector('.section-spade-info')
        let diamondInfo = document.querySelector('.section-diamond-info')
        let heartInfo = document.querySelector('.section-heart-info')

        //upward moving containers
        upMovingContainer.forEach((parent, index) => {
            
            // send div up
            parent.addEventListener('mouseenter', () => {
                anime({
                    targets: parent,
                    translateY: -1200,
                    opacity: [1, 0]
                })
            })

            // once div is hovered over, send it off screen and hand control over 
            // to info div to control when it comes down.

            // CLUBS
            if(parent.classList.contains('container-club')) {
                clubInfo.addEventListener('mouseenter', () => {
                    anime({
                        targets: parent,
                        translateY: -1200,
                        opacity: [1, 0]
                    })
                })
        
                clubInfo.addEventListener('mouseleave', () => {
                    anime({
                        targets: parent,
                        translateY: 0,
                        opacity: [0, 1]
                    })
                })
            }
            
            // SPADES
            if(parent.classList.contains('container-spade')) {
                spadeInfo.addEventListener('mouseenter', () => {
                    anime({
                        targets: parent,
                        translateY: -1200,
                        opacity: [1, 0]
                    })
                })
        
                spadeInfo.addEventListener('mouseleave', () => {
                    anime({
                        targets: parent,
                        translateY: 0,
                        opacity: [0, 1]
                    })
                })
            }
        })

        // downward moving containers
        downMovingContainer.forEach((parent, index) => {
            parent.addEventListener('mouseenter', () => {
                anime({
                    targets: parent,
                    translateY: 1200,
                    opacity: [1, 0]
                })
            })

            // Diamond
            if(parent.classList.contains('container-diamond')) {
                diamondInfo.addEventListener('mouseenter', () => {
                    anime({
                        targets: parent,
                        translateY: 1200,
                        opacity: [1, 0]
                    })
                })
        
                diamondInfo.addEventListener('mouseleave', () => {
                    anime({
                        targets: parent,
                        translateY: 0,
                        opacity: [0, 1]
                    })
                })
            }

            //Heart
            if(parent.classList.contains('container-heart')) {
                heartInfo.addEventListener('mouseenter', () => {
                    anime({
                        targets: parent,
                        translateY: 1200,
                        opacity: [1, 0]
                    })
                })
        
                heartInfo.addEventListener('mouseleave', () => {
                    anime({
                        targets: parent,
                        translateY: 0,
                        opacity: [0, 1]
                    })
                })
            }
        })
    })

    return(
        <div>
            <div className="underlay">
                <div className="section-club-info underlay-section">
                    <div className="info club-info hidden">
                        <h1 className="info-title">Club Title</h1>
                    </div>
                </div>

                <div className="section-diamond-info underlay-section">
                    <div className="info diamond-info hidden">
                        <h1 className="info-title">Diamond Title</h1>
                    </div>
                </div>

                <div className="section-spade-info underlay-section">
                    <div className="info spade-info hidden">
                        <h1 className="info-title">Spade title</h1>
                    </div>
                </div>

                <div className="section-heart-info underlay-section">
                    <div className="info heart-info hidden">
                        <h1 className="info-title">Heart Title</h1>
                    </div>
                </div>
            </div>

            <div className="about-sections">
                <div className="container-club up">
                    <div className="card-section club-section up-section">
                        <img className="card-img-about club" src='https://i.imgur.com/Cotrrou.png' alt='club-card'/>
                    </div>
                </div>
                
                <div className="container-diamond down">
                    <div className="card-section diamond-section">
                        <img className="card-img-about diamond" src='https://i.imgur.com/vePHxaB.png' alt='diamond-card'/>
                    </div>
                </div>
                
                <div className="container-spade up">
                    <div className="card-section spade-section up-section">
                        <img className="card-img-about spade" src='https://i.imgur.com/nf9LPoj.png' alt='spade-card'/>
                    </div>
                </div>

                <div className="container-heart down">
                    <div className="card-section heart-section">
                        <img className="card-img-about heart" src='https://i.imgur.com/KGpBWkU.png' alt='heart-card'/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent