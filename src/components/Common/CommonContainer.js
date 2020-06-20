import React, {useContext} from 'react';
import Common from './';
import {globalContext} from '../../store';
import {changeUIAction} from '../../actions'

export default function CommonContainer() {
  const [, d] = useContext(globalContext);
  const onUserSelect = id => d(changeUIAction({name: 'user', value: id}));

  return (
    <Common onUserSelect={onUserSelect} />
  )
}
