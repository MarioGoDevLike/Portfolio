import { Link, NavLink } from "react-router-dom";
import "../Sidebar/index.css"
import myLogo from "../../assets/images/MLogo2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => ( 
    <div className="navbar-container">
        <Link className="logo" to="/">
            <img className="myLogo"src={myLogo} alt="logo"/>
        </Link>
        
        <nav className="navbar">
            <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>

        <ul className="socials-container">
            <li>
                <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/mario-nassar-b0065a20b/">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target={"_blank"} rel="noreferrer" href="https://github.com/MarioGoDevLike">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/> 
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar;
