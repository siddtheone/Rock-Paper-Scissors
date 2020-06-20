import React, {useContext} from 'react';
import {globalContext} from '../../store';
import Score from './';

export default function ScoreContainer() {
  const [{score}] = useContext(globalContext);

  return (
    <Score score={score} />
  )
}
