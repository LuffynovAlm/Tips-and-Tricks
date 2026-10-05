# Claude Commands

Built-in Claude Code slash commands (typed inside a session) and CLI commands/flags (run from the shell). Grouped by category.

## Session & Usage

| Command | Description |
|---|---|
| `/usage` | Display current session usage bar, limits, and reset times |
| `/cost` | See your running dollar spend for the active session (API key usage) |
| `/usage-credits` | Check or manage your extra usage credit balance and spend limits |
| `/context` | Visualize current active context window usage |

## Configuration

| Command | Description |
|---|---|
| `/config` | Toggle/configure settings, e.g. continuous context-window metrics on the status line |
| `/model` | Switch or configure the model for this session, optionally saved as default |
| `/effort` | Set reasoning effort level (low, medium, high, xhigh, max) |

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

## MCP & Integrations

| Command | Description |
|---|---|
| `/mcp` | Manage MCP server connections and check their status |

## Automation

| Command | Description |
|---|---|
| `/loop` | Run a prompt repeatedly on a fixed or self-paced interval |
| `/goal` | Set a completion condition for Claude to work toward autonomously |
| `/fast` | Toggle Fast mode (Opus with faster output) — Opus 5/4.8 only |

## Project Setup & Meta

| Command | Description |
|---|---|
| `/init` | Initialize a project with a CLAUDE.md guide |
| `/help` | Show available commands and usage help |

## CLI Commands & Flags (run in the shell, not inside a session)

| Command | Description |
|---|---|
| `claude` | Start an interactive Claude Code session |
| `claude "query"` | Start a session with an initial prompt |
| `claude -p "query"` | Run a one-off query, print the response, then exit |
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
