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
        El valor de "occupation" se deja como un arreglo vacío
        ya que la ventana modal va a tratar de utilizar el método ".map"
        de el arreglo de las ocupaciones de el personaje aunque no haya
        uno seleccionado.
        -----------------------------------------------------------------
        The "occupation" value it's declared as an empty array since the
        beginning because the modal window will try to use the ".map" method
        of the character's occupations array even if there is none selected.
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
