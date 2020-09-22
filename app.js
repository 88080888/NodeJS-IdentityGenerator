const fs = require('fs');
const {gender, maleNames, femaleNames, lastNames} = require('./store');

const randChoice = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (let i=0; i <20; i++) {
  const randGender = randChoice(gender);
  const randFirstName = gender === 'male' ? randChoice(maleNames) : randChoice(femaleNames);
  const randLastName = randChoice(lastNames);
  const randAge = Math.floor(Math.random() * 60) + 18;
  const randEmail = randFirstName.toLowerCase() + '.' + randLastName.toLowerCase() + '@gmail.com'

  const person = {
    randGender,
    randFirstName,
    randLastName,
    randAge,
    randEmail,
  }

  people.push(person);
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});