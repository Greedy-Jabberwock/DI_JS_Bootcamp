fetch('https://artistic-husky-spandex.glitch.me/example', {
    method: 'POST',
    body: JSON.stringify({q:'tel aviv'}),
    headers: {
        'Content-Type' : 'application/json'
    }
})
.then(res => res.text())
.then(res => console.log(res))
.catch(err => console.log(err))