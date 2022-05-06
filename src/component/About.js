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
              <h1>Hi I'm Cedric Trillo Castro</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nostrum aliquid incidunt esse, similique magnam excepturi. 
                Praesentium inventore asperiores veritatis non voluptatem. 
                Temporibus officia veniam sunt expedita aliquam quod voluptas quasi
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
    // <div style={{ height : '635px' , width : 'auto', background : '#f8f8f8' }}>
    //     <Container>
    //       <Row style={containerStyle}>
    //         <Col className='col-6'>
    //           <img src={me} alt='mypicture' height={450} width="auto" style={{ filter : "drop-shadow(-30px 30px 4px gray)", border : '3px solid rgb(48, 48, 48)', borderRadius : '15px' }}/>
    //         </Col>
    //         <Col className="col-5">
    //           <h1 className='fw-bold'>About</h1>
    //           <span style={line}/>
    //           <div className='my-4'>
    //             <h2 style={{ textAlign : 'justify', fontSize : '25px'}}>
    //               <strong className='ms-5'>Hi i'am Cedric Trillo Castro</strong>,
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    //               Nostrum aliquid incidunt esse, similique magnam excepturi. 
    //               Praesentium inventore asperiores veritatis non voluptatem. 
    //               Temporibus officia veniam sunt expedita aliquam quod voluptas quasi.
    //             </h2 >

    //             {/* a BSIT student at Caraga Student University (CSU), Ampayon Butuan City.
    //               I love building dynamic websites with javascript and hate PHP. My dream is to become a professional fullstack developer
    //               that can make different kinds of web-applications using javascript and i hate php
    //             */}
    //           </div>
    //           <div style={{ textAlign : 'left' , fontSize : '20px' }}>
    //             <Figure>
    //               <blockquote className='blockqoute'>
    //                 <p style={{ fontStyle : 'italic' }}>Life is short, enjoy simple things.</p>
    //               </blockquote>
    //               <figcaption className='blockquote-footer'>
    //                 <cite title='Unknown' >Unknown</cite>
    //               </figcaption>
    //             </Figure>
    //           </div>
    //         </Col>
    //       </Row>
    //     </Container>
    // </div>
  )
}

export default About