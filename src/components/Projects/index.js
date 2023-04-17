import "./index.css"
import {useEffect, useState} from 'react';
import AnimatedLetters from "../AnimatedLetters";
import Slider from '../Slider/Slider'


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

  return (
    <div className='main-projects-container'>
        <div className='projects-container'>
            <div className='h1-projects'>
                <h1 className="Aboutme projects">
                <AnimatedLetters letterClass={letterClass}
                strArray={['P','R','O','J','E','C', 'T','S']}
                idx={15}/>
                </h1>
            </div>
        </div>
        <div className="slider-container">
            <Slider />
        </div>
    </div>
  )
}

export default Projects
