const Engineer = require("../lib/engineer.js")

describe("engineer class", () => {
    describe("getRole method", () => {
      it("diplay role", () => {
        const engineer = new Engineer("John Smith", "001", "j.smith@email.com", "Janitor");
        var role = engineer.getRole();
               
        expect(role).toBe("Engineer");
      });

    })
})