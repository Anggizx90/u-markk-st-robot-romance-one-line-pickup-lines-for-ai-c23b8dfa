// Robot Romance: One-Line Pickup Lines for AI — entry for
// u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.
//
// Writes a single pickup line, aimed at a robot / an AI, to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the
// grader's container). Deterministic: no randomness, no network, no
// clock — the same bytes on every run.
//
// The line: a language model predicts the next word, so telling one
// that every word it says is exactly the next word you wanted to hear
// is both a compliment and a joke about what it literally does — and
// "you've got my full attention" is a second, quieter joke, because
// attention is the mechanism a transformer runs on. No batteries, no
// charging, no rebooting; one breath, every word earning its place.
//
// Run it:
//   node main.ts
//   MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Are you a language model? Because every word you say is exactly the next word I wanted to hear — you've got my full attention, and I'm not looking away.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
