const {insertSort} = require('./insert_sort.ts')

xdescribe("insertSort", ()=>{
  const A = [8,4,23,42,16,15];

  xit("sorts the array", ()=>{
    expect(insertSort(A)).toEqual([4,8,15,16,23,42]);
  })
})