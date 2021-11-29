/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { device, BLUE_PRIMARY, ORANGE_PRIMARY } from '../../constants';

export const Container = styled.div`  
  width: 100%;
  max-width: 700px;
  overflow: scroll;
  font-size: 14px;
  color: ${BLUE_PRIMARY};
`;

export const TableFront = styled.td`
  color: ${ORANGE_PRIMARY};
  background: #303030;
`;
