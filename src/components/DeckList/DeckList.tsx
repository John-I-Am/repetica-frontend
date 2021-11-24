import './style.css';

const DeckList = () => {
  console.log('');
  return (
    <div className="decklist">
      <h1>Decks</h1>
      <form>
        <input placeholder="Find Deck" />
      </form>
      <div className="decklist__list-container">
        <div>
          <p>New Deck</p>
        </div>
        <div>
          <p>Placeholder</p>
        </div>
        <div>
          <p>Placeholder</p>
        </div>
        <div>
          <p>Placeholder</p>
        </div>
        <div>
          <p>Placeholder</p>
        </div>
        <div>
          <p>Placeholder</p>
        </div>
      </div>

    </div>
  );
};

export default DeckList;
