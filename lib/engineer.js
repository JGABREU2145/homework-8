const Employee = require("./employee");

class Engineer extends Employee {
    constructor(GHUsername,name, id, email, title) {
        this.GHUsername = GHUsername;

        super (name, id, email, title);
    }

    getGHUsername() {
        return this.GHUsername;
    }
    getRole() {
        return "Engineer"
    }
}

 module.exports = Engineer;
