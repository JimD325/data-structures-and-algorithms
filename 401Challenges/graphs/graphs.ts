export interface Node<NV, EV> {
  [x: string]: any;
  value: NV;
  edges: Edge<NV, EV>[];
}

export interface Edge<NV, EV> {
  value: EV;
  nodes: [Node<NV, EV>, Node<NV, EV>];
}

export const breadthFirst = <NV, EV>(graph: Graph<NV, EV>, start: Node<NV, EV>): NV[] => {
  const q = [start];
  const visited = new Set<Node<NV, EV>>();
  const traversal: NV[] = [];
  let next = q.shift();
  while (next !== undefined) {
    if (!visited.has(next)) {
      visited.add(next);
      traversal.push(next.value);
      q.push(...graph.neighbors(next));
    }
    next = q.shift();
  }
  return traversal;
}

export class Graph<NV, EV> {
  nodes: Node<NV, EV>[] = [];

  neighbors(node: Node<NV, EV>): Set<Node<NV, EV>> {
    const neighborsWithDupes = node.edges.map((edge) => edge.nodes[1]);
    const neighbors = new Set(neighborsWithDupes);
    return neighbors;
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

  addBiEdge(a: Node<NV, EV>, b: Node<NV, EV>, value: EV) {
    const A2B: Edge<NV, EV> = {
      value: value,
      nodes: [a, b]
    };
    const B2A: Edge<NV, EV> = {
      value: value,
      nodes: [b, a]
    };
    a.edges.push(A2B);
    b.edges.push(B2A);
  }


  getNodes(): Node<NV, EV>[] {
    return this.nodes
  }

  size(): number {
    console.log(this.nodes.length)
    return this.nodes.length;
  }

  
}