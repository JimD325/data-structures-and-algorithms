const { Node, BinaryTree } = require("./binary_tree.ts");

class BinarySearchTree extends BinaryTree {
    add(number: number) {
        let newNode = new Node(number, undefined, undefined);
        let counter = this.root;
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        while (counter) {
            if (counter.value === number) { // deals with duplicates and returns undefined
                return undefined;
            };
            if (counter.value < number) { // if number is greater and there is a right, move to the right, if there is no right, create a new right.
                if (counter.right === undefined) {
                    counter.right = newNode;
                    return this;
                }
                counter = counter.right;
            }
            if (counter.value > number) {
                if (counter.left === undefined) {
                    counter.left = newNode;
                    return this;
                }
                counter = counter.left;
            }
        }
    }
    contains(number: number) {
        let counter = this.root;
        console.log(counter);
        if(counter === undefined) return false;
        while(true){
            if(counter?.value===number) return true;
            if(counter?.value < number){
                counter=counter.right;
            }
            else if(counter?.value > number){
                counter=counter.left;
            }else return false;
        }
    }
}

module.exports = { BinarySearchTree };
export { };