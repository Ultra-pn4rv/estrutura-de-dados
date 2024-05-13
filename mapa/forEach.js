let mapa = new Map();
mapa.set('chave1', 'valor1');
mapa.set('chave2', 'valor2');

mapa.forEach((valor, chave) => {
    console.log(` ${chave} -> ${valor}`);
})