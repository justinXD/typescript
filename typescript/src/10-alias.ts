(() => {
  type UserID = string | number;  //  palabra reservada de TS para definir nuestro propio tipo (de dato con su respectivo tipado). Esto se llama alias
  let userId: UserID; //  esto nos ayuda a escribir codigo mas limpio y facil de mantener

  //  Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL' //  esto es un alias
  let shirtSize: Sizes; //  con literal types podemos limitar aun mas el tipados y los errores al asignarle a una variable valores muy especificos
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 's'; //   esta linea da error porque s no esta dentro del conjunto de Sizes

  function greeting(userId: UserID, size: Sizes) {  //  aqui mis argumentos de la funcion deben ser si o si de tipo UserID y de tipo Sizes
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);  //  si userId es string, inmediatamente nos saldrian todos los metodos de los string
    }
  }
  greeting(1111, 'M');
  // greeting('nubmaster', 'asdd'); //  esta linea da error porque 'asdd' no forma parte del conjunto de datos Sizes
})();
