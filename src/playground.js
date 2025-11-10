console.log('Put your code here!');

class Person {
    static #allPeople = []

    constructor(name, age, location, hobbies, bilingual) {
        this.name = name
        this.age = age
        this.location = location
        this.hobbies = hobbies
        this.bilingual = bilingual
        Person.#allPeople.push(this)
    }

    introduce() {
        if (this.bilingual === true) {
            return `Hola! That means Hello in Spanish, mi nombre, my name is ${this.name} and I am ${this.age} years old. I am from ${this.location} and I enjoy ${this.hobbies.join(", ")}! Un placer conocerte, Adios! :)`
        } else {
            return `Hello! Nice to meet you, my name is ${this.name} and I am ${this.age} years old. I am from ${this.location} and I enjoy ${this.hobbies.join(", ")}! Have a great day :)`
        }
    }

    happyBirthday() {
        return `HAPPY BIRTHDAY ${this.name}! Can not believe you are ${this.age += 1} years old, OH how fast the time goes!`
    }

    addHobby(hobby) {
        this.hobbies.unshift(hobby)
        return `${this.name} enjoys: ${this.hobbies.join(", ")}`
    }

    removeHobby(hobby) {
        const index = this.hobbies.indexOf(hobby)
        if (index === -1) {
            return `This hobby does not exist.`
        } else {
            this.hobbies.splice(index, 1)
            return `${this.name} enjoys: ${this.hobbies.join(", ")}.`
        }
    }

    static personList() {
        return [...Person.#allPeople]
    }

    static personFind(name) {
        return [...Person.#allPeople].filter(person => person.name === name)
    }

}



// --- Example People ---

const alice = new Person(
    "Alice",
    25,
    "New York",
    ["reading", "painting"],
    true // bilingual
);

const bob = new Person(
    "Bob",
    30,
    "Los Angeles",
    ["hiking"],
    false // not bilingual
);

const charlie = new Person(
    "Charlie",
    22,
    "Chicago",
    ["gaming", "swimming", "cycling"],
    true // bilingual
);

const dana = new Person(
    "Dana",
    35,
    "Miami",
    ["yoga", "cooking"],
    false // not bilingual
);

const elijah = new Person(
    "Elijah",
    28,
    "San Francisco",
    [],
    true // bilingual, no hobbies yet
);

// --- Examples of using methods ---
console.log(alice.introduce()); // bilingual intro
console.log(bob.introduce());   // normal intro

console.log(charlie.happyBirthday()); // age increases by 1
console.log(dana.addHobby("painting")); // adds hobby to Dana
console.log(elijah.addHobby("coding")); // adds first hobby

console.log(charlie.removeHobby("cycling")); // removes a hobby
console.log(dana.removeHobby("surfing"));    // hobby not in list

console.log(Person.personList());           // see all 5 people
console.log(Person.personFind("Alice"));    // returns array with Alice
console.log(Person.personFind("Zoe"));      // returns empty array

