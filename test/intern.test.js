const Intern = require("../lib/intern.js")

describe("intern class", () => {
    describe("getRole method", () => {
      it("diplay role", () => {
        const intern = new Intern("John Smith", "001", "j.smith@email.com", "Janitor");
        var role = intern.getRole();
               
        expect(role).toBe("Intern");
      });

    })
})