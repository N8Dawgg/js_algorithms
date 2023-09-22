const prac = require("./testing_practice.js");

test("capitalizeFirstChar 1", () => {
  expect(prac.capitalizeFirstChar("john")).toBe("John");
});

test("capitalizeFirstChar 2", () => {
  expect(prac.capitalizeFirstChar("jOhn!")).toBe("JOhn!");
});

test("capitalizeFirstChar 3", () => {
  expect(prac.capitalizeFirstChar("BeEb")).toBe("BeEb");
});

test("reverseString 1", () => {
  expect(prac.reverseString("BeEb")).toBe("bEeB");
});

test("reverseString 2", () => {
  expect(prac.reverseString("abcdefg")).toBe("gfedcba");
});
