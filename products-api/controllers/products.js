import { getAllProducts, searchProduct, addProduct } from '../modules/products.js';


export const _getAllProducts = (req,res) => {
  getAllProducts()
  .then(rows => {
    res.json(rows)
  })
  .catch(e => {
    console.log(e);
  })
}

export const _searchProduct = (req, res) => {
  searchProduct(req.query.name)
  .then(rows => {
    res.json(rows)
  })
  .catch(e => {
    console.log(e);
  })
}

export const _addProduct = (req, res) => {
  addProduct(req.body)
  .then(rows => {
    res.json(rows)
  })
  .catch(e => {
    console.log(e);
  })
}
