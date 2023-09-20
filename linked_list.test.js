const Ll = require("./linked_list");

test("append", () => {
  let testList = Ll.createLinkedList();
  testList.append("John");
  testList.append("Tessa");
  testList.append("Beeb");
  expect(testList.toString()).toBe("( John ) -> ( Tessa ) -> ( Beeb ) -> null");
});

test("prepend", () => {
  let testList = Ll.createLinkedList();
  testList.prepend("John");
  testList.prepend("Tessa");
  testList.prepend("Beeb");
  expect(testList.toString()).toBe("( Beeb ) -> ( Tessa ) -> ( John ) -> null");
});

test("size", () => {
  let testList = Ll.createLinkedList();
  testList.append("John");
  testList.append("Tessa");
  testList.append("Beeb");
  expect(testList.size()).toBe(3);
});

test("tail", () => {
  let testList = Ll.createLinkedList();
  testList.append("John");
  testList.append("Tessa");
  testList.append("Beeb");
  expect(testList.tail()).toBe("Beeb");
});

test("at", () => {
  let testList = Ll.createLinkedList();
  testList.append("John");
  testList.append("Tessa");
  testList.append("Beeb");
  expect(testList.at(0)).toBe("John");
  expect(testList.at(1)).toBe("Tessa");
  expect(testList.at(2)).toBe("Beeb");
  expect(testList.at(3)).toBe(null);
});

test("pop", () => {
  let testList = Ll.createLinkedList();
  testList.append("John");
  testList.append("Tessa");
  testList.append("Beeb");
  expect(testList.pop()).toBe("Beeb");
  expect(testList.pop()).toBe("Tessa");
  expect(testList.pop()).toBe("John");
  expect(testList.pop()).toBe(null);
});

test("contains", () => {
  let testList = Ll.createLinkedList();
  testList.append("John");
  testList.append("Tessa");
  testList.append("Beeb");
  expect(testList.contains("Beeb")).toBe(true);
  expect(testList.contains("Tessa")).toBe(true);
  expect(testList.contains("John")).toBe(true);
  expect(testList.contains(null)).toBe(false);
  expect(testList.contains("Nat")).toBe(false);
});

test("find", () => {
  let testList = Ll.createLinkedList();
  testList.append("John");
  testList.append("Tessa");
  testList.append("Beeb");
  expect(testList.find("Beeb")).toBe(2);
  expect(testList.find("Tessa")).toBe(1);
  expect(testList.find("John")).toBe(0);
  expect(testList.find(null)).toBe(-1);
  expect(testList.find("Nat")).toBe(-1);
});

/*head,
    append,
    prepend,
    size,
    tail,
    at,
    pop,
    contains,
    find,
    toString,*/
