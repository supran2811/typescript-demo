import { MatchData } from "./MatchData";

export interface Analysis {
  run(matches: MatchData[]): string;
}

export interface Report {
  print(output: string): void;
}

export class Summary {
  constructor(public analysis: Analysis, public report: Report) {}

  buildAndPrintReport(matches: MatchData[]) {
    const output = this.analysis.run(matches);
    this.report.print(output);
  }
}
