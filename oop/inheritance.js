class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`User: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, subject){
        super(username);
        this.subject = subject;
    }
    logMe(){
        console.log(`Teacher: ${this.username}, Subject: ${this.subject}`);
    }
}

const teacher = new Teacher('John Doe', 'Mathematics');
teacher.logMe();

console.log(teacher instanceof Teacher); // true
console.log(User instanceof Teacher); // false