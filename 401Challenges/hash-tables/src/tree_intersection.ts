
export class BinaryTreeNode<V> {
  constructor(
    public value: V,
    public left?: BinaryTreeNode<V>,
    public right?: BinaryTreeNode<V>,
  ){

  }
  
}

export const preOrder = <V>(node:BinaryTreeNode<V>):V[] => {
  let arr:V[]=[];
  if(node.value=== undefined) return arr
  arr.push(node.value)
  if(node.left){
    let left = preOrder(node.left)
    arr = arr.concat(left);
  }
  if(node.right){
    let right = preOrder(node.right)
    arr = arr.concat(right);
  }
  return arr;
}

export const tree_intersection = <V>(t1:BinaryTreeNode<V>, t2:BinaryTreeNode<V>): V[] => {
  let arr1 = preOrder(t1);
  let arr2 = preOrder(t2);

  let map = new Map();
  for(const item of arr1){
    map.set(item, true)
  }
  const intersection = arr2.filter(val => map.has(val));
  return intersection;
}


