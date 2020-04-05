import React from 'react';
import Section from './common/layout/Section';
import Container from './common/layout/Container';
import { Columns, Column } from './common/layout/Columns';
import Box from './common/elements/Box';

export default props => (
  <Section style={{textAlign: 'center'}}>
    <Container>

      <h1>COVID-19 Statistics</h1>
      <p style={{fontSize: '1rem'}}>Last update: {props.updatedAt} - source: Johns Hopkins CSSE</p>
      <p style={{marginBottom: '1rem', fontSize: '1.5rem'}}>{props.region}</p>

      <Columns>

        <Column>
          <Box>
            <p>Infected</p>
            
            <Columns isMobile isCentered isVCentered>
              <Column isNarrow isGapless style={{fontSize: '1.5rem', color: '#FF8C00'}}>
                  <p>{props.infected}</p>
              </Column>
            </Columns>
            
          </Box>
        </Column>

        <Column>
          <Box>
            <p>Deaths</p>
            
              <Columns isMobile isCentered isVCentered>
                <Column isNarrow isGapless style={{fontSize: '1.5rem', paddingRight: '0.5rem', color: '#8B0000'}}>
                  <p>{props.deaths}</p>
                </Column>
                <Column isNarrow isGapless style={{fontSize: '1rem', color: '#8B0000'}}>
                  <p>({((props.deaths/props.infected)*100).toFixed(2)}%)</p>
                </Column>
              </Columns>
            
          </Box>
        </Column>

        <Column>
          <Box>
            <p>Recovered</p>
            
            <Columns isMobile isCentered isVCentered>
              <Column isNarrow isGapless style={{fontSize: '1.5rem', paddingRight: '0.5rem', color: '#006400'}}>
                <p>{props.recovered}</p> 
              </Column>
              <Column isNarrow isGapless style={{fontSize: '1rem', color: '#006400'}}>
                <p>({((props.recovered/props.infected)*100).toFixed(2)}%)</p>
              </Column>
            </Columns>
            
          </Box>
        </Column>

      </Columns>

    </Container>
  </Section>
);