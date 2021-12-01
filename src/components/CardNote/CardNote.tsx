/* eslint-disable no-use-before-define */
import React, { useState, useImperativeHandle } from 'react';
import { Tabs } from '@mantine/core';
import parse from 'html-react-parser';
import { Container } from './styles';

interface CardNoteProps {
  examples: Array<any>;
  note: string
}

const CardNote = React.forwardRef(({ examples, note }: CardNoteProps, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => ({
    toggleVisibility,
  }));

  return (
    <Container style={hideWhenVisible}>
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
});

export default CardNote;
