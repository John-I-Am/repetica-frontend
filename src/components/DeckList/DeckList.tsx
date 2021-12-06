import { Button } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { createDeck } from '../../reducers/deckReducer';
import { setActive } from '../../reducers/activeDeckReducer';

import { Container } from './styles';

const DeckList = ({ noCreate }: any) => {
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
    <Container noCreate={noCreate}>
      <form>
        <input placeholder="Find Deck" />
      </form>
      <div>
        <Button onClick={handleShowAll}> All Cards</Button>
        <Button onClick={() => dispatch(createDeck())}> Create Deck</Button>
        {decks.map((deck: any) => (
          <Button variant="outline" key={deck.id} onClick={() => dispatch(setActive(deck))}>
            <p>{deck.title}</p>
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default DeckList;
