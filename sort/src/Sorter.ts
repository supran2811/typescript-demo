export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): number;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort() {
    const length = this.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1) > 0) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
