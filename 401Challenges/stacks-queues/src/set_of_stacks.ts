export class SetOfStacks<T> {
    arr: Stack<T>[] = [];
    // Must use the below Stack class internally.
    // When you need to create a new stack, do so with:
    //
    //    let stack = new Stack<T>(this.maxHeight);
    //
    constructor(private readonly maxHeight: number) {}
  
    push(t: T): void {
        
        if (this.arr.length === 0){ // if the number of stacks in the set is zero, push a new stack
            this.arr.push(new Stack<T>(this.maxHeight));
        }
        let last = this.arr[this.arr.length-1];
        if (last.size >= this.maxHeight){
            last = new Stack<T>(this.maxHeight);
            this.arr.push(last);
        } 
        last.push(t);
    }
  
    pop(): T | undefined {
      let last = this.arr.at(-1);
      if(last){
        let popped = last.pop();
        if(last.size === 0){
            this.arr.pop()
        }
        return popped;
      } else{
        return undefined;
      }
      
    }
  
    get peek(): T | undefined{
        let next = this.arr.at(-1)
        if(next){
           return next.peek; 
        } else {
            return undefined;
        }
      
    }
  
    // BONUS QUESTION
    get size(): number {
      throw new Error("TODO(you)");
    }
  }
  
  export class Stack<T> {
    readonly _arr: T[] = [];
  
    constructor(private readonly maxHeight: number) {}
  
    push(t: T) {
      if (this._arr.length > this.maxHeight) {
        throw new Error("Stack toppled over!");
      }
      this._arr.push(t);
    }
  
    pop() {
      return this._arr.pop();
    }
  
    get peek(): T | undefined {
      return this._arr.at(-1);
    }
  
    get size(): number {
      return this._arr.length;
    }
  }