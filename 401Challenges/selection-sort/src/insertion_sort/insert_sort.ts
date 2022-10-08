const A = [8,4,23,42,16,15];

const insertSort = (arr: number[]) =>{
  for(let i = 1; i < arr.length; i++){
    let j = i-1;
    let temp = arr[i];
     while(j >= 0 && temp < arr[j]){
      arr[j+1]=arr[j];
      j = j-1
     }
    arr[j+1]=temp
  }
  console.log(arr);
  return arr;
}
export {insertSort};