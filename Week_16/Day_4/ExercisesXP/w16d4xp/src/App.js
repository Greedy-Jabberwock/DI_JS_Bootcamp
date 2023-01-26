import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorBoundary from './components/ErrorBoundary.js'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home.js';
import Profile from './components/Profile.js'
import Shop from './components/Shop.js';
import Exercise2 from './components/Exercise2.js';
import PostList from './components/PostList.js'

function App() {
  const wrapError = el => {
    return (<ErrorBoundary>{el}</ErrorBoundary>)
  }
  return (
    <main className='App'>
      <BrowserRouter>
        <div className="App">
          <NavLink to='/' className={'btn btn-primary'}>Home</NavLink>
          <NavLink to='/profile' className={'btn btn-primary'}>Profile</NavLink>
          <NavLink to='/shop' className={'btn btn-primary'}>Shop</NavLink>
          <NavLink to='/exercise2' className={'btn btn-primary'}>Exercise 2</NavLink>
          <NavLink to='/exercise3' className={'btn btn-primary'}>Exercise 3</NavLink>
        </div>
        <Routes>
          <Route exact path='/' element={wrapError(<Home/>)}/>
          <Route exact path='/profile' element={wrapError(<Profile/>)}/>
          <Route exact path='/shop' element={wrapError(<Shop/>)}/>
          <Route exact path='/exercise2' element={wrapError(<Exercise2/>)}/>
          <Route exact path='/exercise3' element={wrapError(<PostList/>)}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
