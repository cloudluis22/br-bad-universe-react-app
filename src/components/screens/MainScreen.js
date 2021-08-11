import React, { useState } from 'react';

import brbaImg from '../../images/brba-main-screen.jpg';
import bcsImg from '../../images/bcs-main-screen.jpg';

export const MainScreen = () => {
  const initialState = 'background-light-green';
  const [currentColor, setCurrentColor] = useState(initialState);

  const changeBackground = ({ target }) => {
    switch (target.alt) {
      case 'Breaking Bad':
        setCurrentColor('background-brba-green');
        break;

      case 'Better Call Saul':
        setCurrentColor('background-bcs-red');
        break;

      default:
        setCurrentColor(initialState);
        break;
    }
  };

  const resetBackground = () => {
    setCurrentColor('background-light-green');
  };

  return (
    <div className={currentColor}>
      <header>
        <h1 className='title animate__animated animate__slideInDown'>
          The Breaking Bad Universe
        </h1>
        <h2 className='subtitle animate__animated animate__slideInDown'>
          Choose a show.
        </h2>
      </header>

      <main className='main-container'>
        <div>
          <img
            src={brbaImg}
            alt='Breaking Bad'
            className='main-img animate__animated'
            onMouseEnter={changeBackground}
            onMouseLeave={resetBackground}
          />
        </div>

        <div>
          <img
            src={bcsImg}
            alt='Better Call Saul'
            className='main-img animate__animated'
            onMouseEnter={changeBackground}
            onMouseLeave={resetBackground}
          />
        </div>
      </main>
    </div>
  );
};
