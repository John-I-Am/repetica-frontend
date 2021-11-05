/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/media-has-caption */
import './style.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCard } from '../../reducers/cardReducer';

interface CardProps {
  cardsToStudy: Array<any>;
}

const Card = ({ cardsToStudy }: CardProps) => {
  const dispatch = useDispatch();
  const [guess, setGuess] = useState('');

  const handleStyling = (result: boolean) => {
    const word: any = document.getElementById('guess');
    word.disabled = true;

    const example: any = document.getElementById('example');
    example.style.display = 'inline';

    if (result) {
      word.style.color = 'green';
    } else {
      word.style.color = 'red';
      setGuess(cardsToStudy[0].front);
    }

    setTimeout(() => example.style.display = 'none', 2000);
    setTimeout(() => word.disabled = false, 2000);
    setTimeout(() => setGuess(''), 2000);
    setTimeout(() => word.style.color = 'purple', 2000);
  };

  const handleIncorrect = async () => {
    let updatedCard: any;
    if (cardsToStudy[0].level === 0) {
      updatedCard = { ...cardsToStudy[0], level: 0 };
    } else {
      updatedCard = { ...cardsToStudy[0], level: cardsToStudy[0].level - 1 };
    }

    handleStyling(false);
    setTimeout(() => dispatch(updateCard(updatedCard)), 2000);
  };

  const handleCorrect = async () => {
    let updatedCard: any;
    if (cardsToStudy[0].level === 5) {
      updatedCard = { ...cardsToStudy[0], level: 5 };
    } else {
      updatedCard = { ...cardsToStudy[0], level: cardsToStudy[0].level + 1 };
    }

    handleStyling(true);
    setTimeout(() => dispatch(updateCard(updatedCard)), 2000);
  };

  const handleGuess = async (event: any) => {
    event.preventDefault();
    const answer = (cardsToStudy[0].front).toLowerCase();
    if (answer === guess.toLowerCase()) {
      handleCorrect();
    } else {
      handleIncorrect();
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
          <svg onClick={play} width="24" height="24" fill="grey" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 12L5.75 5.75V18.25L18.25 12Z" />
          </svg>
          <audio id="audio" src={phonetics.audio} />
        </div>
      );
    }
  };

  return (
    <div id="card">
      <div id="card-header">
        {`Level ${cardsToStudy[0].level}`}
        {renderAudio()}
      </div>

      <div id="front">
        <form onSubmit={handleGuess}>
          <input id="guess" value={guess} onChange={({ target }) => setGuess(target.value)} />
        </form>
      </div>
      <div id="back">
        {(JSON.parse(cardsToStudy[0].back).meanings).map((ele: any) => (
          <div id="card-definition">
            <div id="partOfSpeech">
              {ele.partOfSpeech}
            </div>
            <p>
              {' '}
              {ele.definitions[0].definition}
            </p>

            <p id="example">
              {' '}
              {ele.definitions[0].example}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
