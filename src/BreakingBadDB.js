import React, { useState } from 'react';
import { AppRouter } from './components/routes/AppRouter';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { CharacterContext } from './components/CharacterContext';

import './styles/styles.scss';
import 'animate.css';

export const BreakingBadDB = () => {
  const defaultContext = {
    isOpen: false,
    character: {},
  };

  const [context, setContext] = useState(defaultContext);

  return (
    <div>
      <CharacterContext.Provider value={{ context, setContext }}>
        <AppRouter />
      </CharacterContext.Provider>
    </div>
  );
};
