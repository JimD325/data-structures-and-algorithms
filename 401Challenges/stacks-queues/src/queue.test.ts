import { Queue } from "./queue";

describe("Queue", () => {
  it("can enqueue", () => {
    const q = new Queue<string>();

    expect(() => q.enqueue("Frodo")).not.toThrow();
  });

  it("enqueues", () => {
    const q = new Queue<string>();

    q.enqueue("Frodo");
    q.enqueue("Sam");

    expect(q.size).toBe(2);
    expect(q.peek).toBe("Frodo");
  });
  it("dequeues", ()=>{
    const q = new Queue<string>();

    q.enqueue("Frodo");
    q.enqueue("Sam");
    q.enqueue("Merry");
    q.dequeue();
    q.dequeue();
    expect(q.size).toBe(1);
  });
  it(" instantiate an empty qeueu", ()=>{
    const q = new Queue<string>();
    expect(q).toBeTruthy();
  });
  it("Throws exception when pop on empty Queue", ()=>{
    const q = new Queue<String>();
    expect(()=> {q.dequeue()}).toThrow();
  });
  it("Throws exception when peek on empty Queue", ()=>{
    const q = new Queue<String>();
    expect(()=> {q.peek}).toThrow();
  });
});