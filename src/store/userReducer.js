// action - state management
import * as actionTypes from './actions';

export const initialState = {
  isLogin: false,
  user: null
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLogin: true,
        user: action.value
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLogin: false,
        user: action.value
      };
    default:
      return state;
  }
};

export default userReducer;
