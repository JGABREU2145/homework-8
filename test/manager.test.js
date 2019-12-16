const Manager = require("../lib/manager.js")

describe("Method that gets the office number for the manager", () => {
    describe("getOfficeNumber method", () => {
      it("diplays role", () => {
        const manager = new Manager("John Smith", "01", "001", "j.smith@email.com", "Manager");
        var officeNumber = manager.getOfficeNumber();
               
        expect(officeNumber).toBe("01");
      });

    })
})