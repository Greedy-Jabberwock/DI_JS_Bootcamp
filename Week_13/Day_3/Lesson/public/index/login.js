const login = () => {
    fetch('http://localhost:8080/login')
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}