import { Product } from './product.model'

const products: Product[] = []; //  esto si

const addProduct = (data: Product) => {
  products.push(data)
}

const calcStock = (): number => {
  let total:number = 0;
  products.forEach((item) => {
    total += item.stock
  })
  return total;
}

export { products, addProduct, calcStock }
