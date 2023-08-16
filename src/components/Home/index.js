import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/Me.Logo.jpg';
import './index.scss';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hello, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          lexius Savage
          <br />
          Web developer
        </h1>
        <h2>Frontend Developer/ React/Node expert / Javascript Expert</h2>
        <Link to="/contact" className="flat-button">
          Contact Me!
        </Link>
      </div>
    </div>
  );
};
export default Home;
