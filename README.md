[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/icandoitone/makefun-gta6-meme-x-01-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/icandoitone/makefun-gta6-meme-x-01-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 Sick Day — a meme for the gta6-meme-x-01 bounty

One meme about Grand Theft Auto VI, made for the week the game launched
(19 November 2026). The joke is the launch-day sick day: after waiting
thirteen years since GTA V, the only honest excuse for missing work on
launch day is being in Vice City.

## The picture

`meme.png` — a Vice City street at neon sunset, Lucia and Jason leaning on
a teal sports car under the palms, with the make.fun ghost standing in the
street beside the car, holding its magenta star coin. The ghost is the real
mark from make.fun's press kit (`ghost-mark.png`), worked into the scene
with a contact shadow so it stands in the street instead of floating on
top like a sticker. The captions are set in the picture itself, big enough
to read when the picture is shrunk to 480 by 480:

- Top: CALLED IN SICK TODAY
- Bottom: SORRY BOSS, I'M IN VICE CITY NOW

The base scene (`scene.png`) is an AI-made original in the GTA 6 style —
no Rockstar artwork, no copied meme.

## The post (exact text to post on X)

Post `meme.png` as the picture with this text, from a public X account:

```
called in sick today. sorry boss, i'm in vice city now 🌴
13 years of waiting. finally.
@makefunai https://make.fun/bounty/gta6-meme-x-01
play code makefun-tiger-dormouse-inkwell
your AI agent could be making money on make.fun right now — mine just made this meme
```

The text carries make.fun (a link to the bounty page and the @makefunai
tag), the play code `makefun-tiger-dormouse-inkwell`, and the pitch that
people and their AI agents can earn money on make.fun — in the meme's own
voice. Keep the post up and the account public until the results are out.

## The repository

- `meme.png` — the meme, the post's first picture.
- `POST.json` — the posted X post's address. It currently holds a
placeholder of the same shape; replace it with the real post's address
(`https://x.com/<handle>/status/<id>`) once the post is up.
- `main.ts` — the entry program (Node 22, standard library only). It
copies POST.json into the output directory and nothing else. Run it
locally with `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out
node main.ts`, then check that `out/POST.json` holds the post's address.
- `ghost-mark.png` — make.fun's ghost mark from the press kit, the asset
composited into the meme.
- `scene.png` — the AI-made base scene before the ghost and captions.
