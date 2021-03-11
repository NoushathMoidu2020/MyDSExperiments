class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    var newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(currentRootNode, newNode) {
    //less than
    if (newNode.data < currentRootNode.data) {
      if (currentRootNode.left == null) {
        currentRootNode.left = newNode;
      } else {
        this.insertNode(currentRootNode.left, newNode)
      };
    }
    //greater than
    else if (newNode.data > currentRootNode.data) {
      if (currentRootNode.right == null) {
        currentRootNode.right = newNode;
      } else {
        this.insertNode(currentRootNode.right, newNode);
      }
    }

  }
  inorder(currentRootNode) {
    //left root right
    if (currentRootNode != null) {
      this.inorder(currentRootNode.left);
      console.log(currentRootNode.data);
      this.inorder(currentRootNode.right)
    }
  }
  preorder(currentRootNode) {
    //root left right
    if (currentRootNode != null) {
      console.log(currentRootNode.data);
      this.preorder(currentRootNode.left);
      this.preorder(currentRootNode.right)
    }
  }
  postorder(currentRootNode) {
    //left right root
    if (currentRootNode != null) {
      this.postorder(currentRootNode.left);
      this.postorder(currentRootNode.right)
      console.log(currentRootNode.data);
    }
  }
}
var tree = new Tree();
tree.insert(2);
tree.insert(1);
tree.insert(3);
tree.inorder(tree.root);
tree.preorder(tree.root);
tree.postorder(tree.root);
