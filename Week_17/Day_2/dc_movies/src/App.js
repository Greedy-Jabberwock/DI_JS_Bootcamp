import './App.css';

import Header from './components/Header';
import Films from './components/Films';
import Details from './components/Details';

import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <main>
      <Header />
      <Provider store={store}>
        <section className='flex around'>
          <Films />
          <Details />
        </section>
      </Provider>
    </main>
  );
}

export default App;
