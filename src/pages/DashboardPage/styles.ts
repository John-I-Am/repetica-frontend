import styled from 'styled-components';
import { device, PURPLE_PRIMARY, ORANGE_PRIMARY } from '../../constants';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ghostwhite;
  height: 100vh;
  padding: 5% 100px 5% 150px;

  img {
    width: 100%;
    height: auto;  
  }

   b {
    color: ${PURPLE_PRIMARY};
   }

   b:first-child {
    color: ${ORANGE_PRIMARY};
  }

  @media ${device.mobileL} {
    padding: 70px 20px 20px 20px;
  }
`;

export const NoCards = styled.form`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
