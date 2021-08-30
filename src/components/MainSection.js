import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <video src='/videos/vide-a.mp4' autoPlay loop muted />
      <h1>Taste Of Happiness</h1>
      <h2>Didn't Try Yet?</h2>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large' >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default MainSection;