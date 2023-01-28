import {Component} from 'react';
import Head from './components/Head.js';
import SupCard from './components/SupCard.js';
import json_sup from './json/superheroes.json'
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      best: 0,
      sups: json_sup.superheroes
    }
  }

  shuffleSups = () => {
    const {sups} = this.state;
    sups.sort((a, b) => Math.random() < .5 ? 1 : -1);
    this.setState({sups})
  }

  handleClick = (id) => {
    console.log('Clicked: ', id);
    const {sups} = this.state;
    const current = sups.find(item => item.id === id);
    if (!current.clicked) {
      this.setState({score: this.state.score + 1});
      sups[sups.indexOf(current)].clicked = true;
      this.setState({sups})
    } else {
      sups.forEach(item => {item.clicked = false});
      this.setState({sups})
      if (this.state.score > this.state.best) {
        this.setState({best: this.state.score});
        this.setState({score: 0});
      } else {
        this.setState({score: 0});
      }
    }
    this.shuffleSups();
  }

  render() {
    const {score, best, sups} = this.state
    return (
      <main className='container'>
        <Head score={score} best={best}/>
        <div className='hero-album'>
          {sups.map(hero => {
            return <SupCard hero={hero} handleClick={this.handleClick}/>
          })}
        </div>
      </main>
    );
  }
}

export default App;
