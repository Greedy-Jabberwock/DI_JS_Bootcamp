import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Robots from './components/Robots';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <hr/>
      <Robots/>
    </div>
  );
}

export default App;
