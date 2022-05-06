import React from 'react'
import './Projects.css'
import { Card } from 'react-bootstrap'

import { FaGithub } from 'react-icons/fa'

import './Projects.css'

const Projects = () => {
  return (

    <div className="main-projects" id="projects">
      <div className="main-container-projects">
        <div className="projects-container">
          <div className="projects-header">
            <h1>Projects</h1>
            <div className="line"></div>
          </div>
          <div className="projects-content">
              <Card className='project-container'>
                 <Card.Body>
                   <h2>Project title</h2>
                   <div style={{ display : 'block' , overflow : 'auto' , height : '100px', width : '100%' }}>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ut mollitia explicabo totam quibusdam tenetur porro numquam dolores eos delectus ipsam, quia maxime distinctio enim dolorum perferendis animi, odit ratione!</p>
                   </div>
                 </Card.Body>
                 <Card.Footer>
                   <button className='btn btn-secondary'>
                     <FaGithub />
                   </button>
                 </Card.Footer>
              </Card>
              <Card className='project-container'>
                 <Card.Body>
                   <h2>Project title</h2>
                   <div style={{ display : 'block' , overflow : 'auto' , height : '100px', width : '100%' }}>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ut mollitia explicabo totam quibusdam tenetur porro numquam dolores eos delectus ipsam, quia maxime distinctio enim dolorum perferendis animi, odit ratione!</p>
                   </div>
                 </Card.Body>
                 <Card.Footer>
                   <button className='btn btn-secondary'>
                     <FaGithub />
                   </button>
                 </Card.Footer>
              </Card>
              <Card className='project-container'>
                 <Card.Body>
                   <h2>Project title</h2>
                   <div style={{ display : 'block' , overflow : 'auto' , height : '100px', width : '100%' }}>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ut mollitia explicabo totam quibusdam tenetur porro numquam dolores eos delectus ipsam, quia maxime distinctio enim dolorum perferendis animi, odit ratione!</p>
                   </div>
                 </Card.Body>
                 <Card.Footer>
                   <button className='btn btn-secondary'>
                     <FaGithub />
                   </button>
                 </Card.Footer>
              </Card>
              <Card className='project-container'>
                 <Card.Body>
                   <h2>Project title</h2>
                   <div style={{ display : 'block' , overflow : 'auto' , height : '100px', width : '100%' }}>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ut mollitia explicabo totam quibusdam tenetur porro numquam dolores eos delectus ipsam, quia maxime distinctio enim dolorum perferendis animi, odit ratione!</p>
                   </div>
                 </Card.Body>
                 <Card.Footer>
                   <button className='btn btn-secondary'>
                     <FaGithub />
                   </button>
                 </Card.Footer>
              </Card>
              <Card className='project-container'>
                 <Card.Body>
                   <h2>Project title</h2>
                   <div style={{ display : 'block' , overflow : 'auto' , height : '100px', width : '100%' }}>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ut mollitia explicabo totam quibusdam tenetur porro numquam dolores eos delectus ipsam, quia maxime distinctio enim dolorum perferendis animi, odit ratione!</p>
                   </div>
                 </Card.Body>
                 <Card.Footer>
                   <button className='btn btn-secondary'>
                     <FaGithub />
                   </button>
                 </Card.Footer>
              </Card>
              <Card className='project-container'>
                 <Card.Body>
                   <h2>Project title</h2>
                   <div style={{ display : 'block' , overflow : 'auto' , height : '100px', width : '100%' }}>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ut mollitia explicabo totam quibusdam tenetur porro numquam dolores eos delectus ipsam, quia maxime distinctio enim dolorum perferendis animi, odit ratione!</p>
                   </div>
                 </Card.Body>
                 <Card.Footer>
                   <button className='btn btn-secondary'>
                     <FaGithub />
                   </button>
                 </Card.Footer>
              </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects