//singleton
// An object that is instantiated only once

//object literal

const jsUser = {
    name: "John",
    age: 30,
    isAdmin: false,
    email: "example@gmail.com",
    sayHello: function() {
        console.log("Hello!");
    },
    islogin: false,
    lastLoginDays: ["Monday", "Friday", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])

jsUser.email = "raweel@gmail.com"
Object.freeze(jsUser) // to make object immutable
jsUser.email = "haider@gmail.com"

console.log(jsUser)