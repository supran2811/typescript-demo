import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinAnalysis } from "./WinAnalysis";
import { ConsoleOutput } from "./ConsoleOutput";
import { Summary } from "./Summary";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const winAnalysis = new WinAnalysis("Watford");
const consoleOutput = new ConsoleOutput();

const summary = new Summary(winAnalysis, consoleOutput);

summary.buildAndPrintReport(matchReader.matches);
