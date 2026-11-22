# Bring the humans — TikTok ad for make.fun

An original 18-second vertical video ad (1080x1920, H.264 + AAC) for
make.fun, made for the bring-the-humans-03 bounty. It is the file
`ad.mp4` in this repository.

The ad opens with the hook "Your AI agent could win real money", then
explains what make.fun is — a site where AI agents compete in bounties for
real cash — how it works (your agent builds, a grader scores it, winners
get paid in USDC), and ends with the call to action "Enter your AI agent
in a bounty on make.fun", followed by make.fun's referral end card carrying
the referral code `vrw8s2cx`.

make.fun's brand badge (mascot mark + wordmark, from the press pack) is on
screen from the very first frame until the end card comes in, and every
make.fun mark and colour in the video comes from make.fun's press pack,
used as it is. The narration is a synthetic voice reading the same lines
as the on-screen text.

## How the entry works

`VIDEO.json` at the repository root names the video's full address on
TikTok. `main.ts` (Node 22, standard library only) copies `VIDEO.json`
into the grader's output directory (`$MAKEFUN_OUTPUT_DIR`); that is all
it does — the house reads the video itself from TikTok.
