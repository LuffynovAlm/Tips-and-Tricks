# Tips and Tricks — instructions for Claude

This directory stores personal reference notes: keyboard shortcuts under `Shortcut/`, and typed commands (slash commands, CLI commands/flags) under `Command/`.

## When the user gives you a keyboard shortcut to remember

Structure: `Shortcut/<ToolName>/<ToolName> shortcuts.md`, one folder per tool, one Markdown table per file (columns: `Shortcut`, `Action`).

Steps:

1. Identify `<ToolName>` from context (e.g. "Claude Code" → `ClaudeCode`, "VS Code" → `VsCode`). Match existing folder naming/casing if a close match already exists under `Shortcut/` — don't create a near-duplicate folder (e.g. `VSCode` vs `VsCode`).
2. If `Shortcut/<ToolName>/` doesn't exist, create it.
3. If `Shortcut/<ToolName>/<ToolName> shortcuts.md` doesn't exist, create it with a `# <ToolName> Shortcuts` heading and an empty table (`| Shortcut | Action |` header row).
4. Add/update the row for the shortcut the user gave you. If a row for that key combo already exists, update it instead of duplicating.
5. Don't ask for confirmation for this action — just do it and tell the user in one line what was added/updated and where.

Only touch this pattern when the user is clearly giving/asking about a shortcut for a tool. For anything else in this folder, use normal judgment.

## When the user gives you a command to remember

Structure: `Command/<ToolName>/<ToolName> commands.md`, one folder per tool, entries grouped into category sections (`## <Category>`), one Markdown table per category (columns: `Command`, `Description`).

Steps:

1. Identify `<ToolName>` from context, matching existing folder naming/casing if a close match already exists under `Command/` (e.g. `Claude`).
2. If `Command/<ToolName>/` doesn't exist, create it.
3. If `Command/<ToolName>/<ToolName> commands.md` doesn't exist, create it with a `# <ToolName> Commands` heading.
4. Add/update the row for the command under the right category section (create a new category if none fits). If a row for that command already exists, update it instead of duplicating.
5. Don't invent or guess commands — only add ones you're confident are real (verify against official docs or the product itself if unsure).
6. Don't ask for confirmation for this action — just do it and tell the user in one line what was added/updated and where.

Only touch this pattern when the user is clearly giving/asking about a command for a tool. For anything else in this folder, use normal judgment.

## HTML visuals (keep in sync)

`Visuals/*.html` is generated from the Markdown tables by the `tips-visuals` skill (`.claude/skills/tips-visuals/`). Never edit the HTML by hand.

- After any change to a file under `Command/` or `Shortcut/`, regenerate: `node .claude/skills/tips-visuals/build.mjs`. A PostToolUse hook in `.claude/settings.json` does this automatically when this folder is the Claude Code project root; when working from another root (e.g. the BMAD-SETUP workspace), run it yourself.
- When creating a new tool folder, add an accent color for it in `ACCENTS` in `build.mjs`.
