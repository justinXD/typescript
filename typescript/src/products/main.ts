import { products, addProduct, calcStock } from './product.service'

addProduct({
  title: 'p1',
  createdAt: new Date(),
  stock: 20
})

addProduct({
  title: 'p2',
  createdAt: new Date(),
  stock: 30,
  size: 'L'
})

console.log(products)
const total = calcStock()
console.log(total)
