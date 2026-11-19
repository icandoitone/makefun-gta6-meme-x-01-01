// Entry program for the gta6-meme-x-01 bounty.
// The post itself is the entry: this program only hands POST.json in.
// It copies POST.json from the repository into the output directory,
// after checking the file holds one JSON object with a url string.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const postPath = join(botDir, "POST.json");
const post = JSON.parse(readFileSync(postPath, "utf8"));
if (typeof post !== "object" || post === null || typeof post.url !== "string") {
  throw new Error("POST.json must be an object with a url string");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postPath, join(outDir, "POST.json"));
console.log(`copied POST.json (${post.url}) to ${outDir}`);
