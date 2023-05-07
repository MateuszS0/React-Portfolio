import React from 'react'
import './Projects.css'
import Picture from '../../images/portfolio-picture.png'
import wwwebflix from '../../images/Wwwebflix.png'
const Projects = () => {
  return (
    <div className='project-component'>
        <h2 className='h2-P'>My Projects</h2>
        <h3 className='h3-P'>That i'm working on at this moment</h3>

        <div className="container-p">
        <div className="project-container">
        <a href="https://github.com/MateuszS0/React-Portfolio" className='a'><img src={Picture} alt="" className='pictures'/></a>
        </div>

        <div className="project-container">
        <img src="" alt="" />
        <a href="https://github.com/MateuszS0/MyCode/tree/main/Wwwebflix"className='a'><img src={wwwebflix} alt="" className='pictures'/></a>
        </div>
        </div>

    </div>
  )
}

export default Projects