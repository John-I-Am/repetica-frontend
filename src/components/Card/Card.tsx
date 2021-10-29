/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/media-has-caption */
import './style.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { useHistory } from 'react-router';

const Card = () => {
  const cards = useSelector((state: any) => state.card);
  const cardsToStudy = cards.filter((card: any) => (new Date(card.checkpointDate)).getTime() <= new Date().getTime());
  const [currentCard, setCurrentCard] = useState(0);
  // const history = useHistory();

  const handleGetNext = async () => {
    if (currentCard === cards.length - 1) {
      console.log('outta bound');
      // history.push('/home');
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
        {`Level ${cardsToStudy[currentCard].level}`}
        <svg onClick={play} width="24" height="24" fill="grey" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 12L5.75 5.75V18.25L18.25 12Z" />
        </svg>
        <audio id="audio" src={(JSON.parse(cardsToStudy[currentCard].back).phonetics[0].audio)} />
      </div>

      <div id="front">
        {cardsToStudy[currentCard].front}
      </div>
      <div id="back">
        {(JSON.parse(cardsToStudy[currentCard].back).meanings).map((ele: any) => (
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
