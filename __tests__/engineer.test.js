const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  const mockEngineer = {
    name: "Bob",
    id: 789,
    email: "bob@topgun.com",
    role: "Engineer",
    github: "www.github.com/bob", //
  };

  describe("constructor tests", () => {
    test("should counstuct a new instance of the engineer class", () => {
      const engineer = new Engineer(mockEngineer);
      expect(engineer).toBeInstanceOf(Engineer);
    });

    test("should construct a new instance of the engineer class with name, id, email and github profile", () => {
      const engineer = new Engineer(
        mockEngineer.name,
        mockEngineer.id,
        mockEngineer.email,
        mockEngineer.github
      );
      expect(engineer).toEqual({
        name: "Bob",
        id: 789,
        email: "bob@topgun.com",
        role: "Engineer",
        github: "www.github.com/bob",
      });
    });
  });

  describe("method tests", () => {
    test("should return name when the getName method is called", () => {
      const engineer = new Engineer(
        mockEngineer.name,
        mockEngineer.id,
        mockEngineer.email,
        mockEngineer.github
      );
      expect(engineer.getName()).toEqual("Bob");
    });

    test("should return id when the getId method is called", () => {
      const engineer = new Engineer(
        mockEngineer.name,
        mockEngineer.id,
        mockEngineer.email,
        mockEngineer.github
      );
      expect(engineer.getId()).toEqual(789);
    });

    test("should return email when the getEmail method is called", () => {
      const engineer = new Engineer(
        mockEngineer.name,
        mockEngineer.id,
        mockEngineer.email,
        mockEngineer.github
      );
      expect(engineer.getEmail()).toEqual("bob@topgun.com");
    });

    test("should return engineer role when the getRole method is called", () => {
      const engineer = new Engineer(
        mockEngineer.name,
        mockEngineer.id,
        mockEngineer.email,
        mockEngineer.github
      );
      expect(engineer.getRole()).toEqual("Engineer");
    });

    test("should return name when the getGitHub method is called", () => {
      const engineer = new Engineer(
        mockEngineer.name,
        mockEngineer.id,
        mockEngineer.email,
        mockEngineer.github
      );
      expect(engineer.getGithub()).toEqual("www.github.com/bob");
    });
  });
});
