const ADDRESS = 'http://localhost:8080'

const getList = async () => {
    const res = await fetch(ADDRESS + '/list');
    const data = await res.json();
    Object.entries(data).forEach((item) => {
        document.getElementById('product-list').innerHTML += 
        `<li><b>${item[0]} : ${item[1]}</b></li>`
    })
};

getList();

const addToList = async () => {
    const product = document.getElementById('product').value;
    const amount = document.getElementById('amount').value;

    if (Boolean(product.match(/[^a-zA-Z]/g))) {
        alert('Only letters can be in product name');
        return false;
    }

    if (!Boolean(parseInt(amount))) {
        alert('Amount can be only a number');
        return false;
    }

    const userdata = {
        product: product,
        amount: amount
    };
    await fetch(ADDRESS + '/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
    });
}