import React from 'react';
import './App.css';
import Navbar from './Navbar';
import SocialBar from './SocialBar';


const App = () => {


  return (
    <div className="App">
      <Navbar />
      <SocialBar />
      <a href="mailto:alyciacan.swe@gmail.com" className='email-vert'>alyciacan.swe@gmail.com</a>
    </div>
  )
}

export default App;
