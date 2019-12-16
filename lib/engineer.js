const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, GHUsername, id, email, title) {
        super (name, id, email, title);
        this.GHUsername = GHUsername;

        
    }

    getGHUsername() {
        return this.GHUsername;
    }
    getRole() {
        return "Engineer";
    }
}

 module.exports = Engineer;
