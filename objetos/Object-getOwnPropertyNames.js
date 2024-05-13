const person = {
    name: "Wanderson",
    age: 40,
    city: "Cuiabá",
};
const propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames); // Saída: ['name', 'age', 'city']