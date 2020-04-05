import React from 'react';
import styled from 'styled-components';
import breakpoints from '../options/breakpoints';

export const Columns = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'row' : 'column'};
  justify-content: ${props => props.isCentered ? 'center' : 'flex-start'};
  align-items: ${props => props.isVCentered ? 'center' : 'stretch'};
  flex-wrap: ${props => props.isWrap ? 'wrap' : 'nowrap'};

  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  flex: ${props => props.isNarrow ? '0 1 auto' : '1'};
  margin: ${props => props.isGapless ? '0' : '0.75rem'};

`;

