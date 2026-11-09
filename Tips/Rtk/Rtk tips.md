# Rtk Tips

rtk (Rust Token Killer, repo `rtk-ai/rtk`) is a single Rust binary that sits between Claude Code and your shell. It compresses command output (git, tests, ls, docker…) before the model reads it, which the project puts at 60–90% fewer tokens on those outputs. Source: the project README and INSTALL.md. The cost-tracking tips are in **TokenCost**.

## Install

| Tip | Why / How | Important |
|---|---|---|
| **Windows: `winget install rtk-ai.rtk`** | Prebuilt binary, no Rust and no C++ build tools needed. Add `-e --source winget` if winget complains about the `msstore` source (certificate error). Open a new terminal afterwards so the PATH is refreshed | ★ |
| macOS / Linux: `brew install rtk` or `curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh \| sh` | Official one-liners from the README |  |
| From source: `cargo install --git https://github.com/rtk-ai/rtk rtk` | Needs the Rust toolchain (`rustup`). On Windows it also needs Visual Studio Build Tools with the C++ workload, otherwise it fails with `link.exe was not found`. VS Code is not enough |  |
| **Never `cargo install rtk` from crates.io** | The crates.io name can be another project (Rust Type Kit). Always use the Git URL | ★ |
| Check you got the right tool | `rtk --version` then `rtk gain`. `rtk gain` must print a savings dashboard. If it says command not found, you have the wrong package: `cargo uninstall rtk` and reinstall from Git |  |
| Upgrade | `winget upgrade rtk-ai.rtk`, `brew upgrade rtk`, or rerun the `cargo install --git … --force` command |  |

## Configure for Claude Code

| Tip | Why / How | Important |
|---|---|---|
| **`rtk init -g` once = every project** | Registers a global `PreToolUse` hook (`rtk hook claude`) in `~/.claude/settings.json`, creates `~/.claude/RTK.md` and adds an `@RTK.md` line to `~/.claude/CLAUDE.md`. From then on `git status` is silently rewritten to `rtk git status` in all your projects | ★ |
| `rtk init -g --auto-patch` | Same, without the `Patch settings.json? [y/N]` prompt. A backup is written to `~/.claude/settings.json.bak` |  |
| Restart Claude Code after init | The hook is only loaded at session start. Test with `git status` |  |
| `rtk init -g --hook-only` | Hook only, nothing added to `CLAUDE.md`, so zero extra tokens in context. Choose it if you want the leanest setup |  |
| `rtk init` (no `-g`) for a single project | Adds an RTK block to the project's `./CLAUDE.md` and a `.rtk/filters.toml` template. No hook, no global effect |  |
| Check the setup | `rtk init --show` should report the hook as registered. In CI or scripts: `rtk init -g --auto-patch` then `rtk init --show` |  |
| Other agents | `rtk init -g --codex`, `--opencode`, `--agent cursor`, `--agent windsurf`, `--agent cline`, `--gemini`… Run `rtk init --help` for the current list |  |
| Remove everything | `rtk init -g --uninstall` (hook, `RTK.md`, the `@RTK.md` line), then restart Claude Code. The binary: `winget uninstall rtk-ai.rtk` or `cargo uninstall rtk` |  |

## Use and measure

| Tip | Why / How | Important |
|---|---|---|
| **`rtk gain` shows what you saved** | Dashboard of tokens saved. Variants: `rtk gain --graph` (30 days), `--history`, `--daily`, `--all --format json` | ★ |
| `rtk discover` finds missed savings | Lists commands that ran unfiltered in your Claude Code history. `rtk discover --all --since 7` for the last 7 days |  |
| Know the hook's limit | It only fires on Bash tool calls. The built-in `Read`, `Grep` and `Glob` tools bypass it. Ask for shell commands (`cat`, `rg`, `find`) or call `rtk read`, `rtk grep`, `rtk find` directly |  |
| `rtk bypass <cmd>` runs one command unfiltered | Use it to tell a filter problem from real output, e.g. `rtk bypass git log --oneline -20`. The call is still tracked. `rtk proxy` is the old alias |  |
| Test wrappers | `rtk test <cmd>` keeps failures only. `rtk cargo test`, `rtk pytest`, `rtk vitest`, `rtk jest`, `rtk go test` collapse passing tests to a count |  |
| Add your own filters | Edit `.rtk/filters.toml` in a project, or the user-global `filters.toml` created by `rtk init -g` (on Windows under `%APPDATA%\rtk\`) |  |
| Read the numbers with care | rtk measures Bash output only and estimates tokens as bytes / 4. The percentages are reliable, the absolute counts are approximate, and it is not the same as cutting your bill by that percentage. Confirm with `/cost` |  |
| Telemetry is off by default | Opt in only with `rtk telemetry enable` |  |
| Licence | The CLI is Apache-2.0. The engine and the optional `rtk-proxy` daemon are BUSL-1.1: free for your own use, but offering rtk to third parties commercially needs the vendor's permission |  |

<!-- Add new tips above this line, one row per entry, under the right category. -->
