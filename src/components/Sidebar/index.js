import { Link, NavLink } from "react-router-dom";
import "../Sidebar/index.css"
import myLogo from "../../assets/images/MLogo2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

    </div>
)

export default Sidebar;
