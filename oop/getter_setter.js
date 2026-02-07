class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  get username() {
    return this._username.toUpperCase();
  }
    set username(newUsername) {
        this._username = newUsername;
    }
  //return only on getter
    get password(){
        return this._password.toUpperCase();
    }
    set password(newPassword){
        this._password = newPassword;
    }

}

const chai = new User("chai", "chai@gmail.com", "123bbb");
console.log(chai.password); // "123"
console.log(chai.username);