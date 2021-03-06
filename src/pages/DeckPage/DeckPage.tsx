import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import SideBar from '../../components/SideBar/SideBar';
import CardList from '../../components/CardList/CardList';
import DeckList from '../../components/DeckList/DeckList';
import { setFromLocal } from '../../reducers/userReducer';
import { initializeDecks } from '../../reducers/deckReducer';

const DeckPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFromLocal());
    dispatch(initializeDecks());
  }, []);

  return (
    <Container>
      <DeckList />
      <SideBar />
      <CardList />
    </Container>

  );
};

export default DeckPage;
