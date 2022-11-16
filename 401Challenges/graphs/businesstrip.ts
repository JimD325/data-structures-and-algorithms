export {};

import {Node, Graph, Edge } from "./graphs"

const BusinessGraph = new Graph<string, number>();
const pandora = BusinessGraph.addNode("Pandora");
const arendelle = BusinessGraph.addNode("Arendelle");
const metroville = BusinessGraph.addNode("Metroville");
const monstropolis = BusinessGraph.addNode("Monstropolis");
const narnia = BusinessGraph.addNode("Narnia");
const naboo = BusinessGraph.addNode("Naboo");

BusinessGraph.addEdge(pandora, arendelle, 150);
BusinessGraph.addEdge(arendelle, metroville, 99);
BusinessGraph.addEdge(arendelle, monstropolis, 42);
BusinessGraph.addEdge(metroville, monstropolis, 105);
BusinessGraph.addEdge(metroville, naboo, 26);
BusinessGraph.addEdge(metroville, narnia, 37);
BusinessGraph.addEdge(monstropolis, naboo, 73);
BusinessGraph.addEdge(narnia, naboo, 250);
// Bi-directional edges
BusinessGraph.addEdge(arendelle, pandora, 150);
BusinessGraph.addEdge(metroville, arendelle, 99);
BusinessGraph.addEdge(monstropolis, arendelle, 42);
BusinessGraph.addEdge(monstropolis, metroville, 105);
BusinessGraph.addEdge(naboo, metroville, 26);
BusinessGraph.addEdge(narnia, metroville, 37);
BusinessGraph.addEdge(naboo, monstropolis, 73);
BusinessGraph.addEdge(naboo, narnia, 250);

export const businessTrip = (graph:any,nodeArray:Node<string,number>[]) => {
  let cost:number = 0;
  if (nodeArray.length < 2) return null
  while ()
  for(let i = 0; i < nodeArray.length; i++){
    let set = graph.neighbors(nodeArray[i])
    if(set.has(nodeArray[i+1])){
      cost = cost+nodeArray[i].edges[0].value
      console.log("cost", cost);
    }
  }
}

export const DavesBusinessTrip = (graph: Graph<string,number>, tripQueue: Node<string, number>[]): number | null=> {
  let cost = 0;
  let currentCity = tripQueue.shift()!;
  while(tripQueue.length > 0) {
    let neighbors = BusinessGraph.neighbors(currentCity);
    let next = tripQueue.shift()!; 

    if(!neighbors.has(next)){
      return null
    }

    cost += currentCity.edges.find((edge: Edge<string,number>) => edge.nodes[1] === next)!.value
    currentCity = next; // advance the pointer
    continue;
  }


  return cost
}

test('businessTrip', () => {
  expect(DavesBusinessTrip(BusinessGraph, [metroville, pandora])).toBe(82)
})