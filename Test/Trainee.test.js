const Trainee = require("../Library/Trainee");


test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Trainee("Sam", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Trainee\"", () => {
  const testValue = "Trainee";
  const e = new Trainee("Sam", 1, "test@test.com", 100);
  expect(e.getPosition()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Test", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});