import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faSquareLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import {faCode} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


import gitProfile from './pics/gitprofile.jpg'
import project1 from './pics/webpage-portfolio.jpg'
import project2 from './pics/WCHAT-LANDING.jpg'
import project3 from './pics/Home Page.jpg'

import reactIcon from './pics/react.png'
import firebaseIcon from './pics/firebase.png'
import vscodeIcon from './pics/vscode.png'
import figmaIcon from './pics/figma.png'
import muiIcon from './pics/mui.png'
import mysqlIcon from './pics/mysql.png'
import gitIcon from './pics/git.png'
import uiuxIcon from './pics/uiux.png'
import jsIcon from './pics/js.png'
import phpIcon from './pics/php.png'
import claudeIcon from './pics/claude.png'
import phoneIcon from './pics/phone.png'
import mee from './pics/mee.png'


import './css/App.css'

import { Link } from "react-scroll";
import { useEffect } from 'react'


function App() {

    useEffect(() => {
        const header = document.querySelector(".navbar-container");
        const handleScroll = () => {
        if (window.scrollY > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
return (
<>


{/* Header Logo */}
<div className="blob-outer-container" id="home">
    <header className="navbar-container">
    <nav className="logo-container">
        <div>
            son.dev
        </div>
    </nav>
{/* Menu */}
    <nav className="menu-container">
        <ul className="menu-list">
            <Link to="home" smooth={true} duration={600}><a className="item">Home</a></Link>
            <Link to="about" smooth={true} duration={600}><a className="item" >About</a></Link>
            <Link to="experience" smooth={true} duration={600}><a className="item">Experience</a></Link>
            <Link to="contact" smooth={true} duration={600}><a className="item">Contact</a></Link>
        </ul>
    </nav>
    </header>
{/* Hero Section */}
            <div className="hero-container">
                <h3>Chapter 1: The Beginning</h3>
                <p>A passionate developer crafting digital experiences that bridge creativity and functionality.</p>

                <div className="hero-button-container">
                        <Link to="projects" smooth={true} duration={600}><button className="hero-button-explore">Explore My Work</button></Link>
                    
                <a href="https://drive.google.com/file/d/1QQCKhgVxF0uQGNuZ6fAmWlsAxAs9zByi/view?usp=drive_link" target="_blank">
                <button className="hero-button-resume">Download Resume</button>
                </a>
                </div>
            </div>
    <div className="blob-inner-container">
        <div className="blob">
            
        </div>
        
    </div>
</div>
{/* About Section */}
<div className="section2" id="about">
    <h3>Chapter 2: Person Behind the 
        <br></br>
    <span>Code</span>
    </h3>

    <div className="about-me-content-container">
        <div className="about-me-text-container">
            <p>I'm a Computer Engineering graduate specializing in full-stack web development with React, Firebase, and PHP. My journey spans from hardware systems integration to building responsive web applications that solve real-world problems.</p>
            <br></br>
            <p>When I'm not coding, you'll find me exploring new technologies, working on embedded systems projects, or designing precise technical solutions. I believe in delivering user-focused applications from concept to deployment while continuously pushing the boundaries of what's possible.</p>
            
            <div className="stats-container">
                <div className="stat-box">
                    <h2>20 +</h2>
                    <p>Projects</p>
                </div>
                <div className="stat-box">
                    <h2>1</h2>
                    <p>Year Exp.</p>
                </div>
                <div className="stat-box">
                    <h2>12 +</h2>
                    <p>Technologies</p>
                </div>
            </div>
        </div>
      <div className="about-me-image-container">
  <img src={gitProfile} alt="profile-pic" className="about-me-image front" />
  <img src={mee} alt="profile-pic" className="about-me-image back" />

  <FontAwesomeIcon 
    icon={faCode} 
    className="code"
    style={{
      color: 'white',
      fontSize: '10px',
      background: 'rgba(16, 185, 129, 1)',
      borderRadius: '99999px',
      padding: '10px',
      height: '40px',
      width: '40px',
      marginTop: '335px',
      marginLeft: '350px'
    }} 
  />
</div>

    </div>
    </div>
<div className="section3" id="experience">
    <h3>Chapter 3: The Journey So
        <br></br>
    <span>Far</span>
    </h3>

    <div className="timeline">

        <div className="container left-container">
            <div className="status-ball1"></div>
            <div className="text-box">
                <h1>Front End Developer</h1>
                <h2>IRENISUS</h2>
                <small>Aug 2025 - Present </small>
                <p>Built responsive company website using React with modern UI/UX. Hand-coded responsive frontend using semantic HTML5, CSS3, and JavaScript. Collaborated with backend developer for seamless API connectivity.</p>
            </div>
        </div>

        <div className="container right-container">
            <div className="status-ball2 "></div>
            <div className="text-box">
                <h1>Engineering Intern</h1>
                <h2>10 Fields Factory Japan Inc.</h2>
                <small>Feb 2025 - April 2025 </small>
                <p>Designed 20+ precise solar rooftop layouts in AutoCAD for residential and commercial installations. Collaborated with engineers and technicians from design through implementation.</p>
            </div>
        </div>

        <div className="container left-container">
            <div className="status-ball3 green"></div>
            <div className="text-box">
                <h1>Freelancer</h1>
                <h2>SELF-EMPLOOYED</h2>
                <small>Aug 2021 - July 2025 </small>
                <p>Created webpage with focus on user experience and performance optimization. Delivered end-to-end solutions including database design and API integration to my classmates.</p>
            </div>
        </div>

    </div>

</div>

<div className="section4" id="projects">
    <h3>Chapter 4: What I've Built</h3>

    <div className="project-container">
        <div className="project-box">
            <div className="box-margin">
                <img src={project1} />
                    <h1>son.dev</h1>
                    <p
                    style={{
                        height: '80px'
                    }}>A personal website showcasing my skills in web design and development, featuring a clean layout and interactive elements.</p>
                        <div className="technologies-container">
                            <div className="technologies-1">React</div>
                        </div>

                            <div className="section4-links-container"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '20px'
                                }}><a href="https://github.com/son4018/webPortfolio" target="_blank">
                                    <FontAwesomeIcon icon={faGithub}
                                        style={{
                                            color: 'rgba(99, 102, 241, 1)',
                                            fontSize: '25px',
                                        }}
                                    />
                                    </a>
                                    <a href="https://vercel.com/iversons-projects-dc6ed32d/web-portfolio/BEWgMoH1JURpuoi5yhP5ZZpBHwts" target="_blank">
                                    <FontAwesomeIcon icon={faUpRightFromSquare}
                                        style={{
                                            color: 'rgba(245, 158, 11, 1)',
                                            fontSize: '22px',
                                        }}
                                    />
                                    </a>
                            </div>
            </div>
        </div>
        <div className="project-box">
            <div className="box-margin">
                <img src={project2} />
                    <h1>W-Chat</h1>
                    <p
                    style={{
                        height: '80px'
                    }}>A real-time chat application that allows users to join a global chatroom using Google Authentication.</p>
                        <div className="technologies-container">
                            <div className="technologies-1">React</div>
                            <div className="technologies-2">Firebase</div>
                        </div>
                            <div className="section4-links-container"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '20px'
                                }}>
                                    <a href="https://github.com/son4018/W-Chat" target="_blank">
                                    <FontAwesomeIcon icon={faGithub}
                                        style={{
                                            color: 'rgba(99, 102, 241, 1)',
                                            fontSize: '25px',
                                        }}
                                    />
                                    </a>
                                    <a href="https://son4018.github.io/W-Chat/" target="_blank">
                                    <FontAwesomeIcon icon={faUpRightFromSquare}
                                        style={{
                                            color: 'rgba(245, 158, 11, 1)',
                                            fontSize: '22px',
                                        }}
                                    />
                                    </a>
                            </div>
            </div>
        </div>
        <div className="project-box">
            <div className="box-margin">
                <img src={project3} />
                    <h1>Thesis Registration Portal</h1>
                    <p 
                    style={{
                        height: '80px'
                    }}>A web-based system with user management, CRUD functionality, and advanced search/filtration for thesis records (functions as a digital archive).</p>
                        <div className="technologies-container">
                            <div className="technologies-1">PHP</div>
                            <div className="technologies-2">MySql</div>
                            <div className="technologies-3">XAMP</div>
                        </div>
                            <div className="section4-links-container"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '20px'
                                }}><a href="https://github.com/son4018/thesisRegistration" target="_blank">
                                    <FontAwesomeIcon icon={faGithub}
                                        style={{
                                            color: 'rgba(99, 102, 241, 1)',
                                            fontSize: '25px',
                                        }}
                                    />
                                    </a>
                                    <FontAwesomeIcon icon={faUpRightFromSquare}
                                        style={{
                                            color: 'rgba(245, 158, 11, 1)',
                                            fontSize: '22px',
                                        }}
                                    />
                            </div>
            </div>
        </div>
    </div>
