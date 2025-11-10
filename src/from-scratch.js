class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
    this.side4 = side4
  }
  getPerimeter() {
    let sum = this.side1 + this.side2 + this.side3 + this.side4
    return sum
  }

}

class Rectangle extends Quadrilateral {
  constructor(side1, side2) {
    super(side1, side2, side1, side2)
  }
  getArea() {
    let sum = this.side1 * this.side2
    return sum
  }


}

class Square extends Rectangle {
  constructor(side1) {
    super(side1, side1, side1, side1)
  }
  getDiagonal() {
    return Math.sqrt(this.getArea() * 2)
  }
}

/* Be creative with this one! */
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

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
