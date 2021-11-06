import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Card from './Card';
import store from '../../store';

test('test', () => {
  const test = '{"word":"test","phonetic":"tɛst","phonetics":[{"text":"tɛst","audio":"//ssl.gstatic.com/dictionary/static/sounds/20200429/test--_gb_1.mp3"}],"origin":"late Middle English (denoting a cupel used to treat gold or silver alloys or ore): via Old French from Latin testu, testum ‘earthen pot’, variant of testa ‘jug, shell’. Compare with test2. The verb dates from the early 17th century.","meanings":[{"partOfSpeech":"noun","definitions":[{"definition":"a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.","example":"both countries carried out nuclear tests in May","synonyms":["trial","experiment","pilot study","try-out","check","examination","assessment","evaluation","appraisal","investigation","inspection","analysis","scrutiny","scrutinization","study","probe","exploration","screening","audition","screen test","assay"],"antonyms":[]},{"definition":"short for Test match.","example":"the first Test against New Zealand","synonyms":[],"antonyms":[]},{"definition":"a movable hearth in a reverberating furnace, used for separating gold or silver from lead.","synonyms":[],"antonyms":[]}]},{"partOfSpeech":"verb","definitions":[{"definition":"take measures to check the quality, performance, or reliability of (something), especially before putting it into widespread use or practice.","example":"this range has not been tested on animals","synonyms":["try out","trial","carry out trials on","put to the test","put through its paces","experiment with","pilot","check","examine","assess","evaluate","appraise","investigate","analyse","scrutinize","study","probe","explore","sample","screen","assay"],"antonyms":[]}]}]}';
  const cardsToStudy = [{ front: 'test', back: test, level: 4 }];
  const mockHandler = jest.fn();

  const component = render(
    <Provider store={store}>
      <Card cardsToStudy={cardsToStudy} />
    </Provider>,
  );

  const input = component.container.querySelector('input');
  const form = component.container.querySelector('form');
  fireEvent.change(input, {
    target: { value: 'apple' },
  });

  form.onsubmit = mockHandler;
  fireEvent.submit(form);
  expect(mockHandler.mock.calls).toHaveLength(1);

  const back = component.container.querySelector('#back');
  expect(back).toHaveTextContent('a procedure intended to establish the quality');
});
