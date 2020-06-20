import {
  CHANGE_UI
} from '../actions';

export const initialState = {
  user: -1,
  score: 0,
}

export default function reducer(state, {action, payload}) {
  switch(action) {
    case CHANGE_UI:
      const {name, value} = payload;
      return {
        ...state,
        [name]: value
      }
    default:
      return state;
  }
}
