# ⚡ Tips & Tricks

> Commands and keyboard shortcuts for **BMad**, **Claude Code**, **GitHub Copilot** and **VS Code**, kept as Markdown tables and published as searchable cheat sheets.

### 👉 [**Open the cheat sheets**](https://luffynovalm.github.io/Tips-and-Tricks/Visuals/)

Filter with <kbd>/</kbd>, switch light/dark with ◐, and use one page per tool or the [all-in-one view](https://luffynovalm.github.io/Tips-and-Tricks/Visuals/).

---

## 📚 What's inside

| Tool | Commands | Shortcuts |
|---|---|---|
| 🟣 **BMad** | [Bmad commands](Command/Bmad/Bmad%20commands.md): skills by phase, with menu codes | — |
| 🟠 **Claude Code** | [Claude commands](Command/Claude/Claude%20commands.md): slash commands, input prefixes, CLI flags | [ClaudeCode shortcuts](Shortcut/ClaudeCode/ClaudeCode%20shortcuts.md) |
| 🔵 **GitHub Copilot** | [GithubCopilot commands](Command/GithubCopilot/GithubCopilot%20commands.md): `/` commands, `@` participants, `#` variables, CLI | [GithubCopilot shortcuts](Shortcut/GithubCopilot/GithubCopilot%20shortcuts.md) |
| 🩵 **VS Code** | [VsCode commands](Command/VsCode/VsCode%20commands.md): `code` CLI, Command Palette, Quick Open prefixes | [vsCode shortcuts](Shortcut/VsCode/vsCode%20shortcuts.md) |
| 🟢 **Devflow** | [Devflow commands](Command/Devflow/Devflow%20commands.md): state gates and Jira sync | — |
| 🔴 **HVE (hve-core)** | [Hve commands](Command/Hve/Hve%20commands.md): `hve.ps1` install, RPI skills (Claude Code), RPI prompts/agents (Copilot), `.copilot-tracking` artifacts | — |

### 💡 Tips

| Topic | |
|---|---|
| 🟡 **Token & Cost** | [TokenCost tips](Tips/TokenCost/TokenCost%20tips.md): **always put the AI cost of a conversation in the task's deliverables**, plus how to spend fewer tokens with Claude Code and Copilot |
| 🟢 **Workflow** | [Workflow tips](Tips/Workflow/Workflow%20tips.md): the most effective commands — `bmad-help` → `bmad-create-story` → `bmad-dev-story`, `rpi-review`, and how to join an existing Claude Code / Copilot session |

## 🗂️ Structure

```
Command/<Tool>/<Tool> commands.md     ← typed commands, one "## Category" + table per group
Shortcut/<Tool>/<Tool> shortcuts.md   ← keyboard shortcuts, one table
Tips/<Topic>/<Topic> tips.md          ← best practices, "## Category" + Tip | Why / How table
Visuals/                              ← generated HTML (do not edit by hand)
.claude/skills/tips-visuals/          ← the generator skill
```

**Command tables** have the columns `Command | Description` and are grouped under `## <Category>` headings.
**Shortcut tables** have the columns `Shortcut | Action`.

To add an entry, add a row to the right table, creating the folder or file if needed. Or just tell Claude *"remember this shortcut: …"*. [CLAUDE.md](CLAUDE.md) tells it where to put the entry.

---

## 🎨 The `tips-visuals` skill

The Markdown tables are the **single source of truth**. The `tips-visuals` skill turns them into a set of styled HTML pages.

```
 Command/*.md ─┐
Shortcut/*.md ─┼──▶  build.mjs  ──▶  Visuals/index.html          (everything, one page)
    Tips/*.md ─┘                     Visuals/<kind>-<tool>.html  (one page per sheet)
```

### What it renders

- ⌨️ **Shortcuts as keycaps.** `Ctrl+Shift+P` becomes <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>. A `, ` reads as *"then"* (`Esc, Esc`) and ` / ` reads as *"or"* (`Alt+] / Alt+[`).
- 💻 **Commands as code chips.** A description starting with a BMad menu code such as `[PRD]` gets a colored badge.
- 🔍 **Instant filter** across every sheet. Press <kbd>/</kbd> to focus it.
- 🌗 **Light and dark themes** that follow your OS, with a manual toggle.
- 🎯 **One accent color per tool.** New tool folders show up automatically.

### How to run it

```bash
node .claude/skills/tips-visuals/build.mjs
```

You can also ask Claude Code to *"sync the visuals"*. Every run wipes `Visuals/` and rebuilds it, so a row you delete from a table also disappears from the pages.

### Staying in sync automatically

[.claude/settings.json](.claude/settings.json) has a **PostToolUse hook**. When Claude Code runs with this folder as its project root, any edit to a file under `Command/`, `Shortcut/` or `Tips/` rebuilds the visuals right away. Edits to other files are ignored.

If you edit outside Claude Code, or from another root folder, run the command above before committing.

### Adding a new tool

1. Create `Command/<Tool>/<Tool> commands.md` or `Shortcut/<Tool>/<Tool> shortcuts.md`.
2. Optionally give the tool a color in `ACCENTS` in [build.mjs](.claude/skills/tips-visuals/build.mjs). Without one it's shown in gray.
3. Rebuild. The tool shows up in the nav and gets its own page.

---

## 🌐 Publishing

The site is served by **GitHub Pages** from the `main` branch root. The root [index.html](index.html) redirects to `Visuals/`, and `.nojekyll` turns off Jekyll processing. Push to `main` and the site updates within about a minute.
