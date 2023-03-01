import { Link, NavLink } from "react-router-dom";
import "../Sidebar/index.css"
import myLogo from "../../assets/images/MLogo2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    const navbarItems = [{
        exact : "true",
        activeclassname : "active",
        className:"home-link",
        to:"/",
        icon:faHome,
        color:"#4d4d4e"
    },
    {
        exact : "true",
        activeclassname : "active",
        className:"about-link",
        to:"/about",
        icon:faUser,
        color:"#4d4d4e"
    },
    {
        exact : "true",
        activeclassname : "active",
        className:"contact-link",
        to:"/contact",
        icon:faEnvelope,
        color:"#4d4d4e"
    }]
    return (
    
    <div className="navbar-container">
        <Link className="logo" to="/">
            <img className="myLogo"src={myLogo} alt="logo"/>
        </Link>
        
        <nav className="navbar">
            {navbarItems.map((item) => {
                return (<NavLink exact={item.exact} activeclassname={item.activeclassname}
                className={item.className} to={item.to}>
                <FontAwesomeIcon icon={item.icon} color={item.color}/>
            </NavLink>)
            })}            
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
    }

export default Sidebar;
