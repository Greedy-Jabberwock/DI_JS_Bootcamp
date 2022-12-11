function getGifUrl(category) {
    let xhr = new XMLHttpRequest();
    const URL = "api.giphy.com/v1/gifs/random";
    const ADDITIONAL = `?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
    xhr.open('GET', URL + ADDITIONAL, { mode: 'no-cors'});
    console.log(URL+ADDITIONAL)
    xhr.withCredentials = false;
    xhr.setRequestHeader('Access-Control-Allow-Origin', "*");
    xhr.setRequestHeader('Access-Control-Allow-Headers', "*");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    xhr.onload = () => {
        if (xhr.status !== 200) {
            console.log(`Error: ${xhr.status} ${xhr.statusText}`);
        } else {
            let JSON_responce = JSON.parse(xhr.response);
            console.log(JSON_responce);
        }
    }

    xhr.onerror = () => console.log('Something goes wrong.' + xhr.status + ' ' + xhr.statusText);
}

getGifUrl('bold');
