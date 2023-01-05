const server = require('./server.js');

(async () => {
    const responce = await fetch(`${server.address}/api/getUser`);
    const data = await responce.json();
    console.log(data);
})();