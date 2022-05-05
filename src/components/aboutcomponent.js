import anime from "animejs"
import { useEffect } from "react"

const AboutComponent = () => {

    // KNOWN ISSUE IF YOU HOVER OVER MOVING DIVS, AS SOON AS THE CURSOR IS OUT OF THE DIVS BOUNDS
    // THE DIV WILL ATTEMPT TO RETURN TO ITS ORIGINAL POSITION. EXCEPT YOUR CURSOR MIGHT BE THERE
    // CAUSING THIS GROSS UP AND DOWN BOUNCING.
    useEffect(() => {
        let upMovingContainer = document.querySelectorAll('.up')
        let downMovingContainer = document.querySelectorAll('.down')
        
        //upward moving containers
        upMovingContainer.forEach((parent, index) => {
            parent.addEventListener('mouseenter', () => {
                anime({
                    targets: parent,
                    translateY: -400,
                    opacity: [1, 0]
                })
            })
    
            parent.addEventListener('mouseleave', () => {
                anime({
                    targets: parent,
                    translateY: 0,
                    opacity: [0, 1]
                })
            })
        })

        // downward moving containers
        downMovingContainer.forEach((parent, index) => {
            parent.addEventListener('mouseenter', () => {
                anime({
                    targets: parent,
                    translateY: 400,
                    opacity: [1, 0]
                })
            })
    
            parent.addEventListener('mouseleave', () => {
                anime({
                    targets: parent,
                    translateY: 0,
                    opacity: [0, 1]
                })
            })
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