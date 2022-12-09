// ============== Exercise 1 : Giphy API ===============

const GIF_URL = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

function getData() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', GIF_URL);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status !== 200) {
            console.log(`Error: ${xhr.status} ${xhr.statusText}`);
        } else {
            let JSON_responce = JSON.parse(xhr.response);
            console.log(JSON_responce);
        }
    }
}

getData();

// ============== Exercise 2 : Giphy API ===============

function getSunData() {
    let xhr = new XMLHttpRequest();
    const SUN_URL = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
    const ADDITIONAL = '&limit=10&offset=2';
    xhr.open('GET', SUN_URL + ADDITIONAL);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status !== 200) {
            console.log(`Error: ${xhr.status} ${xhr.statusText}`);
        } else {
            let JSON_responce = JSON.parse(xhr.response);
            console.log(JSON_responce);
        }
    }
}

getSunData();