</div>

<div className="section5">
    <h3>Chapter 5: My Arsenal</h3>

    <div className="arsenal-container">
        <div className="grid-container">
            <div className="frontEnd" style={{color: 'rgba(99, 102, 241, 1)'}}>Front End</div>
            <div className="backEnd" style={{color: 'rgba(245, 158, 11, 1)'}}>Back End</div>
            <div className="tools" style={{color: 'rgba(16, 185, 129, 1)'}}>Tools</div>
            <div className="design" style={{color: 'rgba(192, 132, 252, 1)'}}>Design</div>
            <div className="grid-item">
                <img src={reactIcon}/>React</div>
            <div className="grid-item">
                <img src={firebaseIcon}/>Firebase</div>
            <div className="grid-item">
                <img src={vscodeIcon}/>VSCode</div>
            <div className="grid-item">
                <img src={figmaIcon}/>Figma</div>
            <div className="grid-item">
                <img src={muiIcon}/>Material UI</div>
            <div className="grid-item">
                <img src={mysqlIcon}/>Mysql</div>
            <div className="grid-item">
                <img src={gitIcon}/>Git</div>
            <div className="grid-item">
                <img src={uiuxIcon}/>UI/UX</div>
            <div className="grid-item">
                <img src={jsIcon}/>JavaScript</div>
            <div className="grid-item">
                <img src={phpIcon}/>PHP</div>
            <div className="grid-item">
                <img src={claudeIcon}/>Claude</div>
            <div className="grid-item">
                <img src={phoneIcon}/>Responsive</div>
        </div>
    </div>
