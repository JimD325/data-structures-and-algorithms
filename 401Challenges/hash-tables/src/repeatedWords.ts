import {HashTable} from "./hash_tables"


export const repeatedWord = (str:string): string | void => {
  var regex = /W+/gm;
  let strArr = str.replace(regex, '').split(" ");
  const table = new HashTable<number>(100);
  for (let i = 0; i < strArr.length;i++){
    if(table.has(strArr[i])){
      return strArr[i]
    }
    table.set(strArr[i], i)
  }
  return undefined;
}