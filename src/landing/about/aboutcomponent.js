import anime from "animejs"
import { useEffect } from "react"
import './about.scss'

const AboutComponent = () => {
    
    useEffect(() => {
        let cardCovers = document.querySelectorAll('.card-cover')

        cardCovers.forEach((parent, index) => {
            parent.addEventListener('mouseenter', () => {
                anime({
                    targets: parent,
                    opacity: [1, 0],
                    duration: 3000
                })
            })
    
            parent.addEventListener('mouseleave', () => {
                anime({
                    targets: parent,
                    opacity: [0, 1],
                    duration: 3000
                })
            })
        })
    })

    return(
        <div>
            <div className="underlay">
                <div className="section-club-info underlay-section">
                    <div className="info club-info">
                        <h1 className="info-title">Thrill</h1>
                        <p className="info-p">
                            Participate in games of the mind, of emotion, of strength, and of cooperation.
                            Use your ruleset to succeed in games and achieve the card that corresponds with its difficulty and suit.
                        </p>
                    </div>
                </div>

                <div className="section-diamond-info underlay-section">
                    <div className="info diamond-info">
                        <h1 className="info-title">Challenges</h1>
                        <p className="info-p">
                            Participate in games of varying difficulty increasing from 2 to an ace.
                            With a ruleset changing with each suit, you will seldom find two Challenges of the same premise.
                            Can you acheive the full deck?
                        </p>
                    </div>
                </div>

                <div className="section-spade-info underlay-section">
                    <div className="info spade-info">
                        <h1 className="info-title">Ranks</h1>
                        <p className="info-p">
                            Complete challenges and climb the ranks. Become the top card carrier, and show everyone 
                            theres nothing you dont have the balls for.
                        </p>
                    </div>
                </div>

                <div className="section-heart-info underlay-section">
                    <div className="info heart-info">
                        <h1 className="info-title">Compete</h1>
                        <p className="info-p">
                            Think you have bigger balls than another card chaser? Put your cards on the line and prove it.
                            Compete against other card chasers to acquire the the illusive Jacks, Queens, Kings, and Aces.
                            required to complete all decks.
                        </p>

                    </div>
                </div>
            </div>

            <div className="about-sections">
                <div className="container-club card-cover">
                    <div className="card-section club-section up-section">
                        <img className="card-img-about club" src='https://i.imgur.com/Cotrrou.png' alt='club-card'/>
                    </div>
                </div>
                
                <div className="container-diamond card-cover">
                    <div className="card-section diamond-section">
                        <img className="card-img-about diamond" src='https://i.imgur.com/vePHxaB.png' alt='diamond-card'/>
                    </div>
                </div>
                
                <div className="container-spade card-cover">
                    <div className="card-section spade-section up-section">
                        <img className="card-img-about spade" src='https://i.imgur.com/nf9LPoj.png' alt='spade-card'/>
                    </div>
                </div>

                <div className="container-heart card-cover">
                    <div className="card-section heart-section">
                        <img className="card-img-about heart" src='https://i.imgur.com/KGpBWkU.png' alt='heart-card'/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent