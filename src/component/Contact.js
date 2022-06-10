import React from 'react'
import { Card } from 'react-bootstrap';

import { MdLink, MdContentCopy ,MdOutlineAlternateEmail } from 'react-icons/md'
import { FaGithub,FaFacebook } from 'react-icons/fa'

import './Contact.css';
import CopyToClipboard from './CopyToClipboard';

const Contact = () => {

  const copy = CopyToClipboard;

  const copyLink = (link) => {
    copy();
    navigator.clipboard.writeText(link)
  }

  const newTab = (link) => {
    window.open(link, "_blank")
  }

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
                  <button className="btn btn-info" onClick={()=>{ newTab('https://github.com/cedriccastro99') }}><MdLink/></button>
                  <button className="btn btn-success"  onClick={()=>{ copyLink('https://github.com/cedriccastro99') }}><MdContentCopy/></button>
                </div>
              </Card.Body>
            </Card>
            <Card className='contact-card'>
              <Card.Body className='contact-card-body'>
                <div className="github-logo">
                  <FaFacebook size={50}/>
                </div>
                <div className="buttons">
                  <button className="btn btn-info" onClick={()=>{ newTab('https://www.facebook.com/ThegreatCedric/')  }}><MdLink/></button>
                  <button className="btn btn-success" onClick={()=>{ copyLink('https://www.facebook.com/ThegreatCedric/') }} ><MdContentCopy/></button>
                </div>
              </Card.Body>
            </Card>
            <Card className='contact-card'>
              <Card.Body className='contact-card-body'>
                <div className="github-logo">
                  <MdOutlineAlternateEmail size={50}/>
                </div>
                <div className="buttons">
                  <button className="btn btn-success" onClick={()=>{ copyLink('cedriccastro150@gmail.com') }}><MdContentCopy/></button>
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