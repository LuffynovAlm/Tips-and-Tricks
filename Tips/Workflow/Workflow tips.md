# Workflow Tips

The commands that give the most for the least: BMad story cycle, HVE `rpi-review`, and how to pick up an existing session in Claude Code or GitHub Copilot. Full syntax is in the Bmad, Hve, Claude and GithubCopilot command sheets.

## BMad story cycle — help → create → dev → review

| Tip | Why / How |
|---|---|
| **Start with `/bmad-help` to set the context** | It reads your artifacts and sprint status, says where you are and which story / workflow is next. Ask it a real question: `/bmad-help what is the next story of epic 2 and what context does it need?` |
| Generate `project-context.md` once | `/bmad-generate-project-context` writes the project's AI rules. Story creation and dev load it, so every story inherits the same conventions without you repeating them |
| **`/bmad-create-story` in a fresh context** | `/clear`, then `/bmad-create-story 2.3`. The story file gets everything the dev needs (ACs, tasks, architecture notes, files to touch) — it is the hand-off, not the chat |
| Validate the story before coding | Run the create-story `validate` action ([VS]) to catch missing context while it is still cheap to fix |
| **`/bmad-dev-story <story file>` in another fresh context** | `/clear` between create and dev. Dev works task by task and checks them off in the file, so rerunning on the same story resumes at the first unchecked task |
| Review in a new session, ideally another model | `/bmad-code-review` with fresh eyes. Issues → back to `/bmad-dev-story`, approved → next `/bmad-create-story` |
| Many stories in a row | `/bmad-story-automator` chains create → dev → QA → review → retro across an epic |
| Log the AI cost in the story | `/cost` before closing, then the `AI usage:` line in the *Dev Agent Record* (one line per session, a total at the end) |

## HVE RPI — rpi-review and friends

| Tip | Why / How |
|---|---|
| **One RPI phase per session** | Research, plan, implement, review each write a file in `.copilot-tracking/`. `/clear` between phases: the next phase reads the file, not the chat, so you pay for less context |
| **Always close with `/rpi-review`** | It compares plan vs changes and writes `RV-xxx` findings with a route: defect → `/rpi-implement`, missing decision → `/rpi-plan`, missing evidence → `/rpi-research`, extra work → follow-up |
| Give `/rpi-review` explicit paths | `/rpi-review plan=<plan.md> changes=<changes.md>` — it stops if several unrelated tasks match |
| `depth=deep` only on purpose | Standard is the default and fast. Deep is never inferred from size or risk: ask `/rpi-review depth=deep` for critical changes only |
| Review is resumable | An interrupted review (`started`) continues from its record. A finished review is reused unless you ask for a new one (`-review-2.md`) |
| Answer findings one by one | In manual mode it asks per finding: *use suggested action*, *gather more info*, *skip*, *finish*. Skipped material findings block a conformant outcome — on purpose |
| Critique the plan before coding | `/rpi-plan` runs a standard critique by default; `/rpi-plan-critique plan=<file>` for an independent second look. Fixing a plan is cheaper than fixing code |
| Challenge a decision | `/rpi-challenger subject=...` asks one skeptical question per turn, no answers given — good before an architecture choice |
| Understand a change | `/rpi-walkthrough target=<files> detail=brief` explains segment by segment with file links |
| Copilot equivalent | `/task-research`, `/task-plan`, `/task-implement phaseStop=true`, `/task-review scope=today`, or `/rpi task=...` for the autonomous RPI Agent |
| BMad or RPI? | BMad story → `/bmad-code-review`. RPI-tracked task (plan + changes in `.copilot-tracking/`) → `/rpi-review`. Each review expects its own artifacts |

## Join an existing session — Claude Code

| Tip | Why / How |
|---|---|
| **`claude -c`** | Continue the most recent conversation of the current folder, with its full history |
| `claude -r` | No argument: pick a past session from a list. `claude -r <id or name>` jumps straight to one |
| `/resume` | Same picker from inside a running session |
| `claude -r <id> --fork-session` | Resume into a new session ID: you branch off without changing the original conversation |
| Resume in the right folder | Sessions are stored per project directory: `cd` into the project first, or `-c` finds nothing |
| Resume the work, not the chat | For BMad / RPI, a fresh `/clear` session + the artifact (story file, plan, `/rpi continue`) is often cheaper than resuming a long conversation |

## Join an existing session — GitHub Copilot

| Tip | Why / How |
|---|---|
| **Chat history in VS Code** | History (clock) icon in the Chat view → reopen a previous chat session and keep going |
| Copilot CLI | `copilot --continue` reopens the last session, `copilot --resume` lets you pick one, `/resume` from inside the CLI |
| **`/checkpoint` (HVE)** | `/checkpoint mode=save description=story-2-3` before leaving, then `/checkpoint mode=continue description=story-2-3` in a new chat to restore the context |
| `/rpi continue=1` (HVE) | The RPI Agent picks up suggested work item 1 from its last Discover phase |
| **Compact** handoff button (HVE agents) | Compacts but keeps every `.copilot-tracking` path and the current phase — use it instead of a plain `/compact` |
| BMad in Copilot | State lives in `sprint-status.yaml` and the story file: in a new chat, `/bmad-help` or `/bmad-sprint-status` tells you where you left off |
