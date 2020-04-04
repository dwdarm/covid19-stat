import React from 'react';
import styled from 'styled-components';
import breakpoints from '../options/breakpoints';

const Container = styled.div`
  padding: 0;
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${breakpoints.lg}px) {
    max-width: ${breakpoints.lg - 64}px;
  }

  @media (min-width: ${breakpoints.xg}px) {
    max-width: ${breakpoints.xg - 64}px;
  }
`;

export default Container;