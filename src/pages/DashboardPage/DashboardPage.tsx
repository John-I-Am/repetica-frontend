/* eslint-disable max-len */
import './style.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initializeCards } from '../../reducers/cardReducer';
import Card from '../../components/Card/Card';
import NavBar from '../../components/NavBar/NavBar';
import cardless from '../../assets/cardless.png';
import { setFromLocal } from '../../reducers/userReducer';

const DashboardPage = () => {
  const cards = useSelector((state: any) => state.card);
  const cardsToStudy = cards.filter((card: any) => (new Date(card.checkpointDate)).getTime() <= new Date().getTime());

  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = window.localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      dispatch(setFromLocal(user));
      dispatch(initializeCards());
    }
  }, []);

  const noCards = () => (
    <div>
      <img height="600px" src={cardless} alt="empty deck" />
    </div>
  );

  return (
    <div id="dashboardPage">
      {cardsToStudy.length !== 0 ? <Card /> : noCards()}
      <NavBar />
    </div>
  );
};

export default DashboardPage;
