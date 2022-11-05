

export const leftJoin = <K,V>(leftTable: Map<K,V>, rightTable: Map<K,V>): any[] => {
  let newData:any[] = [];
  leftTable.forEach((value,key) => {
    if(rightTable.has(key)) {
      newData.push([key, leftTable.get(key), rightTable.get(key)]);
    } else {
      newData.push([key, leftTable.get(key), null])
    }
  })

  return newData
}