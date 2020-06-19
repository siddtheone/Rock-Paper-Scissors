import React from 'react';
import StyledScore from './StyledScore';
import {SHAPES} from '../../constants';

export default function Score({score}) {
  return (
    <StyledScore>
      <div className="shapes__list">
        {SHAPES.map((s, index) => <p key={index}>{s}</p>)}
      </div>
      <div className="score-card">
        <div className="score__title">Score</div>
        <div className="score">{score}</div>
      </div>
    </StyledScore>
  )
}
