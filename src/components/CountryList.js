import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Columns, Column } from './common/layout/Columns';
import { getCountryList } from '../store/actions/countries.actions';
import Section from './common/layout/Section';
import Container from './common/layout/Container';

const CountryLink = styled(Link)`
  color: hsl(0, 0%, 100%);
  background-color: hsl(204, 86%, 53%);
  border: 0.5px solid hsl(0, 0%, 86%);
  padding: 0.5rem 1rem;
  font-size: 1rem;

  &:hover {
    color: hsl(0, 0%, 100%);
    background-color: hsl(217, 71%, 53%);
  }
`;

const CountryList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CountryItem = styled.div`
  margin: 1rem 0.5rem;
`;

const CountryListContaier = ({ countryList, dispatch }) => {
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if (countryList.length === 0 && loading === false) {
      setLoading(true);
      dispatch(getCountryList());
    }
  }); 

  return (
    <Section>
      <Container>
        <h4 style={{textAlign: 'center'}}>Country list</h4>
        <Columns isWrap isMobile isCentered>
          {countryList.map(e => (
            <Column key={e} isNarrow>
              <CountryLink to={`/${e}`}>{e}</CountryLink>
            </Column>
          ))}
        </Columns>
      </Container>
    </Section>
  );
}

const mapStateToProps = state => ({ countryList: state.countryList });

export default connect(mapStateToProps)(CountryListContaier);