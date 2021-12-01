/* eslint-disable import/no-extraneous-dependencies */
import './styles.ts';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button, Title } from '@mantine/core';
import {
  NavBar, SectionOne, SectionTwo, SectionThree,
} from './styles';
import logo from '../../assets/logo.png';
import hero from '../../assets/hero.svg';
import trend from '../../assets/trend.svg';
import science from '../../assets/science.svg';
import post from '../../assets/post.svg';
import mobile from '../../assets/mobile.svg';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import { setActive } from '../../reducers/activeDeckReducer';

const HomePage = () => {
  const navigate = useNavigate();

  const cardsToStudy = [{
    auxiliary: { audio: '//ssl.gstatic.com/dictionary/static/sounds/20200429/welcome--_gb_1.mp3', examples: ['<p>you will receive a warm welcome</p>'], note: '<p>sdf</p>' },
    front: { texts: ['welcome'] },
    back: { texts: ['an instance or manner of greeting someone'] },
    level: 4,
    checkpointDate: new Date(),
  }];
  const dispatch = useDispatch();
  dispatch(setActive({ cards: cardsToStudy }));

  return (
    <div className="home-page">
      <NavBar>
        <a href="#section-1">
          <img src={logo} alt="logo" />
        </a>
        <a href="#section-2">Demo</a>
        <a href="#section-3">Features</a>
        <Button type="button" onClick={() => navigate('/login')}> Log in </Button>
      </NavBar>

      <SectionOne id="section-1">
        <div>
          <Title order={1}> Repetica - A Modern Spaced Repetition System </Title>
          <Title order={2}>
            <span>Review.</span>
            {' '}
            <span>Repeat.</span>
            {' '}
            <span>Retain.</span>
            {' '}
          </Title>
        </div>
        <img src={hero} alt="hero" />
      </SectionOne>

      <SectionTwo id="section-2">
        <Card />
      </SectionTwo>

      <SectionThree id="section-3">
        <div>
          <img src={trend} alt="graph" />
          <p>
            Advanced statistical tools to help you track your progress and
            identify trouble areas.
          </p>
        </div>

        <div>
          <p>
            Advanced Spaced-repetition algorithm backed by decades of research
            to help you learn more effectively.
          </p>
          <img src={science} alt="graph" />
        </div>
        <div>
          <img src={post} alt="graph" />
          <p>
            Customizable cards to match your learning style.

          </p>
        </div>
        <div>
          <p>
            Study anytime, anywhere, with our on-the-cloud infrastructure.
          </p>
          <img src={mobile} alt="graph" />
        </div>
      </SectionThree>

      <Footer />

    </div>
  );
};

export default HomePage;
