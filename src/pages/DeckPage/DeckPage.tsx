import './style.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import CardList from '../../components/CardList.tsx/CardList';
import { setFromLocal } from '../../reducers/userReducer';
import DeckEditor from '../../components/DeckEditor/DeckEditor';

const DeckPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = window.localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      dispatch(setFromLocal(user));
    }
  }, []);

  return (
    <div id="deckPage">
      <DeckEditor />
      <NavBar />
      <CardList />
    </div>

  );
};

export default DeckPage;
