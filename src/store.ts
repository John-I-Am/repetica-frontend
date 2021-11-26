/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cardReducer from './reducers/cardReducer';
import notificationReducer from './reducers/notificationReducer';
import userReducer from './reducers/userReducer';

const reducers = combineReducers({
  user: userReducer,
  card: cardReducer,
  notification: notificationReducer,
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
