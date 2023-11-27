const { useState } = React;

function App() {
  const [heroName, setHeroName] = useState('');

  function handleInputChange(event) {
    setHeroName(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    let counterpick = name_hero_dota2(heroName);

    if (counterpick.length > 0) {
      console.log("Контерпіки для: ", heroName + ":");
      for (let i = 0; i < counterpick.length; i++) {
        console.log(counterpick[i]);
      }
    } else {
      console.log("Контерпіки для: ", heroName, "нема.");
    }
  }

  return (
    <div>
      <h1>My Dota2 Hero Counterpick App</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="heroName">Введіть ім'я героя:</label>
        <input
          type="text"
          id="heroName"
          value={heroName}
          onChange={handleInputChange}
        />
        <button type="submit">Показати контрпіки</button>
      </form>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(React.createElement(App), rootElement);