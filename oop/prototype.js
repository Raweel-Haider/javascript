// let heroes = ["Spiderman", "Ironman", "Hulk"];

// let heroPower ={
//     Spiderman: "Web-slinging",
//     Ironman: "High-tech suit",
//     Hulk: "Super strength",

//     getSpiderPower: function(){
//         return `The power of Spiderman is ${this.Spiderman}`;
//     }
// }

// Object.prototype.raweel = function(){
//     console.log(`raweel is present in all objects`)
// }
// Array.prototype.heyraweel = function(){
//     console.log(`Hey raweel!`);
// }

// console.log(heroes.raweel());
// console.log(heroPower.raweel());
// console.log(heroes.heyraweel())
// console.log(heroPower.heyraweel());


//////////////////////////  old syntax ///////////////////////

const User = {
    name: "chai",
  email: "chai@google.com"
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport
};

// // set prototype chain
// Teacher.__proto__ = User;
// Object.setPrototypeOf(TeachingSupport, Teacher);

// // testing
// console.log(TASupport.isAvailable);   // false
// console.log(TASupport.makeVideo);     // true
// console.log(TASupport.name);          // "chai"


//////////////////////////  modern syntax ///////////////////////

// Object.setPrototypeOf(Teacher, User);
// Object.setPrototypeOf(TeachingSupport, Teacher);

// // testing
// console.log(TASupport.isAvailable);   // false
// console.log(TASupport.makeVideo);     // true
// console.log(TASupport.name);          // "chai"

//////////////////////////////////////////////////////////////////

let userName = 'raweel            ';

String.prototype.truelength = function() {
    return this.trim().length;
}

console.log(userName.truelength());