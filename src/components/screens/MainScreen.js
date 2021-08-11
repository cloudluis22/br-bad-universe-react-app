import React, { useState } from 'react';

import brbaImg from '../../images/brba-main-screen.jpg';
import bcsImg from '../../images/bcs-main-screen.jpg';

export const MainScreen = () => {
  const [currentColor, setCurrentColor] = useState('background-light-green');

  const changeBackground = ({ target }) => {
    switch (target.alt) {
      case 'Breaking Bad':
        setCurrentColor('background-brba-green');
        break;

      case 'Better Call Saul':
        setCurrentColor('background-bcs-red');
        break;
    }
  };

  const resetBackground = () => {
    setCurrentColor('background-light-green');
  };

  return (
    <div className={currentColor}>
      <header>
        <h1 className='title'> The Breaking Bad Universe </h1>
        <h2 className='subtitle'> Choose a show. </h2>
      </header>

      <main className='main-container'>
        <div>
          <img
            src={brbaImg}
            alt='Breaking Bad'
            className='main-img'
            onMouseEnter={changeBackground}
            onMouseLeave={resetBackground}
          />
          <p className='show-title'> Breaking Bad </p>
        </div>

        <div>
          <img
            src={bcsImg}
            alt='Better Call Saul'
            className='main-img'
            onMouseEnter={changeBackground}
            onMouseLeave={resetBackground}
          />
          <p className='show-title'> Better Call Saul </p>
        </div>
      </main>
    </div>
  );
};
