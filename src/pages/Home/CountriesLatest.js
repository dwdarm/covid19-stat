import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountriesLatest } from '../../store/actions/countries.actions';
import Section from '../../components/common/layout/Section';
import Container from '../../components/common/layout/Container';
import { Table, TableRow, TableData, TableHead } from '../../components/common/elements/Table';

const CountriesTable = props => (
  <Table>

    <thead>
      <TableRow>
        <TableHead>Country</TableHead>
        <TableHead>Infected</TableHead>
        <TableHead>Deaths</TableHead>
        <TableHead>Recovered</TableHead>
      </TableRow>
    </thead>

    <tbody>
      {props.data.map(e => (
        <TableRow key={e['Country/Region']}>
          <TableData><Link to={`/${e['Country/Region']}`}>{e['Country/Region']}</Link></TableData>
          <TableData style={{color: '#FF8C00'}}>{e.latest.confirmed}</TableData>
          <TableData style={{color: '#8B0000'}}>{e.latest.deaths}</TableData>
          <TableData style={{color: '#006400'}}>{e.latest.recovered}</TableData>
        </TableRow>
      ))}
    </tbody>

  </Table>
);

const CountriesLatest = ({ countries, dispatch }) => {
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if (countries.length === 0 && loading === false) {
      setLoading(true);
      dispatch(getCountriesLatest());
    }
  }, []);

  return (
    <Section style={{fontSize: '1rem'}}>
      <Container>
        <CountriesTable data={countries.slice(0, 10)}/>
      </Container>
    </Section>
  );
}

const mapStateToProps = state => ({ countries: state.countriesLatest })

export default connect(mapStateToProps)(CountriesLatest)