import React from 'react';
import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHead = styled.th`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

export const TableData = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
`;