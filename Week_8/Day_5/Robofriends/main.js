const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

    


function createCards () {
    let cards_arr = []
    robots.forEach(item => {
        let card_field = document.createElement('div');
        let img = document.createElement('img');
        let name = document.createElement('p');
        let email = document.createElement('p');

        img.src = item.image;
        name.innerHTML = item.name;
        email.innerHTML = item.email;

        card_field.classList.add('robo-card');
        card_field.appendChild(img);
        card_field.appendChild(name);
        card_field.appendChild(email);
        cards_arr.push(card_field);
    });
    return cards_arr;
};

function showCards(cards=all_cards) {
    let card_container = document.getElementById('container');
    while (card_container.hasChildNodes()) {
        card_container.removeChild(card_container.firstChild);
    }
    cards.forEach(item => container.appendChild(item));
}

const all_cards = createCards();
console.log(all_cards);
showCards();

document.forms.robosearch.elements[0].addEventListener('input', filterCards);
document.forms.robosearch.elements[0].addEventListener('submit', e => {
    e.preventDefault();
    console.log('Submitted')
});



function filterCards(e) {
    e.preventDefault()
    console.log(e.target.value.toLowerCase())
    if (e.target.value) {
        let filtered = all_cards.filter(item => item.children[1]
                                                .textContent.toLowerCase()
                                                .startsWith(e.target.value.toLowerCase()));
        showCards(filtered); 
    } else {
        showCards();
    }
}
