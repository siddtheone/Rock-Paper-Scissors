import styled from 'styled-components';

const StyledScore = styled.div`
  padding: 1em 1em 1em 2em;
  border: 2px solid var(--headerBorder);
  color: var(--text);
  display: flex;
  border-radius: 10px;
  justify-content: space-between;
  text-transform: uppercase;

  .shapes__list {
    font-size: 1.5rem;
    line-height: 0.9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .score-card {
    background: var(--text);
    text-align: center;
    border-radius: 10px;
    padding: .5em 2em;
    line-height: 1;
  }

  .score__title {
    color: var(--scoreTitle);
  }

  .score {
    color: var(--score);
    font-size: 4rem;
    font-weight: bold;
  }
`;

export default StyledScore;
