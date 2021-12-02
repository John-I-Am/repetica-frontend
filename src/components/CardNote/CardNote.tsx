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
        {examples?.map((ele: any) => <p key={`${ele}`}>{ele}</p>)}
      </Tabs.Tab>
      <Tabs.Tab label="Notes">
        {parse(note)}
      </Tabs.Tab>
    </Tabs>
  </Container>
);

export default CardNote;
