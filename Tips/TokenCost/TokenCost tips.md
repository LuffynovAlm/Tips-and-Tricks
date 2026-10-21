# TokenCost Tips

Keeping AI usage visible and cheap with Claude Code and GitHub Copilot. The matching commands are in the Claude and GithubCopilot command sheets, under **Tokens & Cost**.

## Always trace the cost

| Tip | Why / How | Important |
|---|---|---|
| **Put the conversation's cost in the task's results and deliverables** | Before you close a task, run `/cost` (Claude Code) or `/usage` (Copilot CLI) and paste the numbers into the PR description, the story file (BMad *Dev Agent Record*), the commit body or the report. This shows the real cost of each feature and makes estimates better over time | ★ |
| Use one standard trace line | `AI usage: Claude Code · Opus 5.5 · effort high · 1.2M in / 85k out tokens · $4.20 · 2 sessions`. Use the same format everywhere so it's easy to grep and add up |  |
| Record the model and effort with the cost | The same task can cost 5–10× more depending on the model. A cost figure without the model means little |  |
| One task = one session | `/clear` between tasks so the cost you read belongs to exactly one deliverable. BMad already recommends a fresh context per workflow |  |
| Add up the cost of multi-session tasks | When a story spans several sessions (create → dev → review), record each session's cost and give the total in the final deliverable |  |
| Log cost automatically in CI / scripts | `claude -p … --output-format json` returns `total_cost_usd` and `usage`. Store them next to the build artifacts |  |
| Trust the billing page over session counters | The Copilot CLI `/usage` counter can undercount after compaction. Reconcile monthly with GitHub billing, and with your Anthropic console or `/usage` for Claude |  |

## Spend fewer tokens

| Tip | Why / How | Important |
|---|---|---|
| `/clear` between unrelated tasks | Every message resends the whole context, so old, unrelated history costs you on every turn |  |
| `/compact <focus>` before the context fills | A summary you guided keeps the decisions and drops the noise. Automatic compaction is less selective |  |
| Check `/context` | Find out what is actually using space: large files, long tool outputs, MCP tool definitions |  |
| Point at files with `@file` / `#file` | Precise context beats letting the agent search and read half the repo |  |
| Match the model to the task | Haiku or Sonnet for routine edits, renames and docs. Opus for architecture and hard bugs. `/effort low` when no deep reasoning is needed |  |
| Disable unused MCP servers | Each connected server adds its tool definitions to every request |  |
| Keep `CLAUDE.md` / `copilot-instructions.md` short | They are loaded on every request, so each extra line is paid many times |  |
| Set a budget cap | `claude --max-budget-usd 5` stops a runaway agent loop before it gets expensive |  |
| Write precise prompts | A precise first prompt avoids several correction rounds, and each of those rounds resends the full context |  |

<!-- Add new tips above this line, one row per entry, under the right category. -->
