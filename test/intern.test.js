const Intern = require("../lib/intern.js")

describe("gets the school that the user erntered from the prompt", () => {
    describe("getSchool method", () => {
      it("diplay role", () => {
        const intern = new Intern("John Smith", "002", "j.smith@email.com", "Intern", "SchoolUniversity");
        var school = intern.getSchool();
               
        expect(school).toBe("SchoolUniversity");
      });

    })
});

describe("intern class", () => {
    describe("getRole method", () => {
      it("diplay role", () => {
        const intern = new Intern("John Smith", "001", "j.smith@email.com", "Intern");
        var role = intern.getRole();
               
        expect(role).toBe("Intern");
      });

    })
})