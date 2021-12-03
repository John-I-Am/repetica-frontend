import styled, { css } from 'styled-components';
import { device, ORANGE_PRIMARY } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 80%;
  height: 80%;

  @media ${device.mobileL} {

  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
  background: white;
  border-radius: 20px;
  padding: 5%;
  width: 100%;
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
    overflow-wrap: break-word;
    overflow: scroll;
    height: 100%;
`;

export const CardBack = styled.div`
  text-align: center;
  border-top: 1px solid black;
  padding-top: 20px;
  overflow: scroll;
  height: 100%;
`;
