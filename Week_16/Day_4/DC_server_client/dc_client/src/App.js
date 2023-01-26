import {Component} from 'react';
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {header: '', message: ''};
    this.serverUrl = 'http://localhost:3001/api'
  }

  async componentDidMount() {
      const result = await axios(`${this.serverUrl}/hello`);
      this.setState( {header: result.data} );
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${this.serverUrl}/world`, {
      message: e.target.user_data.value
    });
    this.setState({message: res.data})
  }

  render() {
    return (
      <main className='App'>
        <p>{this.state.header}</p>
        <section>
          <h3>Send to server:</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name='user_data'/>
            <input type="submit" value='Submit'/>
          </form>
          <p>{this.state.message}</p>
        </section>
      </main>
    )
  }
}

export default App;
