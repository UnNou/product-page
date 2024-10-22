import React, { useState } from 'react';

function CatFactComponent() {
  const [fact, setFact] = useState('Click the button to get a cat fact!');

  const fetchCatFact = () => {
    fetch('https://cat-fact.herokuapp.com/facts/random') //Open data API fetch request
      .then((response) => response.json())
      .then((data) => {
        setFact(data.text);
      })
      .catch((error) => {
        console.error('Error fetching the cat fact:', error);
        setFact('Oops! Something went wrong...');
      });
  };

  return (
    <div>
      <h2>Random Cat Fact</h2>
      <button onClick={fetchCatFact}>Get a Cat Fact!</button>
      <p>{fact}</p>
    </div>
  );
}

export default CatFactComponent;
