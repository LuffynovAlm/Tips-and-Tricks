# Tips and Tricks

Personal reference notes, organized by tool/topic.

## Shortcut/

Each subfolder under `Shortcut/` is named after a tool (e.g. `ClaudeCode`, `vsCode`) and contains a single file:

```
Shortcut/
  <ToolName>/
    <ToolName> shortcuts.md
```

Each `shortcuts.md` file holds a Markdown table of keyboard shortcuts for that tool:

| Shortcut | Action |
|---|---|
| ... | ... |

### Adding a new shortcut

- If the tool's folder doesn't exist yet under `Shortcut/`, create it.
- If the tool's `<ToolName> shortcuts.md` file doesn't exist yet, create it with a `# <ToolName> Shortcuts` heading and an empty table.
- Add the new shortcut as a row in that table.

## Command/

Each subfolder under `Command/` is named after a tool (e.g. `Claude`) and contains a single file:

```
Command/
  <ToolName>/
    <ToolName> commands.md
```

Each `commands.md` file holds typed commands (slash commands, CLI commands/flags — as opposed to keyboard `Shortcut/` entries), grouped into category sections with a Markdown table per category:

```
## <Category>

| Command | Description |
|---|---|
| ... | ... |
```

### Adding a new command

- If the tool's folder doesn't exist yet under `Command/`, create it.
- If the tool's `<ToolName> commands.md` file doesn't exist yet, create it with a `# <ToolName> Commands` heading.
- Add the new command as a row under the right category section (create a new category section if none fits).

See [CLAUDE.md](CLAUDE.md) for the instructions Claude follows to do this automatically when asked.
