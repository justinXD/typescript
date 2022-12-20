(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = []; //  esto si

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    title: 'p1',
    createdAt: new Date(),
    stock: 20
  })

  addProduct({
    title: 'p2',
    createdAt: new Date(),
    stock: 50,
    size: 'L'
  })

  addProduct({
    title: 'p3',
    createdAt: new Date(),
    stock: 60,
    size: 'M'
  })
  // products.push({jhjh})  // esto falla porque no cumple la estructura de Product
  console.log(products)
})();
