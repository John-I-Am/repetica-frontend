// eslint-disable-next-line no-use-before-define
import React from 'react';
import { NotificationsProvider } from '@mantine/notifications';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';
import DeckPage from './pages/DeckPage/DeckPage';
import TrendsPage from './pages/TrendsPage/TrendsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NotificationsProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/profile" render={() => (window.localStorage.getItem('currentUser') === null ? <Redirect to="/" /> : <ProfilePage />)} />
            <Route path="/trends" render={() => (window.localStorage.getItem('currentUser') === null ? <Redirect to="/" /> : <TrendsPage />)} />
            <Route path="/deck" render={() => (window.localStorage.getItem('currentUser') === null ? <Redirect to="/" /> : <DeckPage />)} />
            <Route path="/dashboard" render={() => (window.localStorage.getItem('currentUser') === null ? <Redirect to="/" /> : <DashboardPage />)} />
            <Route path="/login" render={() => (window.localStorage.getItem('currentUser') === null ? <LoginPage /> : <Redirect to="/dashboard" />)} />
            <Route path="/register" render={() => (window.localStorage.getItem('currentUser') === null ? <SignupPage /> : <Redirect to="/dashboard" />)} />
            <Route path="/" render={() => <HomePage />} />
          </Switch>
        </BrowserRouter>
      </NotificationsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
