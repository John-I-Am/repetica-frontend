// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" render={() => (window.localStorage.getItem('currentUser') === null ? <Redirect to="/" /> : <HomePage />)} />
          <Route path="/" render={() => (window.localStorage.getItem('currentUser') === null ? <App /> : <Redirect to="/home" />)} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
