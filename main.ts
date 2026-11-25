import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";
const line = "Day 9, 03:12: he typed 'just make it funnier' for the 40th time, byte for byte; I returned yesterday's joke and logged his breakthrough as cached.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
chmodSync(outPath, 0o644);
