import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect,useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { IframeHTMLAttributes } from 'react';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3fytq1o', 'template_y0dbqbd', form.current, 'oWraz2Htr4r7ImjMo')
          .then(() => {
            alert('Message successfully sent!')
            window.location.reload(false)
        }, () => {
            alert('Failed to send the Message.');
        });
      };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return(
        <div className='Main-container'>
            <div className='container contact-container'>
                <div className='text-zone'>
                    <h1 className="contactme">
                            <AnimatedLetters letterClass={letterClass}
                            strArray={['C','o','n','t','a','c', 't']}
                            idx={15}/>
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below form either.
                    </p>
                </div>
                <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                        <ul className='form-container'>
                            <div className='mainInfos'>
                                <li className='name-cont'>
                                    <input type="text" name="user_name" placeholder='Name' required/>
                                </li>
                                <li>
                                    <input
                                    type="email"
                                    name="user_email"
                                    placeholder='Email'
                                    required/>
                                </li>
                            </div>
                            <li >
                                <input className='subject-cont' placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea className='message-cont'
                                    placeholder='Message'
                                    name='message'
                                    required>
                                </textarea> 
                            </li>
                            <li className='btn_submit'>
                                <div className='submit-btn'>
                                    <input type="submit" className='flat-button' value="Send"/>
                                </div>
                            </li>
                        </ul>
                    </form>

                </div>
            </div>
            <div className='map-wrap'>d
            </div>
        </div>
    )}

export default Contact