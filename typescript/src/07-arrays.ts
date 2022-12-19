(() => {
  let prices = [1,2,3,5,3, 'hola', false];  //  puedo tener un array devarios tipos de datos si lo dejo de forma inferida al declarar el array
  prices.push(123, 'adios', true);

  let discount: number[] = [10,5,25];   //  declaro de forma explicita un array de solo numeros y lo inicializo

  let mixed: (number | string | boolean | Object)[] = ['hola', false];  //  declaro un array de forma explicita que acepta cuatro tipos de datos diferentes
  mixed.push(125, {saludo: 'hola'}, 'ya me voy');

  let numbers = [1,2,3,5,3];
  let numbers2: number[] = numbers.map((a) => a*2)
  console.log(`prices: ${prices}`);
  console.log(`discount: ${discount}`);
  console.log(`mixed: ${mixed}`);
  console.log(`numbers2: ${numbers2}`);
})();
