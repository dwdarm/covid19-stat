import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Doughnut, Line } from 'react-chartjs-2';
import { getCountryData } from '../../store/actions/countries.actions';
import Summary from '../../components/Summary';
import Section from '../../components/common/layout/Section';
import Container from '../../components/common/layout/Container';
import CountryList from '../../components/CountryList';

const Country = ({ countriesAll, dispatch }) => {
  const params = useParams();
  const country = countriesAll[params.country];

  useEffect(() => {
    if (!country) {
      //setLoading(true);
      dispatch(getCountryData(params.country));
    }
  })

  if (!country) {
    return <p>Loading...</p>
  } 

  const times = Object.keys(country).filter(e => e !== 'updated_at' && e !== 'latest' && e !== 'Country/Region');

  return (
    <div>

      <Summary
        region={country['Country/Region']}
        infected={country.latest.confirmed}
        deaths={country.latest.deaths}
        recovered={country.latest.recovered}
        updatedAt={country.updated_at}
      />

      <Section>
        <Container>
          <h4 style={{textAlign: 'center'}}>{country['Country/Region']} case</h4>

          <Doughnut data={{
            datasets: [{
              data: [country.latest.confirmed, country.latest.deaths, country.latest.recovered],
              backgroundColor: ['#FF8C00', '#8B0000', '#006400']
            }],
            labels: ['Infected', 'Deaths', 'Recovered']
          }} />

        </Container>
      </Section>

      <Section>
        <Container>

          <Line data={{
            datasets: [
              {
                label: 'Infected',
                data: times.map(e => country[e].confirmed),
                borderColor: '#FF8C00',
                backgroundColor: 'rgba(0, 0, 0, 0)'
              },
              {
                label: 'Deaths',
                data: times.map(e => country[e].deaths),
                borderColor: '#8B0000',
                backgroundColor: 'rgba(0, 0, 0, 0)'
              },
              {
                label: 'Recovered',
                data: times.map(e => country[e].recovered),
                borderColor: '#006400',
                backgroundColor: 'rgba(0, 0, 0, 0)'
              }
            ],
            labels: times
          }}/>

        </Container>
      </Section>

      <CountryList/>

    </div>
  );
}

const mapStateToProps = state => ({ countriesAll: state.countriesAll });

export default connect(mapStateToProps)(Country);