(()=>{
  let myDynamicVar: any;  //  no se recomienda usar variables de tipo any porque se pierde la gran ventaja de TS sobre JS
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase(); //  una forma de hacer cast para que myDynamicVar sea un string
  console.log(rta);

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();  //  otra forma de hacer cast para que ahora myDynamicVar sea de tipo number
  console.log(rta2);
})();
