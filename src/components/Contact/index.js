import Loader from 'react-loaders';
import './index.scss';
// import { useRef } from 'react';
// import emailjs from 'react'
import AnimatingLetters from '../AnimatingLetters';
import { useState } from 'react';
const Contact = () => {
  const [letterClass] = useState('text-animate');

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatingLetters
              letterClass={letterClass}
              stArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '!']}
              idx={15}
            />
          </h1>
          <p>
            I am an aspiring web developer looking to perfect and hone my craft!
            If you have any further questions or if you'd just like to contact
            me please do so here!
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Contact;
