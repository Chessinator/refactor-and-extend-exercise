import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import thunkMiddleware from "redux-thunk"

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware)
);

export default store;