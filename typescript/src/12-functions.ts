(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'

  function createProductTpJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductTpJson('p1', new Date(), 200, 'XL');
  console.log(product1);
  console.log(product1.title);
  console.log(product1.createdAt);
  console.log(product1.stock);
  console.log(product1.size);

  const createProductTpJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes  // size es un parametro opcional
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product2 = createProductTpJsonV2('p2', new Date(), 200)
  console.log(product2)
})();
