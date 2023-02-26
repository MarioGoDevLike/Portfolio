import "./index.css"
import { Link } from "react-router-dom";
import myPicture from "../../assets/images/mypicture.png"
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useState} from 'react';


const Home = () =>{

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','M', 'a','r','i','o']
    const jobArray = ['w','e','b',' ', 'd','e','v','e','l','o','p','e','r','.']
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timer);
      }, []);

    return (
    <div className="container">
        <div className="home-container">
            <div className="text-container">
                <h1 className="info">
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={20}/>
                </h1>
            </div>
            <div className="work">
                <h2 className="h2front">Frontend Developer / Android Developer  </h2>
                <Link to="/contact" className='contact-button'>CONTACT ME</Link>
            </div>
        </div>
        <div className="image-container">            
                <img src={myPicture} alt="myPicture" className="myImage"/>
        </div>
    </div>

    );
}

export default Home;