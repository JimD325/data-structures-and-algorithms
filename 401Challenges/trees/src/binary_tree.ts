class Node {
    constructor(public value: number, public left: Node | undefined, public right: Node | undefined) {
    }

    preOrder() {
        // Root, Left, Right
        // Return a single array
        let traversal: any[] = [];
        traversal.push(this.value); // Root
        if (this.left) {
            // Left
            let leftTraversal = this.left.preOrder();
            traversal = traversal.concat(leftTraversal);
        }
        // Right
        if (this.right) {
            let rightTraversal = this.right.preOrder();
            traversal = traversal.concat(rightTraversal);
        }
        return traversal;
    }
    //   Left Root right
    inOrder() {
        let traversal: any[] = [];
        if (this.left) {
            let leftTraversal = this.left.inOrder();
            traversal = traversal.concat(leftTraversal);
        }
        traversal.push(this.value);
        if (this.right) {
            let rightTraversal = this.right.inOrder();
            traversal = traversal.concat(rightTraversal);
        }
        return traversal;
    }
    // left right root
    postOrder() {
        let traversal: any[] | undefined = [];
        if (this.left) {
            let leftTraversal = this.left.postOrder();
            traversal = traversal.concat(leftTraversal);
        }

        if (this.right) {
            let rightTraversal = this.right.postOrder();
            traversal = traversal.concat(rightTraversal);
        }
        traversal.push(this.value);
        return traversal;
    }
    // find max value in the tree
    // todo: use one of the methods above(doesnt matter which) and implement a counter. 
    // input is the node of a tree, output is single number. 
    max(){
        let traversal: any[] = [];
        if (this.left) {
            let leftTraversal = this.left.postOrder();
            traversal = traversal.concat(leftTraversal);
        }

        if (this.right) {
            let rightTraversal = this.right.postOrder();
            traversal = traversal.concat(rightTraversal);
        }
        traversal.push(this.value);
        return Math.max(...traversal);
    }
}

const breadthFirst = (tree: BinaryTree): number[] | undefined => {
    let Q: Node[] = [];
    let arr: number[] = [];
    if(!tree.root){
        return undefined;
    }
    Q.push(tree.root);
    while(Q.length>0){
        let front: any = Q.shift();
        arr.push(front.value);

        if(front.left){
            Q.push(front.left);
        }
        if(front.right){
            Q.push(front.right);
        }
    }
    return arr;
}


class BinaryTree {
    // typing in public gives us access to this.root notation
    constructor(public root: Node | undefined) {
        this.root = root;
    }

    preOrder() {
        return this.root?.preOrder();
        // return preOrder(this.root);
    }
    inOrder() {
        return this.root?.inOrder();
    }

    postOrder() { 
        return this.root?.postOrder();
    }
    max(){
        return this.root?.max();
    }
}

module.exports = { Node, BinaryTree, breadthFirst };
// below tricks Typescript into not being mad about node being in the modules. 
export {};