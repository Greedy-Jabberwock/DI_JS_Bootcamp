const quotes = [
    {
        id: 0,
        author: "Oscar Wilde",
        quote: "Be yourself; everyone else is already taken."
    },
    {
        id: 1,
        author: "Albert Einstein",
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
        id: 2,
        author: "Marcus Tullius Cicero",
        quote: "A room without books is like a body without a soul."
    },
    {
        id: 3,
        author: "William W. Purkey",
        quote: "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."
    },
    {
        id: 4,
        author: "Albert Einstein",
        quote: "Lorem ipsum"
    }
]

function getRandomQuote(arr) {
    let random_index = Math.floor(Math.random() * arr.length);
    return arr[random_index];
}

function generateQuote() {
    let choice = getRandomQuote(quotes);
    let p_quote = document.getElementById('quote');
    let p_author = document.getElementById('author');
    if (p_quote.innerText == choice.quote) {
        generateQuote();
    }
    p_author.innerText = choice.author;
    p_quote.innerText = `${choice.quote}`;
}

// ---------------------------------------------------------------

const addForm = document.forms.addQuoteForm;
addForm.addEventListener('submit', addNewQuote)

function addNewQuote(event) {
    event.preventDefault();
    let adding_author = addForm.new_author.value;
    let adding_quote = addForm.new_quote.value;
    if (adding_author && adding_quote) {  
        let new_quote_object = {
            id: quotes.length,
            author: adding_author,
            quote: adding_quote
        }
        quotes.push(new_quote_object)
        addForm.new_author.value = '';
        addForm.new_quote.value = '';
    }
    console.log(quotes)
}

// ---------------------------------------------------------------

let searching_results = [];
let current_index = null;
const searchingForm = document.forms.searchForm;
searchingForm.addEventListener('submit', displayQuotes);
let founded_quote = document.getElementById('foundedQuote');
let founded_author = founded_quote.nextElementSibling;

function displayQuotes(e) {
    e.preventDefault();
    let searchingAuthor = searchingForm.searchField.value 
    if (searchingAuthor) {
        for (item of quotes) {
            if (searchingAuthor.toLowerCase() == item.author.toLowerCase()) {
                searching_results.push(item);
            }
        }
    }
    founded_quote.textContent = searching_results.length ? searching_results[0].quote : 'No results';
    founded_author.textContent = searching_results.length ? searching_results[0].author : '';
    current_index = 0;
}

function showNextQuote() {
    current_index = current_index >= searching_results.length ? searching_results.length - 1 : current_index + 1;;
    founded_quote.textContent = searching_results[current_index].quote;
    founded_author.textContent = searching_results[current_index].author;
}

function showPreviousQuote() {
    current_index = current_index <= 0 ? 0 : current_index - 1;
    founded_quote.textContent = searching_results[current_index].quote;
    founded_author.textContent = searching_results[current_index].author;
}