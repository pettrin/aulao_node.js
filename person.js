class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayMyName() {
        return (`Hello, my name is ${this.name}! and I am ${this.age}! years old.`);
    }
}

module.exports = {
    Person,
}