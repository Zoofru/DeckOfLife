import anime from "animejs"
import { useEffect } from "react"

const AboutComponent = () => {

    useEffect(() => {
        let upMovingContainer = document.querySelectorAll('.up')
        let downMovingContainer = document.querySelectorAll('.down')
        
        //upward moving containers
        upMovingContainer.forEach((parent, index) => {
            parent.addEventListener('mouseenter', () => {
                anime({
                    targets: parent.firstChild,
                    translateY: -400,
                    opacity: [1, 0]
                })
    
                setTimeout(() => {
                    parent.firstChild.classList.add('hidden')
                    parent.lastChild.classList.remove('hidden')
                }, 400)
            })
    
            parent.addEventListener('mouseleave', () => {
                anime({
                    targets: parent.firstChild,
                    translateY: 0,
                    opacity: [0, 1]
                })
    
                setTimeout(() => {
                    parent.firstChild.classList.remove('hidden')
                    parent.lastChild.classList.add('hidden')
                }, 100)
            })
        })

        // downward moving containers
        downMovingContainer.forEach((parent, index) => {
            parent.addEventListener('mouseenter', () => {
                anime({
                    targets: parent.firstChild,
                    translateY: 400,
                    opacity: [1, 0]
                })
    
                setTimeout(() => {
                    parent.firstChild.classList.add('hidden')
                    parent.lastChild.classList.remove('hidden')
                }, 400)
            })
    
            parent.addEventListener('mouseleave', () => {
                anime({
                    targets: parent.firstChild,
                    translateY: 0,
                    opacity: [0, 1]
                })
    
                setTimeout(() => {
                    parent.firstChild.classList.remove('hidden')
                    parent.lastChild.classList.add('hidden')
                }, 100)
            })
        })
    })

    return(
        <div>
            <div className="about-sections">
                <div className="container-club up">
                    <div className="card-section club-section up-section">
                        <img className="card-img-about club" src='https://i.imgur.com/Cotrrou.png' alt='club-card'/>
                    </div>
                    <div className="info club-info hidden">
                        <h1 className="info-title">Club Title</h1>
                    </div>
                </div>
                
                <div className="container-diamond down">
                    <div className="card-section diamond-section">
                        <img className="card-img-about diamond" src='https://i.imgur.com/vePHxaB.png' alt='diamond-card'/>
                    </div>
                    <div className="info diamond-info hidden">
                        <h1 className="info-title">Diamond Title</h1>
                    </div>
                </div>
                
                <div className="container-spade up">
                    <div className="card-section spade-section up-section">
                        <img className="card-img-about spade" src='https://i.imgur.com/nf9LPoj.png' alt='spade-card'/>
                    </div>
                    <div className="info spade-info hidden">
                        <h1 className="info-title">Spade title</h1>
                    </div>
                </div>

                <div className="container-heart down">
                    <div className="card-section heart-section">
                        <img className="card-img-about heart" src='https://i.imgur.com/KGpBWkU.png' alt='heart-card'/> 
                    </div>
                    <div className="info heart-info hidden">
                        <h1 className="info-title">Heart Title</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent