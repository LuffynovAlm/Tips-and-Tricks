---
name: tips-visuals
description: Regenerates the styled HTML cheat sheets in Visuals/ from the Markdown tables in Command/ and Shortcut/. Use when the user says "generate the visuals", "update the HTML", "sync the visuals", or after any change to a commands/shortcuts .md file.
---

# Tips Visuals

The Markdown tables under `Command/<Tool>/` and `Shortcut/<Tool>/` are the single source of truth. `Visuals/*.html` is a generated view of them — never edit it by hand.

## Run

```
node .claude/skills/tips-visuals/build.mjs
```

Output (all files are wiped and rebuilt on each run, so removed tables disappear too):

- `Visuals/index.html` — every cheat sheet on one page, with filter (`/` to focus) and light/dark toggle
- `Visuals/<command|shortcut>-<tool>.html` — one page per Markdown file

## Rendering rules (what the script expects from the Markdown)

- `# Title` → sheet title; text before the first `##` → intro line
- `## Category` → a group; each table row → one entry (first column = key, second = description)
- Shortcut files: the key column is turned into `<kbd>` chips. `+` joins keys in a chord, `, ` means "then" (sequence), ` / ` means "or" (alternatives)
- Command files: inline `` `code` `` is rendered as code chips; a description starting with `[CODE]` (BMad menu code) becomes a colored tag
- `\|` inside a cell is a literal pipe
- New tool folders are picked up automatically; add an accent color for them in `ACCENTS` in `build.mjs` (otherwise gray)

## After running

Tell the user in one line how many sheets/entries were generated, and the path to `Visuals/index.html`.
