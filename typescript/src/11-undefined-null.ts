(() => {
  // let myNumber: number = undefined; // esto da error
  // let myString: string = null;  // esto da error

  let myNull: null = null;  // variable de tipo null
  let myUndefined: undefined = undefined; // variable de tipo undefined

  let myNumber: number | null = null; // union type
  myNumber = 3;

  let myString: string | undefined = undefined;
  myString = 'asdfg'

  function hi(name: string | null) {
    let hello: string = 'Hola '
    if (name) {
      hello += name
    } else {
      hello += 'nobody'
    }
    console.log(hello)
  }

  function hiV2(name: string | null) {
    let hello: string = 'Hola '
    hello += name?.toLocaleLowerCase() || 'nobody'  // si TS no sabe que tipo de dato vendra en name, TS va a agregar el ? antes del metodo para no romper la funcion
    // esto se llama optional chaining y es nativo de JS. Esta funcion hace lo mismo que la funcion hi()
    // si usamos el Nullish coalescing operator (??) en vez del operador logico OR (||) hello caera al fallback si y solo si name es null o undefined
    console.log(hello)
  }

  hi('Justin');
  hi(null);

  hiV2('Justin');
  hiV2('');
})();
