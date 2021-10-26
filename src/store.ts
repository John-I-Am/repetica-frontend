/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cardReducer from './reducers/cardReducer';

import userReducer from './reducers/userReducer';

const reducers = combineReducers({
  user: userReducer,
  card: cardReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
