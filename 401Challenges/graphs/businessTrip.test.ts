// import {Node, Graph, Edge } from "./graphs"
// import {businessTrip} from './businesstrip'

// const BusinessGraph = new Graph<string, number>();
// const pandora = BusinessGraph.addNode("Pandora");
// const arendelle = BusinessGraph.addNode("Arendelle");
// const metroville = BusinessGraph.addNode("Metroville");
// const monstropolis = BusinessGraph.addNode("Monstropolis");
// const narnia = BusinessGraph.addNode("Narnia");
// const naboo = BusinessGraph.addNode("Naboo");

// BusinessGraph.addEdge(pandora, arendelle, 150);
// BusinessGraph.addEdge(arendelle, metroville, 99);
// BusinessGraph.addEdge(arendelle, monstropolis, 42);
// BusinessGraph.addEdge(metroville, monstropolis, 105);
// BusinessGraph.addEdge(metroville, naboo, 26);
// BusinessGraph.addEdge(metroville, narnia, 37);
// BusinessGraph.addEdge(monstropolis, naboo, 73);
// BusinessGraph.addEdge(narnia, naboo, 250);
// // Bi-directional edges
// BusinessGraph.addEdge(arendelle, pandora, 150);
// BusinessGraph.addEdge(metroville, arendelle, 99);
// BusinessGraph.addEdge(monstropolis, arendelle, 42);
// BusinessGraph.addEdge(monstropolis, metroville, 105);
// BusinessGraph.addEdge(naboo, metroville, 26);
// BusinessGraph.addEdge(narnia, metroville, 37);
// BusinessGraph.addEdge(naboo, monstropolis, 73);
// BusinessGraph.addEdge(naboo, narnia, 250);


// xdescribe("businessGraph", () => {
//   xit("was created Correctely", () => {
//     console.log(BusinessGraph)
//   })
//   xit("returns null on small array", () => {
//     expect(businessTrip(BusinessGraph,[])).toBe(null)
//     expect(businessTrip(BusinessGraph,[pandora])).toBe(null)
//     // expect(businessTrip(BusinessGraph,[pandora, arendelle])).toBe(truthy);
//     console.log(businessTrip(BusinessGraph,[pandora, arendelle]))
//     console.log("BusinessGraph.neighbors(pandora))", BusinessGraph.neighbors(pandora))
//   })
//   xit("returns a cost when nodes entered are viable", () => {

//   })
// })