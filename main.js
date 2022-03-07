// Your code here.

function getFirstName(obj){
  return obj.firstName;
}

function getLastName(obj){
  return obj.lastName;
}

function getFullName(obj){
  return obj.fullName; 
}

function setFirstName(person, newFirstName){
  return person.firstName = newFirstName;
}

function setAge (person, age){
  return person.firstName = age;
}

function marry(person1, person2){
  person1.married = true;
  person2.married = true;

  person1.spouseName = getFullName(person2);
  person2.spouseName = getFullName(person1);
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
