import React from 'react'
import { FaCode } from 'react-icons/fa'

import './Home.css'


const Home = () => {
  return (
    <div className="main-home" id="/">
        <div className="main-container-home">
            <div className="text-container text-container-flex">
                <p className='jojen'>Jojen</p>
                <p className='dev'><FaCode/> dev.</p>
            </div>
        </div>
    </div>
  )
}

export default Home