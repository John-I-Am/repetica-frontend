import styled, { css } from 'styled-components';

export const Container = styled.div<any>`  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    height: 40px;
    border-radius: 10px;
    border: none;
    background: white;
    box-sizing: border-box;
    padding-left: 20px;
  }

  div {
    display: flex;
    gap: 10px;
    width: 100%;
    overflow: scroll;
  }

  ${(props: any) => props.noCreate
    && css`
      button:nth-of-type(2) {
        display: none;
      }
    `};
`;

export const blue = 'blue';
