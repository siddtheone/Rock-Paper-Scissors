import styled from 'styled-components';

const StyledCommon = styled.div`
  width: 75%;
  margin: 5em auto;
  padding-bottom: 75%;
  position: relative;


  .game__container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .game__shape{
    width: 33%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -16.5%;
    margin-top: -16.5%;
  }
`;

export default StyledCommon;
