class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting(){
    return `Hi. ${this.name} (${this.age})`
  } 
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getGreeting(){
    let greeting = super.getGreeting()
    if(this.hasMajor()) {
      greeting += `. Major is: ${this.major}`
    }
    return greeting
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.home = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()
    if(this.home) {
      greeting += `. Home: ${this.home}`
    }
    return greeting
  }
}

const me = new Traveler("Berkan Sivri", 25, 'Turkey')
console.log(me.getGreeting())

const other = new Traveler(undefined, undefined, "Nowhere")
console.log(other.getGreeting())