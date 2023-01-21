import React, {Component} from 'react';
import quotes from '../assets/QuotesDatabase';
import './Quote.css';

class Quote extends Component {
    constructor() {
        super();
        this.state = {
            quotes: [],
            current: {}
        }
    };

    componentDidMount = () => {
        const firstQuote = quotes[Math.ceil(Math.random()*quotes.length)];
        firstQuote.author = firstQuote.author ? firstQuote.author : 'Unknown';
        const initialQuotes = quotes.filter(item => item.quote !== firstQuote.quote);
        this.setState({
            quotes: initialQuotes,
            current: firstQuote
        });
    };

    randomColors = () => {
        const random = () => Math.ceil(Math.random() * 255)
        return `rgb(${random()},${random()},${random()})`
    }

    getRandomQuote = () => {
        const allQuotes = this.state.quotes;
        const randomIndex = Math.ceil(Math.random() * allQuotes.length);
        const randomQuote = allQuotes[randomIndex];
        if (!randomQuote.author) {
            randomQuote.author = 'Unknown'
        }
        console.log(randomQuote);
        this.setState({
            current: randomQuote,
            quotes: allQuotes.filter(item => item.quote !== randomQuote.quote)
        });
        console.log(this.state.quotes.length);
        
        document.body.style.backgroundColor = this.randomColors();
        document.getElementById('quote').style.color = this.randomColors();
        document.getElementById('button').style.backgroundColor = this.randomColors();
    }

    render() {
        const {quote, author} = this.state.current
        return (
            <section>
                <div className='card'>
                    <h2 id='quote'>"{quote}"</h2>
                    <div className='end-content'>                   
                        <p>-{author}-</p>
                        <button id='button' onClick={this.getRandomQuote}>New quote</button>
                    </div>
                </div>
            </section>
        )
    }
};

export default Quote;