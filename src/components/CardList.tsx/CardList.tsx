import './style.css';
import { useSelector } from 'react-redux';

const CardList = () => {
  const cards = useSelector((state: any) => state.card);

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
    <table id="card-table">
      <tr id="header">
        <th>Front</th>
        <th>Back</th>
        <th>Next Review</th>
        <th>Level</th>
      </tr>
      {cards.map((card: any) => (
        <tr>
          <td id="word">
            <div>
              {(card.front)}
            </div>
            <div className="date">
              Created:
              {' '}
              {new Date(card.creationDate).toLocaleString('en-NZ')}
            </div>
          </td>
          <td id="definition">
            {JSON.parse(card.back).meanings[0].definitions[0].definition}
          </td>
          <td className="date">
            {checkDate(card.checkpointDate)}
          </td>
          <td>
            {card.level}
          </td>
        </tr>

      ))}
    </table>
  );
};

export default CardList;
