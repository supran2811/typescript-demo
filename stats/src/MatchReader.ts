import { getStringAsDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";

interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(this.mapRows);
  }

  mapRows(data: string[]): MatchData {
    return [
      getStringAsDate(data[0]),
      data[1],
      data[2],
      parseInt(data[3]),
      parseInt(data[4]),
      data[5] as MatchResult,
      data[6],
    ];
  }
}
