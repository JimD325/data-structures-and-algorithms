import {Node, Graph, Edge, breadthFirst } from "./graphs"

import {Maze} from './mazeCC'
// import can_solve, {noLockMaze} from './mazeCC'

import {can_solve} from './mazeCC'
// const can_solve = require('./mazeCC')
interface Airport {
  code: string;
}
interface Route {
  time: number;
}



let graph = new Graph<Airport, Route>();
  let sea:Node<Airport, Route>;
  let ord:Node<Airport, Route>;
  let nyc:Node<Airport, Route>;
  let mia:Node<Airport, Route>;







xdescribe("graph", () => {
 it("can add to the graph and can return the added node", () => {
    ord = graph.addNode({ code: "ORD"});
    expect(ord).toEqual({
      value: { code: "ORD"},
      edges: []
    })
    sea = graph.addNode({ code: "SEA"});
    expect(sea).toEqual({
      value: { code: "SEA"},
      edges: []
    })
    expect(graph.nodes).toEqual(
      [
       {
        value: { code: "ORD"},
        edges: []
      } ,
      {
        value: { code: "SEA"},
        edges: []
      }
      ]
      
    )
 })
 it("can add edges", () => {
  graph.addEdge(sea, ord, { time: 1000 });
    graph.addEdge(sea, ord, { time: 1200 });
    graph.addEdge(ord, sea, { time: 1100 });
    expect(sea.edges).toHaveLength(3);
    
})
it("can get all nodes", () => {
  let nodes = graph.getNodes();
  expect(nodes).toContain(ord);
  expect(nodes).toContain(sea);
})
it("can get neighbors", () => {
  console.log("graph.neighbors(sea)",graph.neighbors(sea))
  expect(graph.neighbors(sea)).toContain(ord)
})
it("get number of nodes in graph", () => {
  
  expect(graph.size()).toEqual(2)
})

it('can conduct a breadth first traversal', () => {
    nyc = graph.addNode({code: "NYC"});
    mia = graph.addNode({code: "MIA"});
    graph.addEdge(ord, mia, {time:2000});
    graph.addEdge(mia, nyc, {time: 1400});
    graph.addEdge(nyc, ord, {time:900})
    expect(breadthFirst(graph,sea)).toEqual([sea.value, ord.value, mia.value, nyc.value])
})
})


let noLockMaze = new Maze ();
let locklessStart = noLockMaze.addNode({
  hasGold: false,
  hasKey: false,
  roomNumber: 1
})
let locklessTwo = noLockMaze.addNode({
  hasGold: false,
  hasKey: false,
  roomNumber: 2
})
let locklessThree = noLockMaze.addNode({
  hasGold: true,
  hasKey: false,
  roomNumber: 3
})
let locklessFour = noLockMaze.addNode({
  hasGold: false,
  hasKey: false,
  roomNumber: 4
})
noLockMaze.createStart(locklessStart)
noLockMaze.addBiEdge(locklessStart,locklessTwo, {isLocked: false})
noLockMaze.addBiEdge(locklessStart,locklessFour,{isLocked: false})
noLockMaze.addBiEdge(locklessTwo,locklessThree,{isLocked: false})

let trueLockMaze = new Maze ();
let trueLockStart = noLockMaze.addNode({
  hasGold: false,
  hasKey: false,
  roomNumber: 1
})
let trueLockTwo = noLockMaze.addNode({
  hasGold: false,
  hasKey: false,
  roomNumber: 2
})
let trueLockThree = noLockMaze.addNode({
  hasGold: true,
  hasKey: false,
  roomNumber: 3
})
let trueLockFour = noLockMaze.addNode({
  hasGold: false,
  hasKey: true,
  roomNumber: 4
})
trueLockMaze.createStart(trueLockStart)
trueLockMaze.addBiEdge(trueLockStart,trueLockTwo, {isLocked: false})
trueLockMaze.addBiEdge(trueLockStart,trueLockFour,{isLocked: false})
trueLockMaze.addBiEdge(trueLockTwo,trueLockThree,{isLocked: true})


let falseLockMaze = new Maze ();
let falseLockStart = noLockMaze.addNode({
  hasGold: false,
  hasKey: false,
  roomNumber: 1
})
let falseLockTwo = noLockMaze.addNode({
  hasGold: false,
  hasKey: true,
  roomNumber: 2
})
let falseLockThree = noLockMaze.addNode({
  hasGold: true,
  hasKey: false,
  roomNumber: 3
})
let falseLockFour = noLockMaze.addNode({
  hasGold: false,
  hasKey: false,
  roomNumber: 4
})
falseLockMaze.createStart(falseLockStart)
falseLockMaze.addBiEdge(falseLockStart,falseLockTwo, {isLocked: true})
falseLockMaze.addBiEdge(falseLockStart,falseLockFour,{isLocked: false})
falseLockMaze.addBiEdge(falseLockTwo,falseLockThree,{isLocked: false})

describe("can_solve", () => {
  it ("will return true with no locked doors", () => {
    console.log("no lock maze in text", noLockMaze);
    expect(can_solve(noLockMaze)).toBe(true);
  })
  
  it ("will return true with locked doors, but solveable", () => {
    expect(can_solve(trueLockMaze)).toBe(true);
  })
  
  it ("will return false when not solveable", () => {
    expect(can_solve(falseLockMaze)).toBe(false);
  })
})


