import React from 'react';
import {Global} from './components/Styled';
import ScoreContainer from './components/Score/ScoreContainer';
import CommonContainer from './components/Common/CommonContainer';
import ResultContainer from './components/Result/ResultContainer';
import Rules from './components/Rules';
import reducer, {initialState} from './reducer';
import Provider from './store'

function App() {
  const gc = React.useReducer(reducer, initialState);
  const {user} = gc[0];

  return (
    <Provider value={gc}>
      <div className="App">
        <Global />
        <ScoreContainer />
        {user === -1 ? <CommonContainer /> : <ResultContainer />}
        <Rules>Rules</Rules>
      </div>
    </Provider>
  );
}

export default App;
