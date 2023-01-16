// import logo from './logo.svg';
import './App.css';
// import Child from './Child';
// import ChildClass from './ChildClass';
import User from './components/User'
import users from './components/users.json'

function App() {
  // const users = [
  //   {id:1, name:'Ella', email: 'ella@mail.com'}, 
  //   {id:2, name:'Steve', email: 'steve@mail.com'}, 
  //   {id:3, name:'Henry', email: 'henry@mail.com'}, 
  // ]
  const style = {
    display:'inline-blocknpm',
    margin: '15px',
    padding: '20px',
    border: '1px solid black',
    'border-radius': '4px'
  }

  return (
    <div className="App">
      <header>
        {/* <h1>Hello from App.js</h1> */}
        {/* <Child name='John' email='some@mail.com'/>
        <ChildClass name='Morty' email='another@gmail.com'/> */}
        {
          users.map((item, index) => {
            return (
              <div key={index} style={style}>
                <User users={item} />
              </div>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
