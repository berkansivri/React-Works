//
// OBJECT DESCTRUCTURING
//

const person = {
  // name: "Berkan",
  age: 25,
  location: {
    city: "Istanbul",
    temp: 34
  }
}

const { name: defaultName = "Anonymous", age } = person;  // create variable with object properties
// name default

// const name = person.name
// const age = person.age

console.log(`${defaultName} is ${age}.`);

const { city, temp: temperature } = person.location;  //rename field
if(city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}


const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
}

const { name: publisherName = "Self-Published" } = book.publisher

console.log("Publisher Name: " + publisherName);


//
// ARRAY DESCTRUCTURING
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennysylvania', '19147'];
const [, city2, state = 'New York'] = address;      // ',' for skip indexes. = '' is for default decleration.

console.log(`You are in ${city2}, ${state}`);

const item = ['coffee (hot)', '$2,00', '$2,50', '$2,75'];
const [product, , mediumPrice] = item;

console.log(`A medium ${product} costs ${mediumPrice}`);
