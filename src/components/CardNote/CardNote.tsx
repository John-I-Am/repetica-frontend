/* eslint-disable no-use-before-define */
import './style.css';
import React, { useState, useImperativeHandle } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

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
    <div className="card-note" style={hideWhenVisible}>
      <Tabs defaultActiveKey="examples" id="uncontrolled-tab-example" className="mt-5">
        <Tab className="mt-2 p-3" eventKey="examples" title="Examples">
          {examples.map((ele: any) => <p key={`${ele}`}>{ele}</p>)}
        </Tab>
        <Tab className="mt-2 p-3" eventKey="note" title="Note">
          <p>No Notes to be found</p>
        </Tab>
      </Tabs>
    </div>
  );
});

export default CardNote;
