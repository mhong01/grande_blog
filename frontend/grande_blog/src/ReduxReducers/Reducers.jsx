import { LOGIN_FAILED, LOGIN_SUCCESS } from "../ReduxConstants/Constants";

const initialState = {
    isLoggedIn: false
  };
  
function rootReducer(state = initialState, action) {
    if (action.type === LOGIN_SUCCESS) {
      state.isLoggedIn = action.payload;
    }
    return state;
};
  
export default rootReducer;