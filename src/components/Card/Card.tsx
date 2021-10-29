/* eslint-disable jsx-a11y/media-has-caption */
import './style.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Card = () => {
  const cards = useSelector((state: any) => state.card);
  const [currentCard, setCurrentCard] = useState(0);

  const handleGetNext = async () => {
    if (currentCard === cards.length - 1) {
      console.log('outta bound');
    } else {
      setCurrentCard(currentCard + 1);
    }
  };

  const play = () => {
    const audio: any = document.getElementById('audio');
    audio.play();
  };

  return (
    <div id="card">
      <div id="card-header">
        {`Level ${cards[currentCard].level}`}
        <svg onClick={play} width="24" height="24" fill="grey" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 12L5.75 5.75V18.25L18.25 12Z" />
        </svg>
        <audio id="audio" src={(JSON.parse(cards[currentCard].back).phonetics[0].audio)} />
      </div>

      <div id="front">
        {cards[currentCard].front}
      </div>
      <div id="back">
        {(JSON.parse(cards[currentCard].back).meanings).map((ele: any) => (
          <div id="card-definition">
            {ele.definitions[0].definition}
          </div>
        ))}
      </div>

      <button type="button" onClick={handleGetNext}>Next Card</button>
    </div>
  );
};

export default Card;
