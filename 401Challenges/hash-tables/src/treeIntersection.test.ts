import { BinaryTreeNode, tree_intersection, preOrder } from "./tree_intersection"

describe("Binary Tree Intersections", () => {
  const tree1 = new BinaryTreeNode(1,
      new BinaryTreeNode(7, new BinaryTreeNode(2), new BinaryTreeNode(6, new BinaryTreeNode(3), new BinaryTreeNode(11))),
      new BinaryTreeNode(9, undefined, new BinaryTreeNode(9, new BinaryTreeNode(5)))
    
  );
  const tree2 = new BinaryTreeNode(1,
      new BinaryTreeNode(7, new BinaryTreeNode(2), new BinaryTreeNode(6, new BinaryTreeNode(3), new BinaryTreeNode(33))),
      new BinaryTreeNode(9, undefined, new BinaryTreeNode(9, new BinaryTreeNode(5)))
    
  );
  const tree3 = new BinaryTreeNode(
     undefined, undefined, undefined 
  );
  it("should turn each tree into an array following preOrder, empty trees should return empty arary", () => {
    expect(preOrder(tree3)).toEqual([]);
    expect(preOrder(tree1)).toEqual([1, 7, 2, 6, 3, 11, 9, 9, 5]);
    expect(preOrder(tree2)).toEqual([1, 7, 2, 6, 3, 33, 9, 9, 5]);
  })
  it("should return an array of all intersections of tree 1 and 2", () => {
    expect(tree_intersection(tree1, tree2)).toEqual([1, 7, 2, 6, 3, 9, 9, 5])
  })
  it("should return an empty array when two trees have no intersections", () => {
    expect(tree_intersection(tree1, tree3)).toEqual([])
  })
})

