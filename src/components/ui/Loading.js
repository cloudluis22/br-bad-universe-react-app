import React from 'react';
import Loader from 'react-loader-spinner';

export const Loading = ({ isBCS }) => {
  let color = '';

  if (!isBCS) {
    color = '#369457';
  } else {
    color = '#8B0000';
  }

  return (
    <div className='fetch-message-container'>
      <Loader type='Oval' color={color} height={200} width={200} />
      <p> Fetching data! This shouldn't take too long. </p>
    </div>
  );
};
