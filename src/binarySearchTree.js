export class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor([]){
        this.root = buildTree();
    }

    buildTree(){
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
            } else {// data === value
                return;
            }
        } 
    }  

    deleteItem(root, value){
        // Base case
        if (root === null){
            return root;
        }

        // If the key to be deleted is smaller than the root's key, then it lies in the left subtree
        if (value < root.value){
            root.left = this.deleteItem(root.left, value);
        } else if (value > root.value){
            root.right = this.deleteItem(root.right, value);
        } else { // If key is same as root's key, then this is the node to be deleted
            // Node with only one child or no child
            if (root.left === null){
                return root.right;
            } else if (root.right === null){
                return root.left;
            }

            // Node with two children: Get the inorder successor (smallest in the right subtree)
            root.value = this.minValue(root.right);

            //Delete the inorder successor
            root.right = this.deleteItem(root.right, root.value);
        }
        return root; 
    }

    minValue(node){
        let minVal = node.value;
        while(node.left !== null){
            minv = node.left.value;
            node = node.left;
        }
        return minVal;
    }

    find(value){
        let current = this.root;
        while(current){
            if(current.data < value){
                current = current.left;
            } else if (current.data > value){
                current = current.right;
            } else {// data === value
                return current;//return the node itself
            }
        } 
        return null;
    }
}

//code from TOP
const prettyPrint = (node, prefix = "", isLeft = true) => {
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