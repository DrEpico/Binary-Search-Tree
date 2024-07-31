import { Node, Tree, prettyPrint } from "./binarySearchTree";

const array = [10, 5, 20, 3, 7, 15, 30];
const tree = new Tree(array);

// console.log(tree.root);

// console.log(prettyPrint(tree.root));

// Function to print elements in different orders
const printOrders = (tree) => {
    const levelOrder = [];
    tree.levelOrder(node => levelOrder.push(node.data));
    console.log("Level-order:", levelOrder.join(", "));

    const preOrder = [];
    tree.preOrder(node => preOrder.push(node.data));
    console.log("Pre-order:", preOrder.join(", "));

    const inOrder = [];
    tree.inOrder(node => inOrder.push(node.data));
    console.log("In-order:", inOrder.join(", "));

    const postOrder = [];
    tree.postOrder(node => postOrder.push(node.data));
    console.log("Post-order:", postOrder.join(", "));
};
