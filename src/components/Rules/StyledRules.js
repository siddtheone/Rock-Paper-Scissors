import styled from 'styled-components';

const Rules = styled.div`
  margin: 5em 0 2em;
  text-align: center;

  @media (min-width: 500px) {
    margin-top: 7em;
    text-align: right;
  }

  @media (min-width: 700px) {
    margin-top: 10em;
  }

  button {
    background: transparent;
    border: 1px solid var(--text);
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
    color: var(--text);
    padding: 1em 2em;
    border-radius: 5px;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;

    .modal {
      background: white;
      padding: 1em;
      border-radius: 5px;
      img {
        max-width: 100%;
      }
      .modal__header {
        display: flex;
        justify-content: space-between;
        text-transform: uppercase;
        font-size: 2rem;
        margin-bottom: 1em;
        color: var(--score);
        font-weight: bold;
      }
    }
  }
`;

export default Rules;
