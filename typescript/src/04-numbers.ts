(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log(`productPrice: ${productPrice}`)

  let costumerAge:number = 23;  //  declaro costumerAge de tipo number de manera explicita
  costumerAge = costumerAge + 1;
  console.log(`costumerAge: ${costumerAge}`)

  let productInStoc: number;  //  si no inicializo una variable tengo que declarar de que tipo de dato es la variable
  console.log(`productInStock: ${productInStoc}`);  //  error por usar una variable sin asignarle un valor

  let discount = parseInt('25')
  console.log(`discount: ${discount}`);

  let hex = 0xfff;
  console.log(`hex: ${hex}`)  //  0x nos indica que el numero es un hexadecimal

  let bin = 0b101010;
  console.log(`bin: ${bin}`)  //  0b nos indica que el numero es un binario
})(); //  funcion anonima autoejecutada
