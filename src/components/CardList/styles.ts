import styled from 'styled-components';
import { ORANGE_PRIMARY, PURPLE_PRIMARY } from '../../constants';

export const Table = styled.table`  
  display: block;
  overflow: auto;
  height: 600px;
  background: white;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
  border-radius: 0px 0px 10px 10px;
  border-collapse: collapse;
  text-align: center;
  font-size: 12px;

  th {
    background: white;
    padding: 0px 85px 0px 85px;
    width: 100%;
    color: ${PURPLE_PRIMARY};
    font-size: 16px;
    position: sticky; 
    top: 0;
    z-index: 1;
  }

  td {
    padding: 10px;

    :first-of-type {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
`;

export const TableFront = styled.td`
  color: ${ORANGE_PRIMARY};
  background: #303030;
`;
