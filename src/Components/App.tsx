import React from 'react';
import './App.css';
import Navbar from './Navbar';
import SocialBar from './SocialBar';
import About from './About';
import line from '../Assets/line.png';



const App = () => {


  return (
    <div className="App">
      <Navbar />
      <section className="always-there">
        <SocialBar />
        <section className="content">
          <About />
        </section>
        <div className="email-container">
          <a href="mailto:alyciacan.swe@gmail.com" className='email-vert'>alyciacan.swe@gmail.com</a>
          <img src={ line } className="line"/>
        </div>
      </section>
    </div>
  )
}

export default App;
