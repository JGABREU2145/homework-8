const Employee = require("./employee");

class Engineer extends Employee {
    constructor(GHUsername) {
        this.GHUsername = GHUsername;

        super (name, id, this.email)
    }
}