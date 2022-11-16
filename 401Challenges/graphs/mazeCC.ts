import { Node, Graph} from "./graphs"

type Room = {
  hasGold: boolean,
  hasKey: boolean,
  roomNumber: number,
 
}

type Door = {
  isLocked: boolean
}

export class Maze extends Graph<Room, Door> {
  //create start property
  start: Node<Room, Door>
  // be able to set a node as the start
  createStart(node: Node<Room, Door>) {
    this.start = node
  }
}

export const can_solve = (maze: Maze): Boolean => {
  let foundGold = false;
  let hasKey = false;
  let visited = new Set();
  let lockedRoom;
  let q: Node<Room, Door>[] = [maze.start];
  while (q.length > 0) {
    let currentNode = q.shift()!;
    //immediately check for gold
    if (currentNode?.value.hasGold) {
      foundGold = true;
      return foundGold
    }
    // add every item removed from q into the set of visited rooms 
    visited.add(currentNode);
    // check to see if room has key
    if (currentNode?.value.hasKey) {
      //pick up the key
      console.log("this room has key")
      hasKey = true;
      currentNode.value.hasKey=false
      // q.push(lockedRoom);
    }
    // check all doors to next rooms 
    for (const edge of currentNode.edges) {
      // if you have key, or if door is not locked 
      if (hasKey || edge.value.isLocked === false) {
        // unlock door and move foreward. 
        edge.value.isLocked = false;
        let nextNode = edge.nodes[1]
        q.push(nextNode);
      }
      // if locked and you dont have the key
      if (edge.value.isLocked && hasKey === false) {
        // if we have returned to the locked room and we still do not have the key
        if(lockedRoom){
          return foundGold
        }
        // mark down that room to return to when you have the key. 
        lockedRoom = currentNode;
        q.push(lockedRoom)
      }
    }
  }
  return foundGold
}



