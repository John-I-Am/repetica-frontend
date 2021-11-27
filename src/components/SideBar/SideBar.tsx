/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import './style.css';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../reducers/userReducer';
import { clearDeck } from '../../reducers/deckReducer';
import { clearActiveDeck } from '../../reducers/activeDeckReducer';

const SideBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const cards = useSelector((state: any) => state.activeDeck.cards);
  const cardsToStudy = cards === undefined ? [] : cards.filter((card: any) => (
    new Date(card.checkpointDate)).getTime() <= new Date().getTime());

  const handleLogout = async () => {
    window.localStorage.removeItem('currentUser');
    dispatch(clearActiveDeck());
    dispatch(clearUser());
    dispatch(clearDeck());
    history.push('/');
  };

  const handleMouseEnter = (id: any) => {
    const element: any = document.getElementById(id);
    if (id !== 'cards-due' && id !== 'total-cards') {
      element.className = 'active';
    }

    const toast: any = document.getElementById('toast');
    toast.style.visibility = 'visible';
    toast.style.left = '70px';

    switch (id) {
      case 'dashboard-nav':
        toast.style.top = '10px';
        toast.textContent = 'Learn';
        return null;
      case 'trend-nav':
        toast.style.top = '90px';
        toast.textContent = 'Trends';
        return null;
      case 'deck-nav':
        toast.style.top = '160px';
        toast.textContent = 'Decks';
        return null;
      case 'profile-nav':
        toast.style.top = '240px';
        toast.textContent = 'Profile';
        return null;
      case 'cards-due':
        toast.style.top = '480px';
        toast.textContent = 'cards due';
        return null;
      case 'total-cards':
        toast.style.top = '520px';
        toast.textContent = 'total cards';
        return null;
      case 'logout':
        toast.style.top = '770px';
        toast.textContent = 'Logout';
        return null;
      default:
        return null;
    }
  };

  const handleMouseLeave = (id: any) => {
    const element: any = document.getElementById(id);
    element.className = '';

    const toast: any = document.getElementById('toast');
    toast.style.visibility = 'hidden';
  };

  return (
    <div className="side-bar">
      <div id="toast" />
      <div className="side-bar__nav">

        <NavLink activeClassName="active" to="/dashboard">
          <div id="dashboard-nav" onMouseEnter={() => handleMouseEnter('dashboard-nav')} onMouseLeave={() => handleMouseLeave('dashboard-nav')}>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z" />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z" />
            </svg>
          </div>
        </NavLink>

        <NavLink activeClassName="active" to="/trends">
          <div id="trend-nav" onMouseEnter={() => handleMouseEnter('trend-nav')} onMouseLeave={() => handleMouseLeave('trend-nav')}>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 11.25L10.25 5.75" />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 19.2502H6.25C6.80229 19.2502 7.25 18.8025 7.25 18.2502V15.75C7.25 15.1977 6.80229 14.75 6.25 14.75H5.75C5.19772 14.75 4.75 15.1977 4.75 15.75V18.2502C4.75 18.8025 5.19772 19.2502 5.75 19.2502Z" />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.75 19.2502H12.25C12.8023 19.2502 13.25 18.8025 13.25 18.2502V12.75C13.25 12.1977 12.8023 11.75 12.25 11.75H11.75C11.1977 11.75 10.75 12.1977 10.75 12.75V18.2502C10.75 18.8025 11.1977 19.2502 11.75 19.2502Z" />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.75 19.2502H18.25C18.8023 19.2502 19.25 18.8025 19.25 18.2502V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H17.75C17.1977 4.75 16.75 5.19772 16.75 5.75V18.2502C16.75 18.8025 17.1977 19.2502 17.75 19.2502Z" />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.25 8.25V4.75H7.75" />
            </svg>
          </div>
        </NavLink>

        <NavLink activeClassName="active" to="/deck">
          <div id="deck-nav" onMouseEnter={() => handleMouseEnter('deck-nav')} onMouseLeave={() => handleMouseLeave('deck-nav')}>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H14C12.8954 4.75 12 5.64543 12 6.75V19.25L12.8284 18.4216C13.5786 17.6714 14.596 17.25 15.6569 17.25H18.25C18.8023 17.25 19.25 16.8023 19.25 16.25V5.75Z" />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H10C11.1046 4.75 12 5.64543 12 6.75V19.25L11.1716 18.4216C10.4214 17.6714 9.40401 17.25 8.34315 17.25H5.75C5.19772 17.25 4.75 16.8023 4.75 16.25V5.75Z" />
            </svg>
          </div>
        </NavLink>

        <NavLink activeClassName="active" to="/profile">
          <div id="profile-nav" onMouseEnter={() => handleMouseEnter('profile-nav')} onMouseLeave={() => handleMouseLeave('profile-nav')}>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z" />
            </svg>
          </div>
        </NavLink>
      </div>

      <div className="side-bar__card">
        <p onMouseEnter={() => handleMouseEnter('cards-due')} className="cards-due">{cardsToStudy.length}</p>
        <p onMouseEnter={() => handleMouseEnter('total-cards')} className="total-cards">{cards === undefined ? 0 : cards.length}</p>
      </div>

      <div onClick={handleLogout} id="logout" onMouseEnter={() => handleMouseEnter('logout')} onMouseLeave={() => handleMouseLeave('logout')}>
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 8.75L19.25 12L15.75 15.25" />
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H10.75" />
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H15.25" />
        </svg>
      </div>
    </div>
  );
};

export default SideBar;
