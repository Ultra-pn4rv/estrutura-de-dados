let fila = [1, 2, 3];
fila.size = function() {
    return this.length;
};
console.log(fila.size());

//retorna o numero de elementos na fila