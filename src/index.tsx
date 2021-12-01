// eslint-disable-next-line no-use-before-define
import React from 'react';
import { NotificationsProvider, useNotifications } from '@mantine/notifications';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Routes, Route, useLocation, Navigate,
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

const RequireAuth = ({ children }: any) => {
  const location = useLocation();
  const notfications = useNotifications();

  if (window.localStorage.getItem('currentUser') === null) {
    notfications.showNotification({ title: 'Unauthorized', message: 'Please sign in', color: 'red' });
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NotificationsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/dashboard"
              element={(
                <RequireAuth>
                  <DashboardPage />
                </RequireAuth>
              )}
            />
            <Route
              path="/trends"
              element={(
                <RequireAuth>
                  <TrendsPage />
                </RequireAuth>
              )}
            />
            <Route
              path="/deck"
              element={(
                <RequireAuth>
                  <DeckPage />
                </RequireAuth>
              )}
            />
            <Route
              path="/profile"
              element={(
                <RequireAuth>
                  <ProfilePage />
                </RequireAuth>
              )}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignupPage />} />
            <Route
              path="*"
              element={(
                <main style={{ padding: '1rem' }}>
                  <p>Nothing here!</p>
                </main>
              )}
            />
          </Routes>
        </BrowserRouter>
      </NotificationsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
