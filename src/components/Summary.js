import React from 'react';
import styled from 'styled-components';
import Section from './common/layout/Section';
import Container from './common/layout/Container';
import { Columns, Column } from './common/layout/Columns';
import Box from './common/elements/Box';
import breakpoints from './common/options/breakpoints';

export default props => (
  <Section style={{textAlign: 'center'}}>
    <Container>

      <h1>COVID-19 Statistics</h1>
      <p style={{marginBottom: '1rem', fontSize: '1.5rem'}}>{props.region}</p>

      <Columns>

        <Column>
          <Box>
            <p>Infected</p>
            <p style={{fontSize: '1.5rem', color: '#FF8C00'}}>{props.infected}</p>
          </Box>
        </Column>

        <Column>
          <Box>
            <p>Deaths</p>
            <p style={{fontSize: '1.5rem', color: '#8B0000'}}>{props.deaths}</p>
          </Box>
        </Column>

        <Column>
          <Box>
            <p>Recovered</p>
            <p style={{fontSize: '1.5rem', color: '#006400'}}>{props.recovered}</p>
          </Box>
        </Column>

      </Columns>

      <p style={{fontSize: '1rem'}}>Last update: {props.updatedAt} - source: Johns Hopkins CSSE</p>

    </Container>
  </Section>
);