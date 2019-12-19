const Engineer = require("../lib/engineer.js")

describe("engineer class github username test", () => {
    describe("getGHUsername method", () => {
      it("diplay hithub username", () => {
        const engineer = new Engineer("John Smith", "001", "j.smith@email.com", "Engineer", "JSMITHGH");
        var github = engineer.getGHUsername();
               
        expect(github).toBe("JSMITHGH");
      });

    })
});

describe("engineer class role", () => {
    describe("getRole method", () => {
      it("diplay role", () => {
        const engineer = new Engineer("John Smith","JSMITHGH", "001", "j.smith@email.com", "Engineer");
        var role = engineer.getRole();
               
        expect(role).toBe("Engineer");
      });

    })
})