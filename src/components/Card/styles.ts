import styled from 'styled-components';
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

export const Cardd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
  background: white;
  border-radius: 20px;
  padding: 5%;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${ORANGE_PRIMARY};
    img {
        width: 24px;
      }

    @media ${device.mobileL} {

  }
`;

export const CardFront = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      border: none;
      text-align: center;
      font-size: 48px;
      background:  #f0f0f5;

      @media ${device.mobileL} {
        font-size: 24px;
      }
    }
`;

export const CardBack = styled.div`
  text-align: center;
  font-size: 14px;
  border-top: 1px solid black;
`;
