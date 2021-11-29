import styled from 'styled-components';
import { BLUE_PRIMARY, device, PURPLE_PRIMARY } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ghostwhite;
  height: 100vh;
  padding: 0 100px 0 150px;

  img {
    width: 100%;
    height: auto;  
  }

  @media ${device.mobileL} {
    padding: 70px 20px 20px 20px;
  }
`;

export const NoCards = styled.div`
  color: ${PURPLE_PRIMARY};
  padding-bottom: 10%;

  h1 {
    color: ${BLUE_PRIMARY}
  }
`;
