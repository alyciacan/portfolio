import React from 'react';
import './App.css';
import Navbar from './Navbar';
import SocialBar from './SocialBar';
import line from '../Assets/line.png'



const App = () => {


  return (
    <div className="App">
      <Navbar />
      <section className="always-there">
        <SocialBar />
        <div className="email-container">
          <a href="mailto:alyciacan.swe@gmail.com" className='email-vert'>alyciacan.swe@gmail.com</a>
          <img src={ line }/>
        </div>
      </section>
    </div>
  )
}

export default App;
