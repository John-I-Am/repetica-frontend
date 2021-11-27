import './style.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card/Card';
import SideBar from '../../components/SideBar/SideBar';
import cardless from '../../assets/cardless.svg';
import { setFromLocal } from '../../reducers/userReducer';
import { initializeDecks } from '../../reducers/deckReducer';

interface CardlessProps {
  totalCards: number;
  activeCards: number;
}

const Cardless = ({ totalCards, activeCards }: CardlessProps) => (
  <div className="cardless">
    <img src={cardless} alt="empty deck" />
    <h1>All Done :)</h1>
    <div>
      <h2>
        <b>{activeCards}</b>
        {' Cards Due For Review Out of '}
        <b>{totalCards}</b>
        {' Cards Total.'}
      </h2>
    </div>
  </div>
);

const DashboardPage = () => {
  const dispatch = useDispatch();
  const activeCards = useSelector((state: any) => state.activeDeck.cards);
  const cardsToStudy = activeCards === undefined ? [] : activeCards.filter((card: any) => (
    new Date(card.checkpointDate)).getTime() <= new Date().getTime());

  useEffect(() => {
    dispatch(setFromLocal());
    dispatch(initializeDecks());
  }, []);

  return (
    <div className="dashboard-page">
      {cardsToStudy.length !== 0 ? <Card />
        : (
          <Cardless
            totalCards={activeCards === undefined ? 0
              : activeCards.length}
            activeCards={cardsToStudy.length}
          />
        )}
      <SideBar />
    </div>
  );
};

export default DashboardPage;
