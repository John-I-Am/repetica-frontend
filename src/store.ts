/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cardReducer from './reducers/cardReducer';
import errorReducer from './reducers/errorReducer';
import userReducer from './reducers/userReducer';

const reducers = combineReducers({
  user: userReducer,
  card: cardReducer,
  error: errorReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

// store.subscribe(() => {
//   const storeNow = store.getState();
//   console.log(storeNow);
// });

export default store;
