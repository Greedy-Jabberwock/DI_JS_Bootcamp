import './App.css';
import Counter from './components/Counter.js'


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducers';

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
