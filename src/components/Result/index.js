import React, {useState, useEffect} from 'react';
import StyledResult from './StyledResult';
import Shape from '../Shape';
import {RULES, SHAPES} from '../../constants';
import {getRandom} from '../../helper';

export default function Result({user, onResult, onPlayAgain}) {
  const [winner, setWinner] = useState(null);
  const [house, setHouse] = useState(-1);

  useEffect(() => {
    const declareWinner = () => {
      if(user === house) {
        setWinner('DRAW');
      } else if(RULES.get(user).indexOf(house) > -1) {
        setWinner('USER');
        onResult(1);
      } else if (house !== -1) {
        setWinner('HOUSE');
        onResult(-1);
      }
    };

    setTimeout(declareWinner, 1000);
  }, [house]);

  const houseSelect = () => {
    setHouse(getRandom(SHAPES.length));
  };

  useEffect(() => {
    setTimeout(houseSelect, 2000);
  }, []);

  const result = winner === 'USER' ? 'you win' : winner === 'HOUSE' ? 'you lose' : 'draw'

  return (
    <StyledResult winner={winner !== null}>
      <div className="shape__pickup">
        <div className="player__title">
          You Picked
        </div>
        <Shape shape={user} won={winner === 'USER'} />
      </div>
      {winner && (
      <div className="result">
        <h1>{result}</h1>
        <button onClick={onPlayAgain}>
          Play Again
        </button>
      </div>)}
      <div className="shape__pickup">
        <div className="player__title">
          The house picked
        </div>
        <Shape shape={house} won={winner === 'HOUSE'} />
      </div>
    </StyledResult>
  )
}
