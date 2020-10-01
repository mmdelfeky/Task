import {SET_GENDER} from '../actions/types';

const initialState = {
  gender: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENDER:
      return {...state, gender: action.payload};
    default:
      return state;
  }
};

export default reducer;
