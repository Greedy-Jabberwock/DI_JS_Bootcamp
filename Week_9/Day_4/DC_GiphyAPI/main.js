const gif_form = document.forms.get_gif;
const gifs_field = document.getElementById('gifs_field');

let create_el = (tag) => document.createElement(tag);

function getGif(e) {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let category = gif_form.elements[0].value;
    gif_form.elements[0].value = '';
    const URL = "https://api.giphy.com/v1/gifs/random";
    const ADDITIONAL = `?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${category}&rating=g`;
    
    xhr.open('GET', URL + ADDITIONAL);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status !== 200) {
            console.log(`Error: ${xhr.status} ${xhr.statusText}`);
        } else {
            let JSON_responce = JSON.parse(xhr.response);
            let url = JSON_responce.data.images.fixed_width.url;
            let card = createGifCard(url);
            document.getElementById('gifs_field').appendChild(card);
        }
    }

    xhr.onerror = () => console.log('Something goes wrong.' + xhr.status + ' ' + xhr.statusText);
}


function createGifCard (url) {
    let container = create_el('div');
    let img = create_el('img');
    img.src = url;
    let button = create_el('button');
    button.innerHTML = 'Delete';
    container.appendChild(img);
    container.appendChild(button);
    button.addEventListener('click', () => gifs_field.removeChild(container))
    return container;
}


function deleteAll() {
    while (gifs_field.children) {
        gifs_field.removeChild(gifs_field.firstChild);
    }
}

gif_form.addEventListener('submit', getGif);


