import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinAnalysis } from "./WinAnalysis";
import { ConsoleOutput } from "./ConsoleOutput";
import { Summary } from "./Summary";
import { HTMLReport } from "./HTMLReport";

// const csvFileReader = new CsvFileReader("football.csv");
const matchReader = MatchReader.fromCSV("football.csv"); //new MatchReader(csvFileReader);
matchReader.load();

// const winAnalysis = new WinAnalysis("Watford");
// const consoleOutput = new ConsoleOutput();
// const htmlOutput = new HTMLReport();

const summary = Summary.getWinAnalysisAndHTMLReport("Watford"); //new Summary(winAnalysis, htmlOutput);

summary.buildAndPrintReport(matchReader.matches);
