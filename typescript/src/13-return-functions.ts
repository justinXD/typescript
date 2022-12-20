(() => {
  const calcTotal = (prices: number[]): string => { // return explicito de un valor al que puedo forzar a que sea un string aunque el retorno sea number
    let total = 0;
    prices.forEach((item) => total += item);
    return total.toString()
  }

  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`El total es: ${rta}`)
  }

  printTotal([1,2,3,4,5]);  // las funciones que no retornan nada son de tipo void, igual podemos especificar el retorno (prices: number[]): void => ...
})();
