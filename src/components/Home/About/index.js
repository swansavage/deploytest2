import { useState } from 'react';
import AnimatingLetters from '../../AnimatingLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
const About = () => {
  const [letterClass] = useState('text-animate');
  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover');
  //     }, 3000);
  //   }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatingLetters
            letterClass={letterClass}
            stArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Hello, my name is Alexius Savage and I am passionately determined to
          master the craft and create digital experiences that leave a lasting
          impact. I have in depth knowledge in many coding laguages like
          JavaScript, Html, CSS, React, Node.js, even the intricate world of
          regular expressions (regex).
        </p>
        <p>
          Driven by an insatiable curiosity and a hunger for innovation, I
          envision not just creating functional websites, but crafting immersive
          online ecosystems that seamlessly blend form and function.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="facel">
            <FontAwesomeIcon icon={faNode} color="green" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="orange" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="aqua" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="blue" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="yellow" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="black" />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};
export default About;
