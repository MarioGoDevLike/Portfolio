import "./index.css"
import { Link } from "react-router-dom";


const Home = () =>{
    return (
    <div className="home-container">
        <div className="text-container">
            <h1>Hi, I'm
            Mario
            <br />
            Web developer
            </h1>
        </div>
        <div>
            <h2>Frontend Developer / Android Developer  </h2>
            <Link to="/contact" className='contact-button'>CONTACT ME</Link>
        </div>
    </div>
    );
}

export default Home;