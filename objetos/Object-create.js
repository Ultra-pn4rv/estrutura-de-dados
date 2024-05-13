const personPrototype = {
    greet: function() {
        console.log(`Olá, meu nome é ${this.name}`);
    }
};

const objWanderson = Object.create(personPrototype);
objWanderson.name = "Wanderson";
objWanderson.greet(); // Saída: Olá, meu nome é Wanderson