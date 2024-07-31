import { Node, Tree, prettyPrint, generateRandomArray } from "./binarySearchTree";

// const array = [10, 5, 20, 3, 7, 15, 30];
// const tree = new Tree(array);
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

// Generate an array of random numbers
const randomArray = generateRandomArray(15);
const tree = new Tree(randomArray);

console.log("Initial tree:");
prettyPrint(tree.root);
console.log('Is the tree balanced?', tree.isBalanced());
printOrders(tree);

const unbalancingValues = [101, 102, 103, 104, 105];
unbalancingValues.forEach(value => tree.insert(value));

console.log("\nTree after unbalancing:");
prettyPrint(tree.root);
console.log('Is the tree balanced?', tree.isBalanced());
printOrders(tree);

tree.rebalance();

console.log("\nTree after rebalancing:");
prettyPrint(tree.root);
console.log('Is the tree balanced?', tree.isBalanced());
printOrders(tree);