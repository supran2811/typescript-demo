import { Analysis } from "./Summary";
import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";

export class WinAnalysis implements Analysis {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `Team ${this.team} has won ${wins}`;
  }
}
