import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoOne from '../../assets/images/My-logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faFolderClosed,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className="Nav-bar">
    <Link className="logo" to="/">
      <img src={LogoOne} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="projects-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faFolderClosed} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alexius-savage-a35846243/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="pink" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Asavage650"
        >
          <FontAwesomeIcon icon={faGithub} color="pink" />
        </a>
      </li>

      <li>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
          <FontAwesomeIcon icon={faYoutube} color="pink" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
