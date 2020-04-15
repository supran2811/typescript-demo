import { Sorter } from "./Sorter";

export class NumberCollections extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): number {
    return this.data[leftIndex] - this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number) {
    const leftData = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftData;
  }
}
