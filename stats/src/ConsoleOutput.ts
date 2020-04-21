import { Report } from "./Summary";

export class ConsoleOutput implements Report {
  print(output: string): void {
    console.log(output);
  }
}
