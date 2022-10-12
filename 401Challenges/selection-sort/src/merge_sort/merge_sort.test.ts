const {mergeSort} = require('./merge_sort.ts')

xdescribe("mergeSort", ()=>{
  const A = [8,4,23,42,16,15];
  const B = [];
  const C = [1];

  it("sorts the array", ()=>{
    expect(mergeSort(A)).toEqual([4,8,15,16,23,42]);
    expect(mergeSort(B)).toEqual([]);
    expect(mergeSort(C)).toEqual([1]);
  })
})