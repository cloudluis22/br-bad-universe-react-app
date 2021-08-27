import React from 'react';
import { CharacterCard } from './CharacterCard';

export const CharacterGrid = ({ data }) => {
  if (data.length > 0) {
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
  } else {
    return <p>no content</p>;
  }
};
