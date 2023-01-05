const getProducts = async () => {
    const ret = await fetch('http://localhost:8080/api/products');
    const data = await ret.json();
    createList(data);
}

const searchProduct = async () => {
    try {
        const input = document.getElementById('search').value;
        const res = await fetch(`http://localhost:8080/api/search/${input}`)
        const data = await res.json();
        createList(data);
    } catch (error) {
        alert(error)
    } 
    
}

const createList = async (arr) => {
    const html = arr.map(item => {
        return `<div>${item.id} | ${item.name} | ${item.price}</div>`
    });
    document.getElementById('list').innerHTML = html.join('');
};

getProducts();

