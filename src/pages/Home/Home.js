import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Doughnut, Line } from 'react-chartjs-2';
import { getSummary } from '../../store/actions/summary.actions';
import Summary from '../../components/Summary';
import CountriesLatest from './CountriesLatest';
import Section from '../../components/common/layout/Section';
import Container from '../../components/common/layout/Container';

const Home = ({ summary, dispatch }) => {
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if (!summary && loading === false) {
      setLoading(true);
      dispatch(getSummary());
    }
  }, [])

  if (!summary) {
    return <p>Loading...</p>
  }

  const times = Object.keys(summary).filter(e => e !== 'updated_at' && e !== 'latest');

  return (
    <div>

      <Summary
        region="Global"
        infected={summary.latest.confirmed}
        deaths={summary.latest.deaths}
        recovered={summary.latest.recovered}
        updatedAt={summary.updated_at}
      />

      <CountriesLatest/>

      <Section>
        <Container>
          <h4 style={{textAlign: 'center'}}>Global case</h4>

          <Doughnut data={{
            datasets: [{
              data: [summary.latest.confirmed, summary.latest.deaths, summary.latest.recovered],
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
                data: times.map(e => summary[e].confirmed),
                borderColor: '#FF8C00',
                backgroundColor: 'rgba(0, 0, 0, 0)'
              },
              {
                label: 'Deaths',
                data: times.map(e => summary[e].deaths),
                borderColor: '#8B0000',
                backgroundColor: 'rgba(0, 0, 0, 0)'
              },
              {
                label: 'Recovered',
                data: times.map(e => summary[e].recovered),
                borderColor: '#006400',
                backgroundColor: 'rgba(0, 0, 0, 0)'
              }
            ],
            labels: times
          }}/>

        </Container>
      </Section>

    </div>
  );
}

const mapStateToProps = state => ({ summary: state.summary });

export default connect(mapStateToProps)(Home);