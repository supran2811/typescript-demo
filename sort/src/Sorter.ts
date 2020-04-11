interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): number;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort() {
    const length = this.collection.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1) > 0) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
