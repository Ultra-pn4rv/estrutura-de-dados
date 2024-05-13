const person = {
    name: "Wanderson",
    age: 40,
    city: "Cuiabá",
};
Object.freeze(person);
person.age = 31; // Isso não terá efeito porque o objeto está congelado
console.log(person); // Saída: {name: 'Wanderson', age: 40, city: 'Cuiabá'}