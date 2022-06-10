import React from 'react'
import './Projects.css'
import { Card } from 'react-bootstrap'

import { FiExternalLink } from 'react-icons/fi'

import './Projects.css'

const porject_list = [
  {
    title : 'Daily Time Record',
    desc : 'A simple system for daily time record, build using PHP, Javascript, HTML and Bootstrap.',
    link : 'https://github.com/cedriccastro99/dtr'
  },
  {
    title : 'Notes - PERN stack',
    desc : 'Our project from IT110 converted into PERN (postgres,express,react,nodejs) stack.',
    link : 'https://github.com/cedriccastro99/notes-pern-stack'
  },
  {
    title : 'Number System Conversion',
    desc : 'A simple number system conversion build using C, that convert any number with any base into your desired base.',
    link : 'https://github.com/cedriccastro99/Number-System-Conversion-Project'
  },
  {
    title : 'Notes - Web app',
    desc : 'Our project from IT110 build using PHP, HTML, Javascript and Bootstrap',
    link : 'https://github.com/cedriccastro99/IT110_notes_webApp'
  },
  {
    title : 'Todo List - Web app',
    desc : 'My personal project that I use to practice javascript and bootstrap',
    link : 'https://github.com/cedriccastro99/webApp-todolist'
  },
  {
    title : 'Qr Code Generator',
    desc : 'A simple qr code generator build using html,css and javascript that can convert any text to qrcode and let the user download',
    link : 'https://github.com/cedriccastro99/online-qrcode-generator'
  },

]

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
            {
              porject_list.map((project)=>
                <Card className='project-container'>
                  <Card.Body>
                    <h2>{project.title}</h2>
                    <div style={{ display : 'block' , overflow : 'auto' , height : '100px', width : '100%' }}>
                      <p>{project.desc}</p>
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <button className='btn btn-secondary' onClick={()=>{window.open(project.link, "_blank")}}>
                        <FiExternalLink />
                    </button>
                  </Card.Footer>
                </Card>
              )
            }
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects