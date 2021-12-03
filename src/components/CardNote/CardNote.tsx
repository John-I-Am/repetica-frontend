import { Tabs } from '@mantine/core';
import parse from 'html-react-parser';
import { Container } from './styles';

interface CardNoteProps {
  examples: Array<any>;
  note: string
}

const CardNote = ({ examples, note }: CardNoteProps) => (
  <Container>
    <Tabs>
      <Tabs.Tab label="Examples">
        {examples.length !== 0 ? examples.map((ele: any) => <div key={`${ele}`}>{(ele)}</div>) : ''}
      </Tabs.Tab>
      <Tabs.Tab label="Notes">
        {parse(note)}
      </Tabs.Tab>
    </Tabs>
  </Container>
);

export default CardNote;
