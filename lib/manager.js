const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, officeNumber, id, email, title){
        super(name, id, email, title)
        this.officeNumber = officeNumber        
    }
    
    getOfficeNumber() {
        return this.officeNumber
    }
    
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;