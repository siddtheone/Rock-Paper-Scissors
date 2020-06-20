import styled from 'styled-components';
import triangle from '../../images/bg-triangle.svg';
import pentagon from '../../images/bg-pentagon.svg';

const StyledCommon = styled.div`
  width: 50%;
  margin: ${window.location.search === '?bonus' ? '10em' : '5em'} auto;
  padding-bottom: 50%;
  position: relative;


  .game__container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background: ${window.location.search === '?bonus'? `url(${pentagon})`: `url(${triangle})`};
      background-repeat: no-repeat;
      background-position: 50% 100%;
      background-size: ${window.location.search === '?bonus' ? '100%' : '80%'};
    }
  }

  .game__shape{
    --size: 50%;
    width: var(--size);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: calc(var(--size) / -2);
    margin-top: calc(var(--size) / -2);
    cursor: pointer;
    transition: 1s;

    &:hover {
      filter: hue-rotate(25deg);
    }
  }
`;

export default StyledCommon;
