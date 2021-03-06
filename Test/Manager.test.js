const Manager = require("../Library/Manager");
const Employee = require("../Library/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Jack", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Jack", 1, "test@test.com", 100);
  expect(e.getPosition()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Jack", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});