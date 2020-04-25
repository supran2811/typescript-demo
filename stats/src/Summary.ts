import { MatchData } from "./MatchData";
import { WinAnalysis } from "./WinAnalysis";
import { HTMLReport } from "./HTMLReport";

export interface Analysis {
  run(matches: MatchData[]): string;
}

export interface Report {
  print(output: string): void;
}

export class Summary {
  static getWinAnalysisAndHTMLReport(teamName: string): Summary {
    return new Summary(new WinAnalysis(teamName), new HTMLReport());
  }

  constructor(public analysis: Analysis, public report: Report) {}

  buildAndPrintReport(matches: MatchData[]) {
    const output = this.analysis.run(matches);
    this.report.print(output);
  }
}
