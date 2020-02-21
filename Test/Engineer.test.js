const Engineer = require("../Library/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("john", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("john", 1, "test@test.com", "GitHubUser");
  expect(e.getPosition()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("john", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});