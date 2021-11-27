/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './style.css';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { createDeck } from '../../reducers/deckReducer';
import { setActive } from '../../reducers/activeDeckReducer';

const DeckList = () => {
  const dispatch = useDispatch();
  const decks = useSelector((state: any) => state.decks);

  const handleShowAll = () => {
    let allCards: any = [];
    decks.forEach((element: any) => {
      allCards = allCards.concat(element.cards);
    });
    dispatch(setActive({ cards: allCards }));
  };

  return (
    <div className="decklist">
      <h1>Decks</h1>
      <form>
        <input placeholder="Find Deck" />
      </form>
      <div className="decklist__list-container">
        <Button type="button" onClick={handleShowAll}> All Cards</Button>
        <Button type="button" onClick={() => dispatch(createDeck())}> New Deck</Button>
        {decks.map((deck: any) => (
          <div key={deck._id} onClick={() => dispatch(setActive(deck))}>
            <p>{deck.title}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DeckList;
