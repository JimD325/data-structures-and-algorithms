import {Node, Graph, Edge } from "./graphs"
interface Airport {
  code: string;
}
interface Route {
  time: number;
}


let graph = new Graph<Airport, Route>();
 let sea:Node<Airport, Route>;
  let ord:Node<Airport, Route>;
describe("graph", () => {
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
  expect(graph.neighbors(sea)).toContain(ord)
})
it("get number of nodes in graph", () => {
  
  expect(graph.size()).toEqual(2)
})
})

// sea.edges.push(seaToOrd10am, seaToOrd12pm);
// ord.edges.push(ordToSea11am);







// sea = graph.addNode({ code: "SEA" });
// ord = graph.addNode({ code: "ORD" });
// graph.addEdge(sea, ord, { time: 1000 });
// graph.addEdge(sea, ord, { time: 1200 });
// graph.addEdge(ord, sea, { time: 1100 });

// @ts-ignore
// expect(graph.neighbors(sea)).toEqual(new Set([ord]));