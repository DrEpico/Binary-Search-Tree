export class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(array){
        this.root = this.buildTree(array);
    }

    buildTree(array){
        if (array.length === 0) {
            return null;
        }

        // Sort the array and remove duplicates
        array = [...new Set(array)].sort((a, b) => a - b);

        return this.buildTreeHelper(array, 0, array.length - 1);
    }

    buildTreeHelper(array, start, end) {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const node = new Node(array[mid]);

        node.left = this.buildTreeHelper(array, start, mid - 1);
        node.right = this.buildTreeHelper(array, mid + 1, end);

        return node;
    }

    insert(value){
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        let parent = null;

        while(current){
            parent = current;
            if(value < current.data){
                current = current.left;
                if(!current){
                    parent.left = newNode;
                    return;
                }
            } else if (value > current.data){
                current = current.right;
                if(!current){
                    parent.right = newNode;
                    return;
                }
            } else { // data === value
                return;
            }
        } 
    }

    deleteItem(root, value) {
        if (root === null) {
            return root;
        }

        if (value < root.data) {
            root.left = this.deleteItem(root.left, value);
        } else if (value > root.data) {
            root.right = this.deleteItem(root.right, value);
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            root.data = this.minValue(root.right);

            root.right = this.deleteItem(root.right, root.data);
        }
        return root;
    }

    minValue(node) {
        let minVal = node.data;
        while (node.left !== null) {
            minVal = node.left.data;
            node = node.left;
        }
        return minVal;
    }

    find(value){
        let current = this.root;

        while(current){
            if(value < current.data){
                current = current.left;
            } else if (value > current.data){
                current = current.right;
            } else { // data === value
                return current; // return the node itself
            }
        } 
        return null;
    }

    levelOrder(callback){
        if(typeof callback !== 'function'){
            throw new Error('A callback function is required');
        }

        if (!this.root) {
            return;
        }

        const queue = [this.root];

        while (queue.length > 0) {
            const node = queue.shift();
            callback(node);
            
            if(node.left){
                queue.push(node.left);
            }

            if(node.right){
                queue.push(node.right);
            }
        }
    }

    inOrder(callback) {
        if (typeof callback !== 'function') {
            throw new Error('A callback function is required');
        }

        const inOrderHelper = (node) => {
            if (node === null) {
                return;
            }
            inOrderHelper(node.left);
            callback(node);
            inOrderHelper(node.right);
        };

        inOrderHelper(this.root);
    }

    preOrder(callback) {
        if (typeof callback !== 'function') {
            throw new Error('A callback function is required');
        }

        const preOrderHelper = (node) => {
            if (node === null) {
                return;
            }
            callback(node);
            preOrderHelper(node.left);
            preOrderHelper(node.right);
        };

        preOrderHelper(this.root);
    }

    postOrder(callback) {
        if (typeof callback !== 'function') {
            throw new Error('A callback function is required');
        }

        const postOrderHelper = (node) => {
            if (node === null) {
                return;
            }
            postOrderHelper(node.left);
            postOrderHelper(node.right);
            callback(node);
        };

        postOrderHelper(this.root);
    }

    height(node) {
        if (node === null) {
            return -1; // If the node is null, height is -1
        }

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1; // Height is max of left or right height + 1
    }

}

export const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

// deleteItem(value) {
//     this.root = this.deleteRec(this.root, value);
// }

// deleteRec(root, value) {
//     if (root === null) {
//         return root;
//     }

//     if (value < root.data) {
//         root.left = this.deleteRec(root.left, value);
//     } else if (value > root.data) {
//         root.right = this.deleteRec(root.right, value);
//     } else {
//         // Node to be deleted found
//         if (root.left === null) {
//             return root.right;
//         } else if (root.right === null) {
//             return root.left;
//         }

//         // Node with two children: Get the in-order successor
//         root.data = this.minValue(root.right);
//         root.right = this.deleteRec(root.right, root.data);
//     }

//     return root;
// }