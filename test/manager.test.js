const Manager = require("../lib/manager.js")

describe("Method that gets the office number for the manager", () => {
    describe("getOfficeNumber method", () => {
      it("diplays role", () => {
        const manager = new Manager("John Smith", "001", "j.smith@email.com", "Manager", "01");
        var officeNumber = manager.getOfficeNumber();
               
        expect(officeNumber).toBe("01");
      });

    })
});

describe("Method that should display the role of Manager", () => {
    describe("getRole method", () => {
      it("diplay role", () => {
        const manager = new Manager("John Smith", "001", "j.smith@email.com", "Manager");
        var role = manager.getRole();
               
        expect(role).toBe("Manager");
      });

    })
})