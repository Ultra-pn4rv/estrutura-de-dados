let fila = [1, 2, 3];
fila.toArray = function() {
    return this.slice();
};
let arrayFila = fila.toArray();
console.log(aarayFila);

//retorna uma copia dos elementos da fila em um array