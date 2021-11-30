/* eslint-disable no-use-before-define */
import React, { useState, useImperativeHandle } from 'react';
import { Tabs } from '@mantine/core';
import { Container } from './styles';

interface CardNoteProps {
  examples: Array<any>;
}

const CardNote = React.forwardRef(({ examples }: CardNoteProps, ref) => {
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
          <p>No Notes to be found</p>
        </Tabs.Tab>
      </Tabs>
    </Container>
  );
});

export default CardNote;
