const form = document.forms[0];
form.addEventListener('submit', appendData);

function appendData(e) {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(form).entries());
    let new_p = document.createElement('p');
    new_p.innerHTML = JSON.stringify(data);
    document.body.appendChild(new_p);
}
