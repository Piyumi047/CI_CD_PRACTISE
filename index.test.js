const { add, greet } = require("./index");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("returns greeting message", () => {
  expect(greet("Piyumi")).toBe("Hello, Piyumi!");
});
