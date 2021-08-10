import React from 'react';

import brbaImg from '../../images/brba-main-screen.jpg';
import bcsImg from '../../images/bcs-main-screen.jpg';

export const MainScreen = () => {
  return (
    <div className='main-background'>
      <header>
        <h1 className='title'> The Breaking Bad Universe </h1>
        <h2 className='subtitle'> Choose a show. </h2>
      </header>

      <main className='main-container'>
        <div>
          <img src={brbaImg} alt='Breaking Bad' />
          <p> Breaking Bad </p>
        </div>

        <div>
          <img src={bcsImg} alt='Better Call Saul' />
          <p> Better Call Saul </p>
        </div>
      </main>
    </div>
  );
};
