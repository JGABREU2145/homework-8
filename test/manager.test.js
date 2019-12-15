const Manager = require("../lib/manager.js")

describe("manager class", () => {
    describe("getRole method", () => {
      it("diplays role", () => {
        const manager = new Manager("John Smith", "001", "j.smith@email.com", "Manager");
        var role = manager.getRole();
               
        expect(role).toBe("Manager");
      });

    })
})