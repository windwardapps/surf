import { combineReducers, createStore } from 'redux';
import app from './reducers/app';
import admin from './reducers/admin';

const root = combineReducers({
  app,
  admin
});

const store = createStore(root);

export default store;
