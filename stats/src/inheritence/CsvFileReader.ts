import fs from "fs";

/** Here we are using generics which behaves similar to arguments in method */
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {}

  ///This method id general so can be abstracted
  abstract mapRows(data: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRows);
  }
}
