import React, { useState } from 'react';

import brbaImg from '../../images/brba-main-screen.jpg';
import bcsImg from '../../images/bcs-main-screen.jpg';

export const MainScreen = () => {
  let backgroundClass = '';

  const [currentColor, setCurrentColor] = useState('background-light-green');

  const changeBackground = ({ target }) => {
    switch (target.alt) {
      case 'Breaking Bad':
        backgroundClass = 'background-brba-green';
        break;

      case 'Better Call Saul':
        backgroundClass = 'background-bcs-red';
        break;

      default:
        backgroundClass = 'background-light-green';
        break;
    }

    console.log(backgroundClass);
  };

  return (
    <div className='background-light-green'>
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
          />
          <p className='show-title'> Breaking Bad </p>
        </div>

        <div>
          <img
            src={bcsImg}
            alt='Better Call Saul'
            className='main-img'
            onMouseEnter={changeBackground}
          />
          <p className='show-title'> Better Call Saul </p>
        </div>
      </main>
    </div>
  );
};
