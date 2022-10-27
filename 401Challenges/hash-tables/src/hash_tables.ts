export class Node<V> {
   key: string;
   value: V;
   next: Node<V> | undefined;

  constructor(value: V, key:string){
    this.next = undefined;
    this.key = key;
    this.value = value; 
  }
}
export class LinkedList<K,V> {
  node: Node<V> | undefined

  /**
   * Arguements are a key of type string and value of type V, creates a new node and inludes it on the linked list
   */
  insert(key: string, value: V): void {
    const newNode: Node<V> = {
      key: key,
      value: value,
      next: this.node
    }; 
    this.node = newNode;
  }

  // find(key:string): any {
  //   let holder = this.node;
  //   while(holder){
  //     if(holder.key === key){
  //       return holder.value;
  //       holder = holde
  //     }
  //   }
  // }
}

 
export class HashTable<V> {

  data: Array<LinkedList<string, V>>;
  constructor(readonly capacity: number) {
    this.data = new Array(this.capacity);
  }
/**
 * 
 * takes key as an argument and returns value associated with key in the table. 
 */
  get(key: string): any{

    let index = this.hash(key);
    let value = this.data[index];
    console.log("this.data on get --->", this.data)
    if(!value){
      console.log(value)
      throw new Error("the error has been thrown");
    }
    let tracker = value?.node;
    while(tracker){
      if(tracker.key === key) return tracker.value;
      tracker = tracker.next;
    }
    throw new Error()

  }

  set(key: string, value: any): void {

    let index:number = this.hash(key);

    let val = this.data[index]
    let found = false;
    if(!val){
     this.data[index] = new LinkedList();
    }
    let tracker = val?.node
    while(tracker) {
      if(tracker.key === key){
        tracker.value = value;
        found = true;
      }
      tracker=tracker.next
    } 
    if(!found){
      this.data[index].insert(key,value);
    }
  }

/**
 * 
 * Accepts a key as an arguement and returns and returns boolean indiciating if it is already in the table
 */

  has(key: string): boolean {
      let index = this.hash(key);
      if(!this.data[index]){
        return false;
      }
      let tracker = this.data[index].node;
      console.log("tracker on has ---->", tracker);
      while (tracker!== undefined){
        if(key=== tracker.key){
          return true
        }
        tracker = tracker.next
      }
      return false;
  }
/**
 * returns an array with a collection of all the keys. 
 */
  keys(): string[] {
    let holderArr:string[] = []
    for(const LL of this.data) {
      let tracker = LL.node;
      while (tracker) {
        if(tracker.key){
          holderArr.push(tracker.key)
        }
        tracker = tracker.next;
      }
    }
    return holderArr;
  }

/**
 * takes a key of type string, hashes it, and returns a number corresponding to its index in the hash table. 
 */

  hash(key: string): number {
      const sum = key.split("").map(char => char.charCodeAt(0)).reduce((a,b)=> a+b);
    return sum%this.capacity;
  }

}

