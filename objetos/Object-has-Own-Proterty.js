const person = {
    name: "Wanderson",
    age: 40,
    city: "Cuiabá",
};
console.log(person.hasOwnProperty('name')); // Saída: true
console.log(person.hasOwnProperty('toString'));
// Saída: false (toString é uma propriedade herdada)