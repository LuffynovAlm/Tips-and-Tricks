# VsCode Commands

## CLI (`code`)

| Command | Description | Important |
|---|---|---|
| `code .` | Open the current folder in VS Code | ★ |
| `code <file>` | Open a file |  |
| `code -r <path>` | Open in the last active window (reuse) |  |
| `code -n` | Open a new window |  |
| `code -g <file>:<line>` | Open a file at a given line |  |
| `code -d <file1> <file2>` | Diff two files |  |
| `code <name>.code-workspace` | Open a multi-root workspace |  |
| `code --list-extensions` | List installed extensions |  |
| `code --install-extension <id>` | Install an extension (e.g. `anthropic.claude-code`) |  |
| `code --uninstall-extension <id>` | Uninstall an extension |  |
| `code --disable-extensions` | Start with all extensions disabled (troubleshooting) |  |
| `code --profile "<name>"` | Open with a specific profile |  |

## Command Palette (Ctrl+Shift+P)

| Command | Description | Important |
|---|---|---|
| `Developer: Reload Window` | Reload VS Code without closing it | ★ |
| `Preferences: Open User Settings (JSON)` | Edit settings.json directly | ★ |
| `Preferences: Open Keyboard Shortcuts (JSON)` | Edit keybindings.json directly |  |
| `Workspaces: Add Folder to Workspace...` | Add a folder to a multi-root workspace |  |
| `Files: Compare Active File With...` | Diff the active file with another |  |
| `Markdown: Open Preview to the Side` | Live Markdown preview |  |
| `Terminal: Select Default Profile` | Choose PowerShell / Git Bash as default |  |
| `Format Document With...` | Pick a formatter |  |
| `Change Language Mode` | Set the file's language |  |

## Quick Open prefixes (Ctrl+P)

| Command | Description | Important |
|---|---|---|
| `>` | Run a command (same as Command Palette) | ★ |
| `@` | Go to symbol in file |  |
| `#` | Go to symbol in workspace |  |
| `:` | Go to line | ★ |
| `?` | List available prefixes |  |

<!-- Add new commands above this line, one row per entry, under the right category (create a new category section if none fits). -->
