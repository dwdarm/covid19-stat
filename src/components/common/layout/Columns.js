import React from 'react';
import styled from 'styled-components';
import breakpoints from '../options/breakpoints';

export const Columns = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  flex: 1;
  margin: 1.5rem 0;

  @media (min-width: ${breakpoints.md}px) {
    &:nth-child(n+0) {
      margin-left: 0;
      margin-right: 1.5rem;
    }

    &:nth-child(3n+3) {
      margin-left: 1.5rem;
      margin-right: 0;
    }

    &:nth-child(2n+0) {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }
`;

