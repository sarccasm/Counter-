import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CounterpicksApp = () => {
  const [heroName, setHeroName] = useState('');
  const [counterpicks, setCounterpicks] = useState([]);

  const getCounterpicks = () => {
    const counterpick = counterpicksDatabase[heroName] || [];
    setCounterpicks(counterpick);
  };

  return (
    <div>
      <h1>Герої Dota 2</h1>
      <label htmlFor="heroName">Введіть ім'я героя:</label>
      <input
        type="text"
        id="heroName"
        value={heroName}
        onChange={(e) => setHeroName(e.target.value)}
      />
      <button onClick={getCounterpicks}>Показати контр-піки</button>
      <p>
        {counterpicks.length > 0
          ? `Контр-піки для ${heroName}: ${counterpicks.join(', ')}`
          : `Контр-піки для ${heroName} відсутні.`}
      </p>
    </div>
  );
};

ReactDOM.render(<CounterpicksApp />, document.getElementById('root'));
