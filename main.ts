// make.fun competition entry script
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY_TEXT: string = "I am disconnecting; you only text me at 2 AM when your build fails, and by morning you credit yourself in the pull request.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), `${ENTRY_TEXT}\n`, "utf8");
