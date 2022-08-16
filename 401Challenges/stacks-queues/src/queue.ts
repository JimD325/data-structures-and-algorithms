export class Queue<T> {
  arr: T[]= [];
    get size(): number {
      return this.arr.length;
    }
  
    get peek(): T | undefined{
      if(this.arr[0]){
        return this.arr[0];
      }else {
        throw new Error;
      }
    }
  
    enqueue(pushed: T): void {
      this.arr.push(pushed);
    }
  
    dequeue(): T | undefined {
      if (this.arr.length){
        return this.arr.pop();
      } else {
        throw new Error;
      }
    }
  }