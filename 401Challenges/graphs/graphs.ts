export interface Node<NV, EV> {
  value: NV;
  edges: Edge<NV, EV>[];
}

export interface Edge<NV, EV> {
  value: EV;
  nodes: [Node<NV, EV>, Node<NV, EV>];
}

export class Graph<NV, EV> {
  nodes: Node<NV, EV>[] = [];

  neighbors(node: Node<NV, EV>): Set<Node<NV, EV>> {
    const neighborsWithDupes = node.edges.map((edge) => edge.nodes[1]);
    return new Set(neighborsWithDupes);
  }

  addNode(value: NV): Node<NV, EV> {
    const newNode: Node<NV, EV> = {
      value: value,
      edges: []
    }
    this.nodes.push(newNode);
    return newNode
  }

  addEdge(a: Node<NV, EV>, b: Node<NV, EV>, value: EV): void {
    const newEdge: Edge<NV, EV> = {
      value: value,
      nodes: [a, b]
    }
    a.edges.push(newEdge)
    b.edges.push(newEdge)
  }


  getNodes(): Node<NV, EV>[] {
    return this.nodes
  }

  size(): number {
    console.log(this.nodes.length)
    return this.nodes.length;
  }

  breadthFirstTraversal(node: Node<NV, EV>): NV[] {
    // build the queue, the visitied map, and the tracker variable
    let visited = new Map();
    let q = [node];
    // while there is something in q
    while (q.length) {
      console.log("infinite loop")
      // set tracker to be the first element in q, which has been removed
      let tracker = q.shift() as Node<NV, EV>;
      // set visited to have a K-V pair of the node and the node value. 
      visited.set(tracker, tracker.value);
      console.log("visited", visited);
      for (const edge of tracker.edges) {
        let nearbyNode = edge.nodes[1];
        if (visited.has(nearbyNode) || q.includes(nearbyNode)) {
          continue;
        }
        q.push(nearbyNode)
      }
    }
    
    return Array.from(visited.values())
  }
}