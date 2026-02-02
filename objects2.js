// Using Object Constructor Notation. singleton object
// Creating an empty object
// const tinderuser = new Object();
// tinderuser.name = "John Doe";
// tinderuser.age = 28;
// tinderuser.location = "New York";
// tinderuser.interests = ["hiking", "traveling", "music"];
// tinderuser.isPremiumMember = true;

// console.log(tinderuser);


// Using Object Literal Notation   ////////////////////////////////////////////////////////////////
const tinderuser = {}
tinderuser.name = "Jane Smith";
tinderuser.age = 25;
tinderuser.location = "Los Angeles";
tinderuser.interests = ["art", "cooking", "yoga"];
tinderuser.isPremiumMember = false;
// console.log(tinderuser);


//Regular user ////////////////////////////////////////////////////////////////////////////

// const regularUser = {
//     email: "r@gmail.com",
//     fullname: {
//         userFirstName: "John",
//         userLastName: "Doe"
//     },
// };

// console.log(regularUser.fullname?.userFirstName); // Accessing nested object property



// concat objects////////////////////////////////////////////////////////////////

// const obj1 = {1:"a", 2:"b"};
// const obj2 = {3:"c", 4:"d"};

// // const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = {...obj1, ...obj2};

// console.log(obj3);


// data from database //////////////////////////////////////////////////////////////

const databaseUser = [
    {
        id: 1,
        email: "g@gmail.com"
    },
    {
        id: 2,
        email: "g@gmail.com"
    },
    {
        id: 3,
        email: "g@gmail.com"
    },
]


console.log(tinderuser)

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('location'))