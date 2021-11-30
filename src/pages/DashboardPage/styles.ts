import styled from 'styled-components';
import { BLUE_PRIMARY, device } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ghostwhite;
  height: 100vh;
  padding: 10px 10px 10px 60px;

  @media ${device.mobileL} {
    padding: 60px 10px 10px 10px;
  }
`;

export const NoCards = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: ${BLUE_PRIMARY};

    @media ${device.mobileL} {
      font-size: 16px;
    }
  }
`;
