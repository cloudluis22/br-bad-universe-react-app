import React from 'react';
import PropTypes from 'prop-types';
import { CharacterCard } from './CharacterCard';
import { NotFound } from '../ui/NotFound';

export const CharacterGrid = React.memo(({ data }) => {
  if (data.length > 0) {
    return (
      <div className='character-grid'>
        {data.map((char) => {
          return (
            <CharacterCard
              imgSrc={char.img}
              name={char.name}
              birthday={char.birthday}
              occupation={char.occupation}
              status={char.status}
              nickname={char.nickname}
              appearance={char.appearance}
              portrayed={char.portrayed}
              category={char.category}
              key={char.char_id}
            />
          );
        })}
      </div>
    );
  } else {
    return <NotFound />;
  }
});

CharacterGrid.propTypes = {
  data: PropTypes.array.isRequired,
};
