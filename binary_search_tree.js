const createNode = (value = null, leftChild = null, rightChild = null) => {
  return { value, leftChild, rightChild };
};

const createBinaryTree = (initList = []) => {
  let root;

  buildTree(initList);

  function buildTree(list) {
    list.sort(function (a, b) {
      return a - b;
    });

    root = helpBuildTree(list);
  }

  function helpBuildTree(list) {
    if (list.length === 0) {
      return null;
    } else if (list.length === 1) {
      return createNode(list[0], null, null);
    }
    let middleIdx = Math.floor(list.length / 2);
    let rightList = list.slice(middleIdx + 1);
    let leftList = list.slice(0, middleIdx);
    if (rightList.length === 0 || leftList.length === 0) {
    }

    return createNode(
      list[middleIdx],
      helpBuildTree(leftList),
      helpBuildTree(rightList)
    );
  }

  function toString() {
    return nodeToString(root);
  }

  function nodeToString(node) {
    if (node === null) {
      return "";
    }
    let str = node.value;
    str =
      nodeToString(node.leftChild) +
      "<" +
      str +
      ">" +
      nodeToString(node.rightChild);

    return str;
  }

  return { root, toString };
};

let testTree = createBinaryTree([2, 1, 5, 90, 20, 57, 88, 42, 58, 99, 22]);

console.log(testTree.toString());
