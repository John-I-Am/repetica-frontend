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
    <table className="card-table">
      <thead>
        <tr>
          <th>Front</th>
          <th>Back</th>
          <th>Next Review</th>
          <th>Level</th>
        </tr>
      </thead>

      <tbody>
        {cards.map((card: any) => (
          <tr key={card.id}>
            <td className="card-table__front">
              <div>
                <h2>{ card.front }</h2>
              </div>
              <div className="card-table__date">
                {'Created: '}
                {new Date(card.creationDate).toLocaleString('en-NZ')}
              </div>
            </td>
            <td>
              {JSON.parse(card.back).meanings[0].definitions[0].definition}
            </td>
            <td>
              {checkDate(card.checkpointDate)}
            </td>
            <td>
              {card.level}
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default CardList;