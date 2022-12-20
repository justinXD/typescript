(() => {
  const login = (data: { email: string, password: number }) => {
    console.log(data.email, data.password)
  }
  login({
    email: 'hola@hola.com',
    password: 123456
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const products: any[] = []; //  no hacer esto

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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
})();
