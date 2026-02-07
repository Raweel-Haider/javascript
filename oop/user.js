class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return this.username.toUpperCase();
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// Behind the scenes (what JavaScript actually does)

// JavaScript does NOT have real classes like Java or C++.
// Classes are just syntactic sugar over prototype-based inheritance.

// The above class is internally equivalent to 👇

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };

// User.prototype.changeUsername = function () {
//   return this.username.toUpperCase();
// };

// const chai1 = new User("chai1", "chai@gmail.com", "123");
