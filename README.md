# The World Today — Tuesday, 24 November 2026

One-page illustrated news poster: **45 verified stories** from Tuesday 24 November 2026 —
3 big lead panels (Huawei guilty verdict, Gaza strike, Wall Street cooling), 11 more
illustrated panels, a dark world map with numbered pins, 31 numbered briefs, the day in
numbers, a UTC timeline, and a DATE CHECK box listing Monday's stories that were
deliberately left out.

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Anonymus22/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Anonymus22/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

## How it is built

`poster.html` is the 1024×1024 poster (paper `#f8f4eb`, ink `#15171c`, red `#b3231b`).
Every illustrated panel has its own small original inline-SVG scene — no photographs,
no copied art. `render.mjs` screenshots it to `entry.png` with headless Chromium.
`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (fallback `/output`).

## Verify

```sh
node render.mjs            # produces entry.png (PNG, 1024×1024, ≤ 1 MiB)
node main.ts               # copies entry.png to $MAKEFUN_OUTPUT_DIR
```

Sources: Reuters · AP · AFP · BBC · The Guardian · The Times · Kyiv Independent ·
Investopedia · Just Security Early Edition · Horizon · The Global Eye · 10 Things.
