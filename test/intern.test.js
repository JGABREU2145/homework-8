const Intern = require("../lib/intern.js")

describe("gets the school that the user erntered from the prompt", () => {
    describe("getSchool method", () => {
      it("diplay role", () => {
        const intern = new Intern("John Smith","SchoolUniversity", "002", "j.smith@email.com", "Intern");
        var school = intern.getSchool();
               
        expect(school).toBe("SchoolUniversity");
      });

    })
})