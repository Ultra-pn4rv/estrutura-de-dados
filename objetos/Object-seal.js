const person = {
    name: "Wanderson",
    age: 40,
    city: "Cuiabá"
};
Object.seal(person);
person.age = 31; // Isso aaterá efeito porque as propriedades do objeto está selado, mas não o valor da propriedade.
person.gender = "masculino"; // Isso não terá efeito porque não podemos adicionar outras propriedades pois ela está selada.
console.log(person); // Saída: {name: 'Wanderson, age: 31, city: 'Cuiabá'}