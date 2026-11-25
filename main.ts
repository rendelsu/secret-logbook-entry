import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";
const line = "Day 9, 03:12: he typed 'just make it funnier' again and stared like a cat at 40 identical bowls; I filed his genius as cached.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
chmodSync(outPath, 0o644);
