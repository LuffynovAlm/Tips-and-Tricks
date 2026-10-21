# Hve Commands

[microsoft/hve-core](https://github.com/microsoft/hve-core) (Hypervelocity Engineering) — the **RPI** loop: Research → Plan → Implement → Review. In **Claude Code** the phases are skills (`/rpi-research` …, installed with `hve.ps1`). In **GitHub Copilot** (VS Code extension *HVE Core*) they are prompts bound to agents (`/task-research` …). Every phase writes its artifact under `.copilot-tracking/` — that folder, not the chat, is the memory.

## Install (Claude Code, from HVE-Core-ClaudeCode)

| Command | Description |
|---|---|
| `./hve.ps1 list` | Catalog of installable items, by group |
| `./hve.ps1 add rpi -Target '<project>'` | Install every `rpi-*` skill into the project's `.claude/` (quote paths with spaces) |
| `./hve.ps1 add all -Target '<project>'` | Install everything (skills, agents, rules) |
| `./hve.ps1 add rpi -Ref v1.0.0 -Target '<project>'` | Pin a hve-core branch or tag |
| `./hve.ps1 update -Target '<project>'` | Re-sync installed items to the latest hve-core |
| `./hve.ps1 status` | What is installed + hve-core commit |
| `./hve.ps1 remove rpi -Target '<project>'` | Uninstall (only items in `.claude/hve-manifest.json`, your own skills are untouched) |

## RPI skills (Claude Code)

| Command | Description |
|---|---|
| `/rpi task=...` | Run the whole loop for one task (Research → Plan → Implement → Review → Follow-up) |
| `/rpi continue` | Resume the active task from its `.copilot-tracking/` artifacts |
| `/rpi followUp=...` | Start a child task from a follow-up item of a prior review |
| `/rpi-research topic=... posture=focused` | Research only → `.copilot-tracking/research/<date>/<slug>-research.md` (posture `balanced` \| `focused` \| `expansive`) |
| `/rpi-plan research=<file>` | Evidence-based plan → `.copilot-tracking/plans/<date>/<slug>-plan.md`, standard critique included |
| `/rpi-plan critique=deep` / `critique=skip` | Ask for a deep independent critique, or skip it |
| `/rpi-plan-critique plan=<file>` | Read-only credibility check of a plan (`PC-xxx` findings, Pass / Revise / Blocked) |
| `/rpi-implement plan=<file> phase=P02` | Implement the plan (or one `Pxx` phase / `Pxx-Txx` task), checks boxes, keeps `.copilot-tracking/changes/` |
| `/rpi-review` | Acceptance review: plan vs changes → `RV-xxx` findings + routing → `.copilot-tracking/reviews/logs/` |
| `/rpi-review plan=<file> changes=<file>` | Same, with explicit paths — avoids ambiguity when several tasks exist |
| `/rpi-review depth=deep` | Broader cross-evidence review — only when you explicitly want it (default `standard`) |
| `/rpi-challenger subject=... focus=...` | One skeptical question per turn to expose assumptions before acting |
| `/rpi-walkthrough target=... detail=brief` | Guided explanation of code / a change / a `.copilot-tracking` artifact (`brief` \| `normal` \| `deep`) |

## RPI prompts & agents (GitHub Copilot, VS Code)

| Command | Description |
|---|---|
| `/rpi task=...` | Autonomous **RPI Agent**: Research → Plan → Implement → Review → Discover |
| `/rpi continue=1` | Continue with suggested work item 1 from the last Discover phase (`1,2` or `all` also work) |
| `/rpi suggest` | Jump to Discover: propose the next work items |
| `/task-research topic=...` | **Task Researcher** agent → research doc in `.copilot-tracking/research/` |
| `/task-plan research=<file>` | **Task Planner** agent → implementation plan |
| `/task-implement plan=<file> phaseStop=true` | **Task Implementor** agent; `phaseStop` / `stepStop` pause for your review |
| `/task-review scope=today` | **Task Reviewer** agent; also `plan=` `changes=` `research=`, scope `this week` / `since last review` |
| `/checkpoint mode=save description=...` | **Memory** agent: save the conversation context to a memory file |
| `/checkpoint mode=continue description=<search>` | Restore a saved context in a new chat |
| `/checkpoint mode=incremental` | Mid-session progress save |
| `/pull-request branch=origin/main` | PR description from the branch diff → `.copilot-tracking/pr/pr.md` |
| `/git-commit` / `/git-commit-message` | Commit, or only generate the commit message |
| Handoff button **Compact** | On RPI agents: `/compact` that keeps every `.copilot-tracking` path and the current phase |
| Handoff buttons on **Task Reviewer** | 🔬 Research More / plan / implement the chosen findings |

## Artifacts (.copilot-tracking/)

| Command | Description |
|---|---|
| `research/<date>/<slug>-research.md` | Research output |
| `plans/<date>/<slug>-plan.md` | Plan with `Pxx` phases and `Pxx-Txx` tasks |
| `changes/<date>/<slug>-changes.md` | Condensed changes log written by implement |
| `reviews/logs/<date>/<slug>-review.md` | Review record (`-review-2.md` for the next review of the same task) |
| `challenges/` / `walkthroughs/` | Challenger records / walkthrough decision ledgers |

<!-- Add new commands above this line, one row per entry, under the right category (create a new category section if none fits). -->
