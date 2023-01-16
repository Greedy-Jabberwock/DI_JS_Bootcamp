import logo from './logo.svg';
import './App.css';
import UserFavoriteColors from './components/UserFavoriteColors'
import Exercise4 from './components/Exercise4';

function App() {
  const myelement = <h1>I love JSX</h1>
  const  sum = 5 + 5

  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>EXS 1: </h1>
        <h1>I don't use JSX</h1>
        <h1>EXS 2:</h1>
        {myelement}
        <p>React is {sum} times better with JSX</p>
        <h1>EXS 3:</h1>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <ul>
          {
            user.favAnimals.map( (color, index) => {
              return (
                <UserFavoriteColors color={color} index={index}/>
              )
            })
          }
        </ul>
        <Exercise4 />
      </header>
    </div>
  );
}

export default App;
