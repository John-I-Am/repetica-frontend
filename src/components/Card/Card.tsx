/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/media-has-caption */
import './style.css';
import Button from 'react-bootstrap/Button';

import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCard } from '../../reducers/activeDeckReducer';
import CardNote from '../CardNote/CardNote';

const Card = () => {
  const dispatch = useDispatch();
  const [guess, setGuess] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const CardNoteRef: any = useRef();

  const cards = useSelector((state: any) => state.activeDeck.cards);
  const cardsToStudy = cards.filter((card: any) => (
    new Date(card.checkpointDate)).getTime() <= new Date().getTime());

  const back = JSON.parse(cardsToStudy[0].back);
  const definitions = back.meanings;
  const examples = definitions[0].definitions.map((ele: any) => ele.example);

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
    dispatch(updateCard(updatedCard));
  };

  const handleCorrect = async () => {
    let updatedCard: any;
    if (cardsToStudy[0].level === 5) {
      updatedCard = { ...cardsToStudy[0], level: 5 };
    } else {
      updatedCard = { ...cardsToStudy[0], level: cardsToStudy[0].level + 1 };
    }
    dispatch(updateCard(updatedCard));
  };

  const handleGuess = async (event: any) => {
    event.preventDefault();
    const answer = (cardsToStudy[0].front).toLowerCase();

    if (answer === guess.toLowerCase() && !revealed) {
      setIsCorrect(true);
      handleStyling(true);
      setRevealed(true);
    } else if (answer !== guess.toLowerCase() && !revealed) {
      setIsCorrect(false);
      handleStyling(false);
      setRevealed(true);
    }

    if (revealed && isCorrect) {
      handleCorrect();
      setRevealed(false);
      handleStyling(true);
    } else if (revealed && !isCorrect) {
      handleIncorrect();
      setRevealed(false);
      handleStyling(true);
    }

    CardNoteRef.current.toggleVisibility();
  };

  const play = () => {
    const audio: any = document.getElementById('audio');
    audio.play();
  };

  const renderAudio = () => {
    const phonetics = back.phonetics[0];
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
    <div className="card_container">
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
          {definitions.map((ele: any) => (
            <div key={`${cardsToStudy[0].id} ${ele.partOfSpeech}`} className="card__definition">
              <div>
                {ele.partOfSpeech}
              </div>
              <p>
                {ele.definitions[0].definition}
              </p>
            </div>
          ))}
        </div>
        <Button variant="outline-primary" type="button" onClick={handleGuess}>Next </Button>
      </div>
      <CardNote examples={examples} ref={CardNoteRef} />
    </div>

  );
};

export default Card;
