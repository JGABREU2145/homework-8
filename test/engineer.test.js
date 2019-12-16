const Engineer = require("../lib/engineer.js")

describe("engineer class", () => {
    describe("getGHUsername method", () => {
      it("diplay role", () => {
        const engineer = new Engineer("John Smith","JSMITHGH", "001", "j.smith@email.com", "Janitor");
        var github = engineer.getGHUsername();
               
        expect(github).toBe("JSMITHGH");
      });

    })
})