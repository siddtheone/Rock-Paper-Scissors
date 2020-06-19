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
    let angle = 90;
    const pie = 360 / childNodes.length;

    for(let s of childNodes) {
      angle += pie;
      s.style.transform = `rotate(${angle}deg) translate(${circle.current.clientWidth / 2}px) rotate(-${angle}deg)`;
    }
  }

  useEffect(() => {
    // const ciclegraph = circle.current;
    // const circleElements = ciclegraph.childNodes;

    // let angle = 90;
    // let dangle = 360 / circleElements.length;

    // for (let i = 0; i < circleElements.length; i++) {
    //   let circle = circleElements[i];
    //   angle += dangle;
    //   circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth /
    //     2}px) rotate(-${angle}deg)`;
    // }
    placeShapes();
    window.addEventListener('resize', placeShapes);

    return () => window.removeEventListener('resize', placeShapes);
  }, []);

  return (
    <StyledCommon>
      <div className="game__container" ref={circle}>
        {/* <div className="game__shape">
          <Shape shape={0} />
        </div>
        <div className="game__shape">
          <Shape shape={1} />
        </div>
        <div className="game__shape">
          <Shape shape={2} />
        </div> */}
        {
          SHAPES.map((s, i) => {
            return (
              <div className="game__shape" key={s}>
                <Shape shape={i} />
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
