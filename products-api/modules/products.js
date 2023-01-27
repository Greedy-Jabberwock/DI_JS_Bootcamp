import db from '../config/pgdb.js'

export const getAllProducts = () => {
  return db('products')
  .select('id','name','price')
  .orderBy('name');
}

export const searchProduct = (query) => {
  return db('products')
  .select('id','name','price')
  .whereILike('name', `${query}%`)
  .orderBy('name');
}

// {name:'iPhone', price:4444}
export const addProduct = (product) => {
  return db('products')
  .insert(product)
  .returning('*')
}
