import React from 'react';
import { CharacterCard } from './CharacterCard';

export const CharacterGrid = ({ data }) => {
  return (
    <div className='character-grid'>
      {data.map((char) => {
        return (
          <CharacterCard
            imgSrc={char.img}
            name={char.name}
            key={char.char_id}
          />
        );
      })}
    </div>
  );
};
