import React, {useEffect, useRef} from 'react';
import StyledCommon from './StyledCommon';
import {SHAPES} from '../../constants';
import Shape from '../Shape';

export default function Common() {
  const circle = useRef(null);

  function placeShapes() {
    const {
      current: {
        childNodes
      }
    } = circle;
    let angle = SHAPES.length === 3 ? -30 : - 90;
    const pie = 360 / childNodes.length;

    for(let s of childNodes) {
      angle += pie;

      s.style.transform = `rotate(${angle}deg) translate(${circle.current.clientWidth / 2}px) rotate(${-angle}deg)`;
      console.log(`rotate(${angle}deg) translate(${circle.current.clientWidth / 2}px) rotate(-${angle}deg)`)
    }
  }

  useEffect(() => {
    placeShapes();
    window.addEventListener('resize', placeShapes);

    return () => window.removeEventListener('resize', placeShapes);
  }, []);

  const shapePlacement = SHAPES.length === 3 ? [0, 1, 2] : [1, 0, 3, 4, 2];

  return (
    <StyledCommon>
      <div className="game__container" ref={circle}>
        {
          shapePlacement.map((s, i) => {
            return (
              <div className="game__shape" key={s}>
                <Shape shape={s} />
              </div>
            )
          })
        }
      </div>

      {/* <Shape shape={0} won/>
      <Shape shape={1} />
      <Shape shape={2} /> */}
    </StyledCommon>
  )
}
