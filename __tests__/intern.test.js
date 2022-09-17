const Intern = require("../lib/intern.js");

describe("Intern", () => {
  const mockIntern = {
    name: "Bob",
    id: 789,
    email: "bob@topgun.com",
    role: "Intern",
    school: "Auburn",
  };

  describe("constructor tests", () => {
    test("should counstuct a new instance of the intern class", () => {
      const intern = new Intern(
        mockIntern.name,
        mockIntern.id,
        mockIntern.email,
        mockIntern.school
      );
      expect(intern).toBeInstanceOf(Intern);
    });

    test("should construct a new instance of the intern class with name, id, email and github profile", () => {
      const intern = new Intern(
        mockIntern.name,
        mockIntern.id,
        mockIntern.email,
        mockIntern.school
      );
      expect(intern).toEqual({
        name: "Bob",
        id: 789,
        email: "bob@topgun.com",
        role: "Intern",
        school: "Auburn",
      });
    });
  });

  describe("method tests", () => {
    test("should return name when the getName method is called", () => {
      const intern = new Intern(
        mockIntern.name,
        mockIntern.id,
        mockIntern.email,
        mockIntern.school
      );
      expect(intern.getName()).toEqual("Bob");
    });

    test("should return id when the getId method is called", () => {
      const intern = new Intern(
        mockIntern.name,
        mockIntern.id,
        mockIntern.email,
        mockIntern.school
      );
      expect(intern.getId()).toEqual(789);
    });

    test("should return email when the getEmail method is called", () => {
      const intern = new Intern(
        mockIntern.name,
        mockIntern.id,
        mockIntern.email,
        mockIntern.school
      );
      expect(intern.getEmail()).toEqual("bob@topgun.com");
    });

    test("should return intern role when the getRole method is called", () => {
      const intern = new Intern(
        mockIntern.name,
        mockIntern.id,
        mockIntern.email,
        mockIntern.school
      );
      expect(intern.getRole()).toEqual("Intern");
    });

    test("should return name when the getSchool method is called", () => {
      const intern = new Intern(
        mockIntern.name,
        mockIntern.id,
        mockIntern.email,
        mockIntern.school
      );
      expect(intern.getSchool()).toEqual("Auburn");
    });
  });
});
