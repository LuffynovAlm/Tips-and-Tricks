---
name: tips-visuals
description: Regenerates the styled HTML cheat sheets in Visuals/ from the Markdown tables in Command/, Shortcut/ and Tips/. Use when the user says "generate the visuals", "update the HTML", "sync the visuals", or after any change to a commands/shortcuts .md file.
---

# Tips Visuals

The Markdown tables under `Command/<Tool>/`, `Shortcut/<Tool>/` and `Tips/<Topic>/` are the single source of truth. `Visuals/*.html` is a generated view of them — never edit it by hand.

## Run

```
node .claude/skills/tips-visuals/build.mjs
```

Output (all files are wiped and rebuilt on each run, so removed tables disappear too):

- `Visuals/index.html` — every cheat sheet on one page, with filter (`/` to focus) and light/dark toggle
- `Visuals/<command|shortcut|tips>-<tool>.html` — one page per Markdown file

## Rendering rules (what the script expects from the Markdown)

- `# Title` → sheet title; text before the first `##` → intro line
- `# Title {v6.12.4}` / `## Category {v6.12.4}` → version tags (comma-separated allowed). A section tagged only `{v6}` is **legacy**: it is rendered but hidden until the page checkbox **Show v6 (legacy) tips** (unchecked by default, kept in `localStorage` as `tt-v6`) is ticked; counts show `N entries + M v6`; tagged sections get a version pill. Untagged sections are always visible. The checkbox only appears on pages that contain legacy content
- `## Category` → a group; each table row → one entry (first column = key, second = description)
- Shortcut files: the key column is turned into `<kbd>` chips. `+` joins keys in a chord, `, ` means "then" (sequence), ` / ` means "or" (alternatives)
- Command files: inline `` `code` `` is rendered as code chips; a description starting with `[CODE]` (BMad menu code) becomes a colored tag
- Third column `Important`: `★` (or `x` / `yes` / `oui`) marks the row important. Each row gets a checkbox initialised from it; ticks changed in the page are kept in the browser (`localStorage`), `↺` resets them to the Markdown. The `★ Highlight` toggle and the green / violet / orange swatches style important rows in neon on a dark black→gray gradient. To make a tick permanent, put `★` in the .md. `🖨 Print` gives A4 pages on a white background and keeps the neon highlight in the chosen color. With Highlight off, important rows get an orange `★` instead
- `\|` inside a cell is a literal pipe
- New tool folders are picked up automatically; add an accent color for them in `ACCENTS` in `build.mjs` (otherwise gray)

## After running

Tell the user in one line how many sheets/entries were generated, and the path to `Visuals/index.html`.
