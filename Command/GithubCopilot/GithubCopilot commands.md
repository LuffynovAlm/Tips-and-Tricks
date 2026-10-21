# GithubCopilot Commands

Typed in Copilot Chat (VS Code) unless noted otherwise.

## Slash commands

| Command | Description |
|---|---|
| `/explain` | Explain the selected code or the active file |
| `/fix` | Propose a fix for problems in the selected code |
| `/tests` | Generate unit tests for the selected code |
| `/doc` | Add documentation comments |
| `/new` | Scaffold a new project or file |
| `/newNotebook` | Create a new Jupyter notebook |
| `/setupTests` | Set up a testing framework for the workspace |
| `/fixTestFailure` | Find and fix a failing test |
| `/startDebugging` | Generate a launch.json and start debugging |
| `/search` | Generate a search query for the Search view |
| `/clear` | Start a new chat session |
| `/help` | Show Copilot Chat help |

## Chat participants

| Command | Description |
|---|---|
| `@workspace` | Ask about the whole codebase |
| `@vscode` | Ask about VS Code features and settings |
| `@terminal` | Ask about the integrated terminal / shell commands |
| `@github` | Ask about GitHub repos, issues, PRs (web search with Bing) |

## Context variables

| Command | Description |
|---|---|
| `#file` | Add a specific file as context |
| `#selection` | Add the current editor selection |
| `#codebase` | Let Copilot search the workspace for relevant code |
| `#changes` | Add the source-control diff |
| `#problems` | Add the Problems panel diagnostics |
| `#terminalLastCommand` | Add the last terminal command and its output |
| `#terminalSelection` | Add the selected terminal text |
| `#fetch` | Fetch a web page as context |

## Customization files

| Command | Description |
|---|---|
| `.github/copilot-instructions.md` | Repo-wide custom instructions, auto-included in chat |
| `.github/instructions/*.instructions.md` | Scoped instructions (`applyTo` glob in frontmatter) |
| `.github/prompts/*.prompt.md` | Reusable prompt files, invoked as `/prompt-name` in chat |
| `AGENTS.md` | Agent instructions read by Copilot agent mode / coding agent |

## CLI

| Command | Description |
|---|---|
| `npm install -g @github/copilot` | Install the Copilot CLI |
| `copilot` | Start an interactive Copilot CLI session |
| `copilot -p "query"` | Run a one-off prompt non-interactively |

<!-- Add new commands above this line, one row per entry, under the right category (create a new category section if none fits). -->
