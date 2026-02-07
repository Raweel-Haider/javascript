class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`User: ${this.username}`);
    }

    static createId(){
        return Math.random().toString(36).substr(2, 9);
    }
}

const raweel = new User('Raweel');
console.log(raweel.createId());