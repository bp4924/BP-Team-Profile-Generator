const Employee = require("../lib/employee.js");

let mockEmployee;

describe("Employee", () => {
  mockEmployee = {
    name: "Maverick",
    id: 456,
    email: "Tom@topgun.com",
    role: "Employee",
  };

  describe("constructor tests", () => {
    test("should construct a new instance of employee class", () => {
      const employee = new Employee(mockEmployee);
      expect(employee).toBeInstanceOf(Employee);
    });
  });
});

test("should construct a new instance of employee class with name, id, email, and role", () => {
  const employee = new Employee(
    mockEmployee.name,
    mockEmployee.id,
    mockEmployee.email
  );
  expect(employee).toEqual({
    name: "Maverick",
    id: 456,
    email: "Tom@topgun.com",
    role: "Employee",
  });
});

describe("method tests", () => {
  test("should return name when the getName method is called", () => {
    const employee = new Employee(
      mockEmployee.name,
      mockEmployee.id,
      mockEmployee.email
    );
    expect(employee.getName()).toEqual("Maverick");
  });

  test("should return id when the getId method is called", () => {
    const employee = new Employee(
      mockEmployee.name,
      mockEmployee.id,
      mockEmployee.email
    );
    expect(employee.getId()).toEqual(456);
  });

  test("should return email when the getEmail method is called", () => {
    const employee = new Employee(
      mockEmployee.name,
      mockEmployee.id,
      mockEmployee.email
    );
    expect(employee.getEmail()).toEqual("Tom@topgun.com");
  });
});
