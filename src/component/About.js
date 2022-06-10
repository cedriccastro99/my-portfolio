import React from 'react'

import './About.css'
import me from '../assets/images/me.jpg'

const About = () => {
  return (
    <div className='main-about' id="about">
      <div className="main-container-about main-container-about-flex">
        <div className="main-container-about-header">
          <h1><strong>About</strong></h1>
          <div className="about-line"></div>
        </div>
        <div className="main-container-about-content">
          <section>
            <div className='my-image'>
              <img src={me} alt="img" />
            </div>
            <div className='my-info'>
              <h1>Hello! I'm Cedric Trillo Castro</h1>
              <p>
                {
                  `<
                    A Information Technology student at Caraga State University (CSU), Ampayon Butuan City.
                  A self-learn full-stack developer, that learns through online and  project development 
                    />`
                }
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About