import React, { useState } from 'react';
import { AppRouter } from './components/routes/AppRouter';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { CharacterContext } from './components/CharacterContext';

import './styles/styles.scss';
import 'animate.css';

export const BreakingBadDB = () => {
  const defaultContext = {
    isOpen: false,
    character: {
      /*
        Los valores "occupation" y "appearance" se declaran como arreglos
        vacíos desde el inicio porqué al inicializarse la app se utilizan
        inmediatamente algunos métodos de arreglos incluso si están vacíos.
        ------------------------------------------------------------------
        The values "occupation" and "appearance" are declared as arrays
        from the beginning because when initializing the app, some array
        methods are instantly used even if they are empty.
      */
      occupation: [],
      appearance: [],
    },
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
