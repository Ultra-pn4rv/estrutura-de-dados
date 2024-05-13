let fila = [];
fila.enqueue = function(item) {
    this.push(item);
};
fila.enqueue(1);
fila.enqueue(2);
console.log(fila);

//adiciona um elemento no final da fila