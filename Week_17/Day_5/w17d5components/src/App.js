import './App.css';
import data from './json/data.json'
import EmojiCard from './components/EmojiCard';

function App() {
  return (
    <div className="container">
      {data.cards.map((card, index) => {
        return <EmojiCard card={card} id={index}/>
      })}
    </div>
  );
}

export default App;
