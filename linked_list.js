const createLinkedList = () => {
  head = null;

  function append(obj) {
    if (head === null) {
      head = createNode(obj);
      return;
    }
    let currentNode = head;
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = createNode(obj);
  }

  function prepend(obj) {
    let prependedNode = createNode(obj, head);
    head = prependedNode;
  }

  function size() {
    if (head === null) {
      return 0;
    }
    let size = 1;
    let currentNode = head;
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
      size++;
    }
    return size;
  }

  function tail() {
    if (head === null) {
      return null;
    }
    let currentNode = head;
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode.value;
  }

  function at(idx) {
    if (head === null) {
      return null;
    }
    let currentNode = head;
    let count = 0;
    while (currentNode.nextNode != null && count < idx) {
      currentNode = currentNode.nextNode;
      count++;
    }
    if (count != idx) {
      return null;
    }
    return currentNode.value;
  }

  function pop() {
    if (head === null) {
      return null;
    }
    let prevNode = null;
    let currentNode = head;
    while (currentNode.nextNode != null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    if (prevNode === null) {
      let returnValue = head.value;
      head = null;
      return returnValue;
    }
    prevNode.nextNode = null;
    let value = currentNode.value;
    currentNode = null;
    return value;
  }

  function contains(value) {
    if (head === null) {
      return false;
    }
    let currentNode = head;
    while (currentNode.nextNode != null && currentNode.value != value) {
      currentNode = currentNode.nextNode;
    }
    return currentNode.value === value;
  }

  function find(value) {
    if (head === null) {
      return -1;
    }
    let currentNode = head;
    let index = 0;
    while (currentNode.nextNode != null && currentNode.value != value) {
      currentNode = currentNode.nextNode;
      index++;
    }
    if (currentNode.value === value) {
      return index;
    }
    return -1;
  }

  function toString() {
    if (head === null) {
      return "null";
    }
    let str = "";
    let currentNode = head;
    while (currentNode != null) {
      str += "( " + currentNode.value.toString() + " ) -> ";
      currentNode = currentNode.nextNode;
    }
    str += "null";
    return str;
  }

  return {
    head,
    append,
    prepend,
    size,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

const createNode = (value = null, nextNode = null) => {
  return { value, nextNode };
};

module.exports = {
  createLinkedList,
  createNode,
};
