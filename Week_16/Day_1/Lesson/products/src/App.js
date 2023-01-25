import './App.css';
import Product from './components/Products.js'
import React, {Component} from 'react';

class App extends Component{
  constructor() {
    super()
    this.state = {
      name: '',
      username: ''
    }
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleChangeUsername = (e) => {
    this.setState({username: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name: ', this.state.name);
  }

  render () {
    return (
      <div className="App">
      <header className="App-header">
        
      </header>
    </div>
    )
  };
}

export default App;
