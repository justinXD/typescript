(()=>{
  let userId: string | number;  //  esto es un union type, nos permite tener variables dinamicas limitadas a lo que nosotros querramos
  userId = 1212;  //  a diferencia de any, union types nos ayuda a conservar el tipado y la analisis estatico de codigo de TS
  userId = 'asasa';

  function greeting(myText: string | number) {  //  aqui mi argumento de la funcion debe ser si o si string o number
  if (typeof myText === 'string') {
    console.log(`string ${myText.toLowerCase()}`);  //  si myText es string, inmediatamente nos saldrian todos los metodos de los string
  } else {
    console.log(`number ${myText.toFixed(1)}`);  //  si myText es number, inmediatamente nos saldrian todos los metodos de los number
  }
  }
  greeting('Nicolas');
  greeting(12.1212121212);
  // greeting({});  //  esta linea arroja error porque el argumento de la funcion no es de tipo string o number
})();
