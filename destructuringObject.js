const course = {
    courseName: "JavaScript Basics",
    price : 999,
    courseInstructor: "John Doe"
}

const {courseName, price, courseInstructor:instructor} = course;

console.log(courseName);
console.log(price);
console.log(instructor);