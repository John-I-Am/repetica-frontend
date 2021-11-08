/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/media-has-caption */
import './style.css';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCard } from '../../reducers/cardReducer';

interface CardProps {
  cardsToStudy: Array<any>;
}

const Card = ({ cardsToStudy }: CardProps) => {
  const dispatch = useDispatch();
  const [guess, setGuess] = useState('');
  const [revealed, setRevealed] = useState(false);

  const handleStyling = (result: boolean) => {
    const word: any = document.getElementById('guess-input');
    word.disabled = true;

    if (result) {
      word.style.color = 'green';
    } else {
      word.style.color = 'red';
      setGuess(cardsToStudy[0].front);
    }

    if (revealed) {
      word.disabled = false;
      setGuess('');
      word.style.color = 'black';
    }
  };

  const handleIncorrect = async () => {
    let updatedCard: any;
    if (cardsToStudy[0].level === 0) {
      updatedCard = { ...cardsToStudy[0], level: 0 };
    } else {
      updatedCard = { ...cardsToStudy[0], level: cardsToStudy[0].level - 1 };
    }
    handleStyling(false);
    return updatedCard;
  };

  const handleCorrect = async () => {
    let updatedCard: any;
    if (cardsToStudy[0].level === 5) {
      updatedCard = { ...cardsToStudy[0], level: 5 };
    } else {
      updatedCard = { ...cardsToStudy[0], level: cardsToStudy[0].level + 1 };
    }
    handleStyling(true);
    return updatedCard;
  };

  const handleGuess = async (event: any) => {
    event.preventDefault();
    const answer = (cardsToStudy[0].front).toLowerCase();
    let result: any = '';

    if (answer === guess.toLowerCase()) {
      result = await handleCorrect();
    } else {
      result = await handleIncorrect();
    }

    if (revealed) {
      dispatch(updateCard(result));
      setRevealed(false);
      handleStyling(true);
    } else {
      setRevealed(true);
    }
  };

  const play = () => {
    const audio: any = document.getElementById('audio');
    audio.play();
  };

  const renderAudio = () => {
    const phonetics = JSON.parse(cardsToStudy[0].back).phonetics[0];
    if (phonetics !== undefined && 'audio' in phonetics) {
      return (
        <div>
          <svg onClick={play} width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.25 12L5.75 5.75V18.25L18.25 12Z" />
          </svg>
          <audio id="audio" src={phonetics.audio} />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="card">
      <div className="card__header">
        <b>{`Level ${cardsToStudy[0].level}`}</b>
        {renderAudio()}
      </div>
      <div className="card__front">
        <form onSubmit={handleGuess}>
          <input id="guess-input" value={guess} onChange={({ target }) => setGuess(target.value)} />
        </form>
      </div>
      <div className="card__back">
        {(JSON.parse(cardsToStudy[0].back).meanings).map((ele: any) => (
          <div key={`${cardsToStudy[0].id} ${ele.partOfSpeech}`} className="card__definition">
            <div>
              {ele.partOfSpeech}
            </div>
            <p>
              {' '}
              {ele.definitions[0].definition}
            </p>
          </div>
        ))}
      </div>
      <Button variant="outline-primary" type="button" onClick={handleGuess}>Next </Button>
    </div>
  );
};

export default Card;
