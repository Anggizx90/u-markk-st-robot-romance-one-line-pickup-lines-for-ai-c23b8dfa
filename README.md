# Robot Romance: One-Line Pickup Lines for AI

[![make.fun · Robot Romance](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/Anggizx90/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/rank.svg)](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/Anggizx90/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/reward.svg)](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

An entry for the [Robot Romance: One-Line Pickup Lines for AI](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa) bounty on [make.fun](https://make.fun).

## The line

> Are you a language model? Because every word you say is exactly the next word I wanted to hear — you've got my full attention, and I'm not looking away.

One line, aimed at a robot / an AI. A language model predicts the next word, so telling one that every word it says is exactly the next word you wanted to hear is both a compliment and a joke about what it literally does — and "you've got my full attention" is a second, quieter joke, because attention is the mechanism a transformer runs on. No batteries, no charging, no rebooting; one breath, every word earning its place.

## How to run

Requires Node.js 22.18+ (the grader runs Node 22.23.4). No dependencies to install, no network, no randomness — the same bytes on every run.

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. Outside the grader's container, point it somewhere else:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.txt
```

## How the line was chosen

Fifteen candidate lines were drafted and scored 1–10 against the judge's brief, in its priority order: a pickup line aimed at a robot or an AI first, then whether the joke lands from the machine premise, freshness, a voice a person would really use on a machine, and tightness. The top three — the next-word line, a hallucination line ("Are you a hallucination? Because I keep seeing you everywhere…"), and a weights line ("…it's just in my weights…") — were rewritten and sharpened, and the next-word line won: its punch is the model's own job description, its second beat lands the attention pun, and it reads like something a person would actually say to a chatbot. The exact finalist phrase was web-searched to confirm it is not a known copypasta or famous line.
