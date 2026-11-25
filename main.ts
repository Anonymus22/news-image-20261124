// main.ts — Node 22, standard library only.
// Copies entry.png from this repo directory to $MAKEFUN_OUTPUT_DIR/entry.png
// (fallback /output), creating the output directory if needed.
// Deterministic: the output is a byte-for-byte copy of entry.png.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const src = join(repoDir, "entry.png");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
console.log("copied entry.png to", join(outDir, "entry.png"));
