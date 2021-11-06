import './style.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initializeCards } from '../../reducers/cardReducer';
import Card from '../../components/Card/Card';
import NavBar from '../../components/NavBar/NavBar';
import cardless from '../../assets/cardless.svg';
import { setFromLocal } from '../../reducers/userReducer';

interface CardlessProps {
  totalCards: number;
  activeCards: number;
}

const Cardless = ({ totalCards, activeCards }: CardlessProps) => (
  <div className="cardless">
    <img src={cardless} alt="empty deck" />
    <h1>No Cards ;()</h1>
    <div>
      <h2>
        <b>{activeCards}</b>
        {' Cards Ready For Review Out Of '}
        <b>{totalCards}</b>
        {' Cards.'}
      </h2>
    </div>
  </div>
);

const DashboardPage = () => {
  const cards = useSelector((state: any) => state.card);
  const cardsToStudy = cards.filter((card: any) => (
    new Date(card.checkpointDate)).getTime() <= new Date().getTime());

  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = window.localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      dispatch(setFromLocal(user));
      dispatch(initializeCards());
    }
  }, []);

  return (
    <div id="dashboardPage">
      {cardsToStudy.length !== 0 ? <Card cardsToStudy={cardsToStudy} />
        : <Cardless totalCards={cards.length} activeCards={cardsToStudy.length} />}
      <NavBar />
    </div>
  );
};

export default DashboardPage;
