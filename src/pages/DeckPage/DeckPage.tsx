import './style.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SideBar from '../../components/SideBar/SideBar';
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
    <div className="deck-page">
      <DeckEditor />
      <SideBar />
      <CardList />
    </div>

  );
};

export default DeckPage;
