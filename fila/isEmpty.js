let fila = [];
fila.isEmpty = function() {
    return this.length === 0;
};
fila.enqueue = function(item) {
    this.push(item);
};
console.log(fila.isEmpty());
fila.enqueue(1);
console.log(fila.isEmpty());