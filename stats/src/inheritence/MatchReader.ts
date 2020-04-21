import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "../MatchResult";
import { getStringAsDate } from "../utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
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
