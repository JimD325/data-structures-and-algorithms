const A = [8, 4, 23, 42, 16, 15];
// why hello there!
const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  };
  let mid = Math.floor(arr.length / 2);
  let finito = merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid)));
  return finito;
}
/**
 * why hello there!
 *  */
const merge = (left, right): number[] => {
  let i: number = 0;
  let j: number = 0;
  let mergedArr: number[] = [];
  while (left.length > i && right.length > j) {
    if (right[j] > left[i]) {
      mergedArr.push(left[i]);
      i++;
    }
    else {
      mergedArr.push(right[j]);
      j++;
    }
  }
  mergedArr = mergedArr.concat(left.slice(i)).concat(right.slice(j));
  return mergedArr;
}

export { mergeSort };