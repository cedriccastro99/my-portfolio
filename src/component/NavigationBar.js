import React, { useState } from 'react'
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import './NavigationBar.css'

import { FaCode } from 'react-icons/fa'
import { Link } from 'react-scroll'

// import { Link } from 'react-router-dom'

const NavigationBar = () => {

  const [navBar,setNavBar] = useState(false);
  const navBarChangeBackground = () =>{
    if(window.scrollY >= 100){
      setNavBar(true)
    }else{
      setNavBar(false)
    }
  }

  window.addEventListener('scroll',navBarChangeBackground)

  //navlink style = style={{ borderBottom : '3px solid yellow' }}

  return (
    <>  
        <Navbar collapseOnSelect expand="md" className={ !navBar? 'primary-nav' : 'secondary-nav'} fixed="top"  variant="dark">
            <Container>
              <Link smooth={true} spy={true} duration={100} to="/" className='d-flex align-items-center navbar-brand'><FaCode className='me-3'/><h5>Jojen dev</h5></Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                <Nav className='ms-auto text-center' onClick={(e)=>{ console.log(e.target) }}>
                  <Link smooth={true} spy={true} duration={100} to="/" className="nav-link me-2"><h5>Home</h5></Link>
                  <Link smooth={true} spy={true} duration={100} to="about" className="nav-link me-2"><h5>About</h5></Link>
                  <Link smooth={true} spy={true} duration={100} to="projects" className="nav-link me-2"><h5>Projects</h5></Link>
                  <Link smooth={true} spy={true} duration={100} to="contact" className="nav-link me-2"><h5>Contact</h5></Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavigationBar