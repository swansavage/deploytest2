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
        <p>summary of mua</p>
        <p>summary of mua</p>
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
