import styled, { css } from 'styled-components';
import { device, ORANGE_PRIMARY } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 80%;
  height: 80%;

  @media ${device.mobileL} {

  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
  background: white;
  border-radius: 20px;
  padding: 5%;
  height: 50%;
`;

export const CardHeader = styled.div<any>`
    display: flex;
    justify-content: space-between;
    color: ${ORANGE_PRIMARY};

    input {
      width: 32px;
    }

    @media ${device.mobileL} {

    }
`;

export const GuessForm = styled.form<any>`
  input {
    border: none;
    text-align: center;
    font-size: 48px;
    background:  #f0f0f5;

    ::placeholder {
      color: red;
    }

    ${(props: any) => props.isCorrect
    && css`
      color: green;
    `};

    @media ${device.mobileL} {
      font-size: 24px;
    }
  }
`;

export const CardFront = styled.div<any>`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: scroll;
`;

export const CardBack = styled.div`
  text-align: center;
  font-size: 14px;
  border-top: 1px solid black;
  overflow: scroll;
`;
