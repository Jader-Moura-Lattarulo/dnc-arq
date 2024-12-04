import './ProjectsList.css'

//ASSETS
import LikedFilled from '../../assets/like-filled.svg'
import Like from '../../assets/like.svg'

function ProjectsList() {
    return (
        <div className="projects-section" >
            <div className="projects-hero">
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>
            <div className="projects-grid">
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>
                    <img src={LikedFilled} height="20px"/>
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>
                    <img src={Like} height="20px"/>
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>
                    <img src={LikedFilled} height="20px"/>
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>
                    <img src={LikedFilled} height="20px" />
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>
                    <img src={LikedFilled} height="20px" />
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>
                    <img src={LikedFilled} height="20px" />
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>
                    <img src={LikedFilled} height="20px" />
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>
                    <img src={LikedFilled} height="20px" />
                </div>
            </div>
        </div>
    )
}

export default ProjectsList
