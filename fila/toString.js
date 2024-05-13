let fila = [1, 2, 3];
fila.toString = function() {
    return this.join(', ');
};
console.log(fila.toString());

//retorna uma representacao em string dos elementos da fila