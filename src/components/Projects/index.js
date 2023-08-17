import './index.scss';
import React from 'react';
import jate from '../../assets/images/jate.png';
import TechBlog from '../../assets/images/Tech-blog.png';
import NoteTaker from '../../assets/images/Note-taker.png';
import pwGenerator from '../../assets/images/pw-generator.png';
import scheduler from '../../assets/images/scheduler.png';

const Projects = () => {
  return (
    <div className="container projects-page">
      <div className="projectsTitle"></div>
      <h1>My Portfoio</h1>
      <span className="projectsDesc">
        My work is important to me, while I'm still new to this I have worked
        and created functional sites and API. Please take your time browsing my
        work I truly appreciate it.
      </span>
      <div className="projectsImgs">
        <img src={jate} alt="Jate" className="projectsImg" />
        <img src={TechBlog} alt="TechBlog" className="projectsImg" />
        <img src={NoteTaker} alt="NoteTaker" className="projectsImg" />
        <img src={pwGenerator} alt="pwGenerator" className="projectsImg" />
        <img src={scheduler} alt="scheduler" className="projectsImg" />
      </div>
    </div>
  );
};
export default Projects;
