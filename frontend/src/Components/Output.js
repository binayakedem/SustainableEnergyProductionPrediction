import React, { useEffect, useState } from 'react'
import BarChart from './BarChart'
import './output.css'
import axios from 'axios'
const Output = () => {
    const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // Make a GET request to the API
    axios.get('https://type.fit/api/quotes')
      .then((response) => {
        setQuotes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching quotes:', error);
      });
  }, []);
  return (
    <>
    <div className="output">
    <div className="bar-chart">
        <BarChart/>
    </div>
    <div className="recommendation">
        <h1 className='recommendation-heading'>Recommendation</h1>
        <p> {quotes.map((quote, index) => (
          <li key={index}>{quote.text}</li>
        ))}</p>

    </div>
    </div>

    </>
  )
}

export default Output