import styled from 'styled-components';
import Rock from '../../images/icon-rock.svg';
import Paper from '../../images/icon-paper.svg';
import Scissors from '../../images/icon-scissors.svg';
import Lizard from '../../images/icon-lizard.svg';
import Spock from '../../images/icon-spock.svg';

const shapeSpecs = [{
  img: Rock,
  border: 'hsl(349, 70%, 56%)',
  shadow: 'hsl(349, 71%, 52%)'
}, {
  img: Paper,
  border: 'hsl(230, 89%, 65%) ',
  shadow: 'hsl(230, 89%, 62%)'
}, {
  img: Scissors,
  border: 'hsl(40, 84%, 53%)',
  shadow: 'hsl(39, 89%, 49%)'
}, {
  img: Lizard,
  border: 'hsl(261, 72%, 63%)',
  shadow: 'hsl(261, 73%, 60%)'
}, {
  img: Spock,
  border: 'hsl(189, 58%, 57%)',
  shadow: 'hsl(189, 59%, 53%)'
}];

export function styleForShape(shape, won) {
  const {
    border, shadow
  } = shapeSpecs[shape];

  let defaultShadow = [`0px calc(var(--borderCFG) / 2) 1px ${shadow}`, `0px calc(var(--borderCFG) / 2) 1px rgba(0, 0, 0, .1) inset`];
  if (won) {
    defaultShadow.push(
      `0px 0px 1px 40px rgba(255, 255, 255, .3)`,
      `0px 0px 1px 80px rgba(255, 255, 255, .2)`,
      `0px 0px 1px 120px rgba(255, 255, 255, .05)`,
    );
  }
  return `
    box-shadow: ${defaultShadow.join(', ')};
    border: var(--borderCFG) solid ${border};
    @media (min-width: 500px) {
      --borderCFG: 20px;
      border: calc(var(--borderCFG)) solid ${border};
    }
  `;
}

const StyledShape = styled.div`
  padding-bottom: 100%;
  position: relative;
  margin-bottom: 1em;
  --borderCFG: 10px;

  .shape__container {
    transition: 0.5s;
    border-radius: 50%;
    ${({shape, won}) => shape !== -1 && styleForShape(shape, won)};
    background: ${({shape}) => shape !== -1 ? `white url(${shapeSpecs[shape].img})` : 'rgb(26, 41, 70)'};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: 65%;
    background-position: ${({shape}) => shape !== -1 && shape === 4 ? '70% center' : 'center'};
    background-repeat: no-repeat;
  }
`;

export default StyledShape;
