const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, role, GHUsername,) {
        super (name, id, email, role);
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
