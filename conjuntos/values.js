let conjunto = new Set([1, 2, 3]);
let iterador = conjunto.values();
console.log(iterador.next().value); //Saída: 1
console.log(iterador.next().value); //Saída: 2
console.log(iterador.next().value); //Saída: 3