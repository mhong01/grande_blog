import { createStore } from "redux";
import rootReducer from '../ReduxReducers/Reducers';

const store = createStore(rootReducer);

export default store;
