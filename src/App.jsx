// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopulationGraph from './garph/PopulationGraph';

const App = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        setPopulationData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Population Graph</h1>
      <PopulationGraph populationData={populationData} />
    </div>
  );
};

export default App;
