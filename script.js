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
};

const createNode = (value = null, nextNode = null) => {
  return { value, nextNode };
};
