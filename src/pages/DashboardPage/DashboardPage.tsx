import './style.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import SideBar from '../../components/SideBar/SideBar';
import cardless from '../../assets/cardless.svg';
import useInitializer from '../../hooks/useInitializer';

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
  const initializer = useInitializer();
  const cards = useSelector((state: any) => state.card);

  const cardsToStudy = cards.filter((card: any) => (
    new Date(card.checkpointDate)).getTime() <= new Date().getTime());

  useEffect(() => {
    initializer.initialize();
  }, []);

  return (
    <div className="dashboard-page">
      {cardsToStudy.length !== 0 ? <Card cardsToStudy={cardsToStudy} />
        : <Cardless totalCards={cards.length} activeCards={cardsToStudy.length} />}
      <SideBar />
    </div>
  );
};

export default DashboardPage;
