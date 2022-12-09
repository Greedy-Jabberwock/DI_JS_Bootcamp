const chuck_form = document.forms.chuck_form;

function getCategoties() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.chucknorris.io/jokes/categories");
    xhr.send();
    
    xhr.onload = () => {
        if (xhr.status !== 200) {
            alert(`Error: ${xhr.status} ${xhr.statusText}`)
        } else {
            let categories = JSON.parse(xhr.response);
            categories.forEach(item => {
                let new_option = document.createElement('option');
                new_option.innerHTML = item;
                new_option.value = item;
                chuck_form.categories.append(new_option);
            });
        }
    }

    xhr.onerror = () => console.log('Failed.')
};

getCategoties();

chuck_form.addEventListener('submit', getJoke);

function getJoke(e) {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let category = chuck_form.categories.value;
    
    xhr.open('GET', `https://api.chucknorris.io/jokes/random?category=${category}`);
    
    xhr.send();
    
    xhr.onload = () => {
        if (xhr.status !== 200) {
            console.log(`Error: ${xhr.status} ${xhr.statusText}`)
        } else {
            let response = JSON.parse(xhr.response).value;
            document.getElementById('joke').innerHTML = response;
        }
    }
};
