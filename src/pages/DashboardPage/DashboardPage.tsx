/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card/Card';
import SideBar from '../../components/SideBar/SideBar';
import cardless from '../../assets/cardless.svg';
import { setFromLocal } from '../../reducers/userReducer';
import { initializeDecks } from '../../reducers/deckReducer';

import { Container, NoCards } from './styles';
import DeckList from '../../components/DeckList/DeckList';

const Cardless = () => (
  <NoCards>
    <img src={cardless} alt="empty deck" />
    <h1>All Done :)</h1>
    <div>
      <h2>
        No Cards Due For Review In This Deck
      </h2>
    </div>
  </NoCards>
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
    <Container>
      <DeckList noCreate />
      {cardsToStudy.length !== 0 ? <Card />
        : (
          <Cardless />
        )}
      <SideBar />
    </Container>
  );
};

export default DashboardPage;
