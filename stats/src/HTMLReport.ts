import fs from "fs";

import { Report } from "./Summary";

export class HTMLReport implements Report {
  print(output: string): void {
    const html = `<div> 
      <h1>Analysis Report<h1>
      <h2> ${output} </h2> 
    </div>`;
    fs.writeFileSync("report.html", html);
  }
}
