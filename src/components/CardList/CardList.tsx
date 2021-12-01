import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mantine/core';
import parse from 'html-react-parser';
import { Table } from './styles';
import { removeCard } from '../../reducers/activeDeckReducer';
import DeckEditor from '../DeckEditor/DeckEditor';

const CardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: any) => state.activeDeck.cards);

  const checkDate = (date: any) => {
    if (new Date(date).getTime() <= (new Date()).getTime()) {
      return (
        <p>Now</p>
      );
    }
    return (
      <p>{new Date(date).toLocaleString('en-NZ')}</p>
    );
  };

  return (
    <div>
      <DeckEditor />
      <Table>
        <thead>
          <tr>
            <th>Overview</th>
            <th>Front</th>
            <th>Back</th>
            <th>Next Review</th>
          </tr>
        </thead>

        <tbody>
          {/* temporary fix for bug where non empty cards array contains only id string */}
          {cards === undefined || (typeof cards[0]) === 'string' ? <tr /> : cards.map((card: any) => (
            <tr key={card.id}>
              <td>
                <p>{` Current level: ${card.level}`}</p>
                <p>{` Created: ${new Date(card.creationDate).toLocaleString('en-NZ')}`}</p>
                <Button type="button" onClick={() => dispatch(removeCard(card))}>Remove</Button>
              </td>
              <td>
                { card.front.texts.map((e: any) => parse(e))}
              </td>
              <td>
                { card.back.texts.map((e: any) => parse(e))}
              </td>
              <td>
                {checkDate(card.checkpointDate)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

  );
};

export default CardList;
