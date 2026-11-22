// bring-the-humans-03 — entrypoint.
//
// The entry is a TikTok video ad for make.fun. The house reads the video
// itself from the address in VIDEO.json, so all this program has to do is
// copy VIDEO.json from this repository into the grader's output directory.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoDir, "out");
const videoJson = join(repoDir, "VIDEO.json");

if (!existsSync(videoJson)) {
  throw new Error(`VIDEO.json not found in ${repoDir}`);
}

// Create the output directory if needed. Never delete it or its parent:
// in the grader /output is a mount point, so only its contents may change.
mkdirSync(outDir, { recursive: true });
copyFileSync(videoJson, join(outDir, "VIDEO.json"));