</div>

<div className="section6" id="contact">
    <h3>Epilogue: Let's Write The Next
    <br></br>
    <span>Chapter</span>
    </h3>

    <h2 style={{
        fontFamily: 'monstserrate, sans-serif',
        fontSize: '20px',
        fontWeight: 'regular',
        color:'rgba(209, 213, 219, 1)',
        width: '780px',
        display: 'flex',
        justifySelf: 'center',
        textAlign: 'center',
        marginTop: '70px'
    }}>
        I'm always excited to work on new projects and bring ideas to life. Let's create something amazing together.
    </h2>

    <div className="contact-container"
    style={{
        width: 'fit-content',
        height: 'fit-content',
        display: 'flex',
        justifySelf: 'center',
        marginTop: '60px',
        justifyContent: 'center',
        gap: '32px'
    }}>
        <div className="contact-box">
            <FontAwesomeIcon icon={faEnvelope} 
            style={{
                color: 'rgba(99, 102, 241, 1)',
                fontSize: '35px',
                marginBottom: '8px'
            }}/>
            Email
            <p>sarmientoiverson12@gmail.com</p>
        </div>
        <a href="https://www.linkedin.com/in/iverson-sarmiento-117ab7222/" target="_blank" style={{ textDecoration: 'none' }}>
        <div className="contact-box">
            <FontAwesomeIcon icon={faSquareLinkedin}
            style={{
                color: 'rgba(245, 158, 11, 1)',
                fontSize: '35px',
                marginBottom: '8px'
                
            }}
            />LinkedIn
            <p>in/iverson-sarmiento</p>
        </div>
        </a>

        <a href="https://github.com/son4018" target="_blank" style={{ textDecoration: 'none' }}>
        <div className="contact-box">
            <FontAwesomeIcon icon={faGithub}
            style={{
                color: 'rgba(16, 185, 129, 1)',
                fontSize: '35px',
                marginBottom: '8px'
            }}/>GitHub
            <p>@son4018</p>
        </div>
        </a>
    </div>
    <button className='convo-button'>Start A Conversation</button>

    <div className="footer">
        <p>Crafter with passion and code.</p>

    </div>
</div>
</>
)
}

export default App
