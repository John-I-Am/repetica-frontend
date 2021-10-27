/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable space-in-parens */
/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import dictionaryService from '../services/dictionary';

const Card = () => {
  const cardStyle = {
    height: '400px',
    width: '700px',
    boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
    background: 'white',
    borderRadius: '20px',
    marginTop: '100px',
    marginLeft: '40px',
  };

  const frontStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    width: '100%',
    borderBottom: '1px black solid',
  };

  const backStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '100%',
  };

  const cards = useSelector((state: any) => state.card);
  const [currentCard, setCurrentCard] = useState(0);
  const [front, setFront] = useState('null');
  const [back, setBack] = useState('null');
  const [audio, setAudio] = useState('');

  useEffect(() => {
    const getDefine = async () => {
      try {
        setFront(cards[currentCard].front);

        const define: any = await dictionaryService.getDefinition(front);
        setBack(define[0].meanings[0].definitions[0].definition);

        const mediaElem: any = document.getElementById('audio');
        mediaElem.load();
        setAudio(define[0].phonetics[0].audio);
      } catch {
        alert('no more cards');
      }
    };
    getDefine();
  });

  const handleSearch = async () => {
    setCurrentCard(currentCard + 1);
  };

  return (
    <div style={cardStyle}>
      <div style={frontStyle}>
        {front}
        <audio id="audio" controls>
          <source src={audio} type="audio/mp3" />
        </audio>
      </div>
      <div style={backStyle}>
        {back}
      </div>
      <button onClick={handleSearch}>
        this is button
      </button>
    </div>
  );
};

export default Card;
