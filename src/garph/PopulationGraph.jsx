import React from 'react';
import { Bar } from 'react-chartjs-2';

const PopulationGraph = ({ populationData }) => {

  if (!populationData || populationData.length === 0) {
    return <div>No data available</div>;
  }

  const years = populationData.map(entry => entry.Year);
  const populations = populationData.map(entry => entry.Population);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Population',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        data: populations,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        ticks: {
          callback: value => {
            if (value >= 1e6) {
              return value / 1e6 + 'M';
            }
            return value;
          },
        },
        title: {
          display: true,
          text: 'Population (millions)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
    },
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PopulationGraph;
