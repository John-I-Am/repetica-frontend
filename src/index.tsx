// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
// import App from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" render={() => (window.localStorage.getItem('currentUser') === null ? <Redirect to="/" /> : <HomePage />)} />
          <Route path="/login" render={() => (window.localStorage.getItem('currentUser') === null ? <LoginPage /> : <Redirect to="/home" />)} />
          <Route path="/register" render={() => (window.localStorage.getItem('currentUser') === null ? <SignupPage /> : <Redirect to="/home" />)} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
