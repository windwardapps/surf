import { combineReducers, createStore } from 'redux';
import app from './reducers/app';
import admin from './reducers/admin';
import instructor from './reducers/instructor';

const root = combineReducers({
  app,
  admin,
  instructor
});

const store = createStore(root);

export default store;
