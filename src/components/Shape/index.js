import React from 'react';
import StyledShape from './StyledShape';

export default function Shape({shape, onClick, won}) {
  const clickHandler = () => onClick && onClick(shape);
  return (
    <StyledShape shape={shape} onClick={clickHandler} won={won}>
      <div className="shape__container" />
    </StyledShape>
  )
}
