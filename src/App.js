import React from 'react';
import {Global} from './components/Styled';
import ScoreContainer from './components/Score/ScoreContainer';
import Common from './components/Common';

function App() {
  return (
    <div className="App">
      <Global />
      <ScoreContainer />
      <Common />
    </div>
  );
}

export default App;
