import Car from './components/Car';
import Events from './components/Events'
import Phone from './components/Phone';
import Color from './components/Color'
import './App.css';


function App() {
  const carinfo = {name: 'Ford', model: 'Mustang'};
  return (
    <div className="App">

        <h4>Exercise 1</h4>
        <Car carinfo={carinfo} />

        <h4>Exercise 2</h4>
        <Events />

        <h4>Exercise 3</h4>
        <Phone />

        <h4>Exercise 4</h4>
        <Color />

    </div>
  );
}

export default App;
