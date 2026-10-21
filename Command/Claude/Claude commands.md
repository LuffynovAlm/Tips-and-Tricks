# Claude Commands

Built-in Claude Code slash commands (typed inside a session) and CLI commands/flags (run from the shell). Grouped by category.

## Session & Usage

| Command | Description |
|---|---|
| `/usage` | Display current session usage bar, limits, and reset times |
| `/cost` | See your running dollar spend for the active session (API key usage) |
| `/usage-credits` | Check or manage your extra usage credit balance and spend limits |
| `/context` | Visualize current active context window usage |

## Tokens & Cost

| Command | Description |
|---|---|
| `/cost` | Token and dollar cost of the current session — copy it into the deliverable before closing |
| `/context` | See what fills the context (system prompt, MCP tools, memory files, messages) to spot token hogs |
| `/compact <focus>` | Summarize the conversation, keeping what you name (e.g. `/compact keep the API decisions`) |
| `/clear` | Drop all context between unrelated tasks — the cheapest token is the one you don't resend |
| `/model haiku` / `/model sonnet` | Switch to a cheaper model for routine work |
| `/effort low` | Lower reasoning effort (fewer thinking tokens) for simple tasks |
| `/mcp` | Disable MCP servers you don't use — their tool definitions use context on every request |
| `/statusline` | Show session cost / context % permanently in the status line |
| `claude --max-budget-usd <amount>` | Hard spending cap for the session |
| `claude -p "query" --output-format json` | Headless run whose JSON result includes `total_cost_usd` and token `usage` — log it in CI |
| `npx ccusage@latest` | Community tool: daily / per-session token and cost report from local Claude Code logs |

## Configuration

| Command | Description |
|---|---|
| `/config` | Toggle/configure settings, e.g. continuous context-window metrics on the status line |
| `/model` | Switch or configure the model for this session, optionally saved as default |
| `/effort` | Set reasoning effort level (low, medium, high, xhigh, max) |
| `/agents` | Create and manage custom subagents |
| `/hooks` | Configure hooks that run on tool events |
| `/statusline` | Set up a custom status line |
| `/terminal-setup` | Install Shift+Enter for newlines in your terminal |
| `/vim` | Toggle vim editing mode in the prompt |
| `/keybindings` | Customize keyboard shortcuts |

## Context & Memory

| Command | Description |
|---|---|
| `/memory` | Edit CLAUDE.md files / manage auto memory |
| `/compact` | Summarize the conversation to free up context window space |
| `/clear` | Start a new conversation with empty context |

## Navigation & Session Management

| Command | Description |
|---|---|
| `/resume` | Return to an earlier conversation by ID or name |
| `/cd` | Move the current session to a different working directory |
| `/add-dir` | Add an additional working directory for file access |
| `/exit` (alias `/quit`) | Exit the current Claude Code session |
| `/rewind` | Roll back the conversation and/or code to an earlier point |
| `/export` | Export the current conversation to a file or the clipboard |
| `/status` | Show version, model, account and connectivity status |
| `/artifacts` | List your artifacts (o opens one, c copies its link) |

## Input Prefixes

| Command | Description |
|---|---|
| `@path/to/file` | Mention a file or folder to pull it into context |
| `!command` | Bash mode — run a shell command directly, output is added to context |
| `/skill-name args` | Invoke a skill (e.g. `/bmad-help what next?`) |

## Permissions & Security

| Command | Description |
|---|---|
| `/permissions` | Manage tool permission rules and allowed tools |
| `/login` | Sign in to your Anthropic account |
| `/logout` | Sign out of your Anthropic account |

## Code Quality & Review

| Command | Description |
|---|---|
| `/code-review` (alias `/review`) | Review the current diff for bugs and cleanup suggestions |
| `/security-review` | Check the current diff for security vulnerabilities |
| `/verify` | Run verification checks on code changes |
| `/code-review ultra` | Multi-agent cloud review of the current branch (or `/code-review ultra <PR#>`) |
| `/simplify` | Review changed code for reuse/simplification and apply the fixes |

## MCP & Integrations

| Command | Description |
|---|---|
| `/mcp` | Manage MCP server connections and check their status |
| `/ide` | Connect to / manage the IDE integration |
| `/install-github-app` | Set up the Claude GitHub app for PR/issue automation |
| `/plugin` | Browse and install plugins from marketplaces |

## Automation

| Command | Description |
|---|---|
| `/loop` | Run a prompt repeatedly on a fixed or self-paced interval |
| `/goal` | Set a completion condition for Claude to work toward autonomously |
| `/fast` | Toggle Fast mode (Opus with faster output) — Opus 5/4.8 only |
| `/schedule` | Create scheduled cloud agents (cron routines) |
| `/fewer-permission-prompts` | Scan transcripts and allowlist common read-only commands |

## Project Setup & Meta

| Command | Description |
|---|---|
| `/init` | Initialize a project with a CLAUDE.md guide |
| `/help` | Show available commands and usage help |
| `/doctor` | Check the health of your Claude Code installation |
| `/release-notes` | Show the release notes |

## CLI Commands & Flags (run in the shell, not inside a session)

| Command | Description |
|---|---|
| `claude` | Start an interactive Claude Code session |
| `claude "query"` | Start a session with an initial prompt |
| `claude -p "query"` | Run a one-off query, print the response, then exit |
| `cat file \| claude -p "query"` | Pipe content into a one-off query |
| `claude -p "query" --output-format json` | One-off query with JSON output (also `stream-json`) |
| `claude -c` / `--continue` | Continue the most recent conversation in the current directory |
| `claude -r <session>` / `--resume` | Resume a specific session by ID or name |
| `claude --model <model>` | Start a session with a specific model |
| `claude --effort <level>` | Start a session with a set reasoning effort level |
| `claude --permission-mode <mode>` | Start in a specific permission mode (e.g. auto, manual, plan) |
| `claude --add-dir <path>` | Add additional working directories at startup |
| `claude --bg "prompt"` / `--background` | Start as a background agent session |
| `claude --max-budget-usd <amount>` | Set a spending cap before the session stops |
| `claude update` | Update Claude Code to the latest version |
| `claude doctor` | Run diagnostics and setup health checks |
| `claude mcp add` | Add a new MCP server with a specified transport |
| `claude mcp list` | List all configured MCP servers and their status |
| `claude mcp remove <name>` | Remove a configured MCP server |
| `claude plugin` | Manage plugins and view the plugin marketplace |

<!-- Add new commands above this line, one row per entry, under the right category (create a new category section if none fits). -->
