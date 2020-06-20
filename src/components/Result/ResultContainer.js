import React, {useContext} from 'react';
import {globalContext} from '../../store';
import Result from './';
import {changeUIAction} from '../../actions';

export default function ResultContainer() {
  const [{user, score}, d] = useContext(globalContext);

  const updateScore = haveUserWon => {
    d(changeUIAction({name: 'score', value: score + haveUserWon}));
  };

  const playAgainHandler = () => {
    d(changeUIAction({name: 'user', value: -1}));
  }

  return (
    <Result
      user={user}
      onResult={updateScore}
      onPlayAgain={playAgainHandler}
    />
  )
}
