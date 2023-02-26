import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faCss3, faHtml5, faJava, faJsSquare, faReact, faWordpress } from "@fortawesome/free-brands-svg-icons"

const About = ()=> {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return(
        <div className="container about-container">
            <div className="info-container">
                <h1 className="Aboutme">
                <AnimatedLetters letterClass={letterClass}
                strArray={['A','b','o','u','t',' ', 'm','e']}
                idx={15}/>
                </h1>
                <div className="p-container">
                    <p>
                        I'm very ambitious front-end developer looking for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
                    </p>
                    <p>
                        I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a tech-obsessed,family person, a sports fanatic, and a coding enthusiast.
                    </p>
                </div>
            </div>
            <div className="stage-cube-container">
                <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faJava} color="#D0A384"/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div> 
                        <div className="face3">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div> 
                        <div className="face4">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div> 
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faWordpress} color="#21759b"/>
                        </div>
                      
                    </div>
            </div>
        </div>
    )
}

export default About