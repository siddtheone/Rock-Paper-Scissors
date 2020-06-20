import React, {useState} from 'react';
import StyledRules from './StyledRules';
import closeIcon from '../../images/icon-close.svg';
import rules from '../../images/image-rules.svg';
import rulesBonus from '../../images/image-rules-bonus.svg';
import {SHAPES} from '../../constants/index'


export default function Rules() {
  const [showRules, setShowRules] = useState(false);
  const openRules = () => setShowRules(true);
  const closeRules = () => setShowRules(false);

  return (
    <StyledRules>
      <button onClick={openRules}>Rules</button>
      {showRules && (
        <div className="backdrop">
          <div className="modal">
            <div className="modal__header">
              <div>Rules</div>
              <div><img onClick={closeRules} src={closeIcon} alt="Close Rules" className="modal__close"/></div>
            </div>
            <img src={SHAPES.length > 3 ? rulesBonus : rules} alt="Rules" />
          </div>
        </div>
      )}
    </StyledRules>
  )
}
