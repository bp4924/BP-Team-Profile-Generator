const Manager = require("../lib/manager.js");

describe("Manager", () => {
  const mockManager = {
    name: "Iceman",
    id: 123,
    email: "ice@topgun.com",
    role: "Manager",
    officeNumber: 123,
  };

  describe("constructor tests", () => {
    mockManager;
    test("should counstuct a new instance of the manager class", () => {
      const manager = new Manager(
        mockManager.name,
        mockManager.id,
        mockManager.email,
        mockManager.officeNumber
      );
      expect(manager).toBeInstanceOf(Manager);
    });

    test("should construct a new instance of the manager class with name, id, email, role and office number", () => {
      const manager = new Manager(
        mockManager.name,
        mockManager.id,
        mockManager.email,
        mockManager.officeNumber
      );
      expect(manager).toEqual({
        name: "Iceman",
        id: 123,
        email: "ice@topgun.com",
        role: "Manager",
        officeNumber: 123,
      });
    });
  });

  describe("method tests", () => {
    test("should return name when the getName method is called", () => {
      const manager = new Manager(
        mockManager.name,
        mockManager.id,
        mockManager.email,
        mockManager.officeNumber
      );
      expect(manager.getName()).toEqual("Iceman");
    });

    test("should return id when the getId method is called", () => {
      const manager = new Manager(
        mockManager.name,
        mockManager.id,
        mockManager.email,
        mockManager.officeNumber
      );
      expect(manager.getId()).toEqual(123);
    });

    test("should return email when the getEmail method is called", () => {
      const manager = new Manager(
        mockManager.name,
        mockManager.id,
        mockManager.email,
        mockManager.officeNumber
      );
      expect(manager.getEmail()).toEqual("ice@topgun.com");
    });

    test("should return manager role when the getRole method is called", () => {
      const manager = new Manager(
        mockManager.name,
        mockManager.id,
        mockManager.email,
        mockManager.officeNumber
      );
      expect(manager.getRole()).toEqual("Manager");
    });

    test("should return office number when the getOfficeNumber method is called", () => {
      const manager = new Manager(
        mockManager.name,
        mockManager.id,
        mockManager.email,
        mockManager.officeNumber
      );
      expect(manager.getOfficeNumber()).toEqual(123);
    });
  });
});
