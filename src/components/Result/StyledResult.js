import styled from 'styled-components';

const StyledResult = styled.div`
  margin: 5em 0em;
  color: var(--text);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-start;

  @media (min-width: 700px) {
    flex-wrap: nowrap;
    align-items: center;
  }

  @media (min-width: 1000px) {
    margin: 5em -5em;
    flex-wrap: nowrap;
    align-items: center;
  }

  .shape__pickup {
    width: 30%;
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 700px) {
      flex-direction: column;
    }
  }

  .player__title {
    text-align: center;
    font-size: 1.5rem;
    margin: 1em 0;
    text-transform: uppercase;
  }


  .result {
    order: 1;
    text-transform: uppercase;
    text-align: center;
    width: 100%;

    @media (min-width: 700px) {
      width: 40%;
      order: 0;
    }

    h1 {
      font-size: 4rem;
      margin: .5em 0;
    }

    button {
      text-transform: uppercase;
      background: var(--text);
      color: var(--scoreTitle);
      border: none;
      padding: .5em 3em;
      font-size: 1.2rem;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      transition: .5s;

      &:hover {
        opacity: .7;
      }
    }
  }
`;

export default StyledResult;
