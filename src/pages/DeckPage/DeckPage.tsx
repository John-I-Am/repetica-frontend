import './style.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SideBar from '../../components/SideBar/SideBar';
import CardList from '../../components/CardList/CardList';
import DeckEditor from '../../components/DeckEditor/DeckEditor';
import DeckList from '../../components/DeckList/DeckList';
import { setFromLocal } from '../../reducers/userReducer';
import { initializeCards } from '../../reducers/cardReducer';

const DeckPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFromLocal());
    dispatch(initializeCards());
  }, []);

  return (
    <div className="deck-page">
      <DeckList />
      <DeckEditor />
      <SideBar />
      <CardList />
    </div>

  );
};

export default DeckPage;
