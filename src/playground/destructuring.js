// // 
// // Object Destructuring
// // 

// const person = {
//   name: 'Lily',
//   age: 27,
//   location: {
//     city: 'Solon',
//     temp: 69
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published








const address = [];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, , mediumSize] = item;
console.log(`A medium Coffee (hot) costs $2.50`);
console.log(`A medium ${drink} costs ${mediumSize}`);
