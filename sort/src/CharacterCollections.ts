export class CharacterCollections {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): number {
    return (
      this.data[leftIndex].toLowerCase().charCodeAt(0) -
      this.data[rightIndex].toLowerCase().charCodeAt(0)
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const strArray = this.data.split("");

    const leftHand = strArray[leftIndex];
    strArray[leftIndex] = strArray[rightIndex];
    strArray[rightIndex] = leftHand;

    this.data = strArray.join("");
  }
}
