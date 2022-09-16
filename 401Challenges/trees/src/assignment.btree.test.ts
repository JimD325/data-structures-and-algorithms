const { BinaryTree, Node, breadthFirst, fizzBuzzTree, fizzBuzzNode } = require("./binary_tree.ts");

describe("Binary Tree", () => {
  const tree = new BinaryTree(
    new Node(
      1,
      new Node(7, new Node(2), new Node(6, new Node(3), new Node(11))),
      new Node(9, undefined, new Node(9, new Node(5)))
    )
  );
  const fizzTree = new BinaryTree(
    new Node(
      '1',
      new Node('7', new Node('2'), new Node('Fizz', new Node('Fizz'), new Node('11'))),
      new Node('Fizz', undefined, new Node('Fizz', new Node('Buzz')))
    )
  )
  // 
  //          1
  //        /   \
  //       7     9
  //      / \     \
  //     2   6     9
  //        / \   /
  //       3  11 5
  it("does an in-order traversal as a method on the class (left, root, right)", () => {
    expect(tree.inOrder()).toEqual([2, 7, 3, 6, 11, 1, 9, 5, 9]);
  });


  it("does an post-order traversal (left, right, root)", () => {
    expect(tree.postOrder()).toEqual([2, 3, 11, 6, 7, 5, 9, 9, 1]);
  });

  it("does an pre-order traversal (root, left, right)", () => {
    expect(tree.preOrder()).toEqual([1, 7, 2, 6, 3, 11, 9, 9, 5]);
  });

  it("returns the maximum value stored in the tree", () => {
    expect(tree.max()).toEqual(11);
  })
  it("returns a list of all values in the tree, left to right, gen 0 to gen n", () => {
    expect(breadthFirst(tree)).toEqual([1, 7, 9, 2, 6, 9, 3, 11, 5]);
  })
  it('can fizzBuzz a node', () => {
    expect(fizzBuzzNode(new Node(1, undefined, undefined))).toEqual('1');
    expect(fizzBuzzNode(new Node(3, undefined, undefined))).toEqual('Fizz');
    expect(fizzBuzzNode(new Node(5, undefined, undefined))).toEqual('Buzz');
    expect(fizzBuzzNode(new Node(15, undefined, undefined))).toEqual('FizzBuzz');

  })
  it("Can fizz buzz a tree", () => {
    expect(fizzBuzzTree(tree)).toEqual(fizzTree);
  })
});
export { };