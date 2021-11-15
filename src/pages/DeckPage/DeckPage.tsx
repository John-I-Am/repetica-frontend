import './style.css';
import { useEffect } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import CardList from '../../components/CardList/CardList';
import DeckEditor from '../../components/DeckEditor/DeckEditor';
import useInitializer from '../../hooks/useInitializer';

const DeckPage = () => {
  const initializer = useInitializer();

  useEffect(() => {
    initializer.initialize();
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
