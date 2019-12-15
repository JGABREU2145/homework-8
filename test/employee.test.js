const Employee = require("../lib/employee.js")

describe("Employee class", () => {
    describe("getRole method", () => {
      it("diplay role", () => {
        const employee = new Employee("John Smith", "001", "j.smith@email.com", "Janitor");
        var role = employee.getRole();
               
        expect(role).toBe("Employee");
      });

    })
})