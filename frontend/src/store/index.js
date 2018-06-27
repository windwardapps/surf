import { combineReducers, createStore } from 'redux';
import app from './reducers/app';

const root = combineReducers({
  app
});

const store = createStore(root);

export default store;
