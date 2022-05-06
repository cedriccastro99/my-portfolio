import React from 'react'
import { Card } from 'react-bootstrap';

import { MdLink, MdContentCopy ,MdOutlineAlternateEmail } from 'react-icons/md'
import { FaGithub,FaFacebook } from 'react-icons/fa'

import './Contact.css';

const Contact = () => {
  return (
    <div className="main-contact" id="contact">
      <div className="main-container-contact">
        <div className="main-contact-content">
          <div className="contact-header">
            <h1>Contact</h1>
          </div>
          <div className="contact-content">
            <Card className='contact-card'>
              <Card.Body className='contact-card-body'>
                <div className="github-logo">
                  <FaGithub size={50}/>
                </div>
                <div className="buttons">
                  <button className="btn btn-info"><MdLink/></button>
                  <button className="btn btn-success"><MdContentCopy/></button>
                </div>
              </Card.Body>
            </Card>
            <Card className='contact-card'>
              <Card.Body className='contact-card-body'>
                <div className="github-logo">
                  <FaFacebook size={50}/>
                </div>
                <div className="buttons">
                  <button className="btn btn-info"><MdLink/></button>
                  <button className="btn btn-success"><MdContentCopy/></button>
                </div>
              </Card.Body>
            </Card>
            <Card className='contact-card'>
              <Card.Body className='contact-card-body'>
                <div className="github-logo">
                  <MdOutlineAlternateEmail size={50}/>
                </div>
                <div className="buttons">
                  <button className="btn btn-info"><MdLink/></button>
                  <button className="btn btn-success"><MdContentCopy/></button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact