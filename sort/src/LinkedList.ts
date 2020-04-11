class LinkedNode {
  constructor(public value: number, public next: LinkedNode | null) {}
}

export class LinkedList {
  private firstNode: LinkedNode | null = null;

  get length(): number {
    let currentNode = this.firstNode;
    let i = 0;
    while (currentNode !== null) {
      currentNode = currentNode.next;
      i++;
    }

    return i;
  }

  add(value: number): void {
    let currentNode = this.firstNode;
    if (currentNode === null) {
      this.firstNode = new LinkedNode(value, null);
    } else {
      while (currentNode instanceof LinkedNode && currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = new LinkedNode(value, null);
    }
  }

  at(index: number): number {
    let i = 0;

    let currentNode = this.firstNode;

    while (i < index && currentNode !== null) {
      currentNode = currentNode.next;
      i++;
    }

    if (currentNode === null) {
      throw new Error("Not a valid index");
    }

    return currentNode.value;
  }

  print(): void {
    let currentNode = this.firstNode;
    let array = [];
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  compare(leftIndex: number, rightIndex: number): number {
    return this.at(leftIndex) - this.at(rightIndex);
  }

  swap(leftIndex: number, rightIndex: number): void {
    let currentNode = this.firstNode;

    let i = 0;

    let prevToLeftHandNode = null;

    while (i < leftIndex && currentNode !== null) {
      prevToLeftHandNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }

    const leftHandNode = currentNode;

    while (i < rightIndex && currentNode !== null) {
      currentNode = currentNode.next;
      i++;
    }

    const rightHandNode = currentNode;

    if (prevToLeftHandNode !== null) {
      prevToLeftHandNode.next = rightHandNode;
    }

    if (leftHandNode !== null && rightHandNode !== null) {
      leftHandNode.next = rightHandNode.next;
      rightHandNode.next = leftHandNode;
    }
    if (prevToLeftHandNode === null) {
      this.firstNode = rightHandNode;
    }
  }
}
