import './style.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dictionaryService from '../../services/dictionary';
import { createCard } from '../../reducers/cardReducer';
import Card from '../../components/Card/Card';
import NavBar from '../../components/NavBar/NavBar';
import cardless from '../../assets/cardless.png';

const HomePage = () => {
  const cards = useSelector((state: any) => state.card);
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response: any = await dictionaryService.getDefinition(text);
    const stringifiedResponse = JSON.stringify(response[0].meanings);

    const card = {
      front: text,
      back: stringifiedResponse,
      level: 1,
    };

    dispatch(createCard(card));
  };
  const noCards = () => {
    console.log('');
    return (
      <div>
        <p>NO CARDS FOUND, DOG ATE YOUR HOMEWORK?</p>
        <img height="600px" src={cardless} alt="idk" />
      </div>

    );
  };

  return (
    <div id="homePage">
      {cards.length !== 0 ? <Card /> : noCards()}
      <form onSubmit={handleSubmit}>
        <input onChange={({ target }) => setText(target.value)} />
      </form>

      <NavBar />
    </div>
  );
};

export default HomePage;
