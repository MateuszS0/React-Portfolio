import React from 'react'
import './Projects.css'
import Picture from '../../images/portfolio-picture.png'
import wwwebflix from '../../images/Wwwebflix.png'
import pythonLogo from '../../images/pythonLogo.png'
import TypeScript from '../../images/TypeScript2.png'
import cryptoPng from '../../images/crypto2.png'
import priceAlert from '../../images/PriceAlertImage.jpg'
const Projects = () => {
  return (
    <div className='project-component'>
        <h2 className='h2-P'>My Projects</h2>
        <h3 className='h3-P'>That i'm working on at this moment</h3>

        <div className="container-p">
        <div className="project-container">
        <a href="https://github.com/MateuszS0/React-Portfolio" className='a'><img src={Picture} alt="Portfolio" className='pictures'/></a>
        <h2>React Portfolio</h2>
        <h5 className='project-desc'>My Portfolio</h5>
        </div>

        <div className="project-container">
        <img src="" alt="" />
        <a href="https://github.com/MateuszS0/PriceAlert"className='a'><img src={priceAlert} alt="TypeScript" className='pictures'/></a>
        <h2>PriceAlert</h2>
        <h5 className='project-desc'>Website for tracking prices for amazon products</h5>
        </div>

        <div className="project-container">
        <img src="" alt="" />
        <a href="https://github.com/MateuszS0/CryptoVault"className='a'><img src={cryptoPng} alt="TypeScript" className='pictures'/></a>
        <h2>CryptoVault</h2>
        <h5 className='project-desc'>Website for tracking cryptocurrencies</h5>
        </div>

        <div className="project-container">
        <img src="" alt="" />
        <a href="https://github.com/MateuszS0/MyCode/tree/main/Wwwebflix"className='a'><img src={wwwebflix} alt="JavaScript" className='pictures'/></a>
        <h2>Webflix</h2>
        <h5 className='project-desc'>Websites catalogue</h5>
        </div>

        <div className="project-container">
        <img src="" alt="" />
        <a href="https://github.com/MateuszS0/Python/tree/main/Projects/Timed%20Math%20Challenge"className='a'><img src={pythonLogo} alt="Python" className='pictures'/></a>
        <h2>Timed Math Challenge</h2>
        <h5 className='project-desc'>Python Project</h5>
        </div>
        
        </div>

    </div>
  )
}

export default Projects