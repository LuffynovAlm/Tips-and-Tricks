# UpgradeBmad Tips {v7}

Moving a BMad v6.12.4 project to v7 (**preview alpha**, release ETA mid-November 2026; no npm release yet, skills install through the Skills CLI). Source: `docs/reference/upgrade-from-v6.md` and `docs/start/install-bmad.md` on the BMAD-METHOD repo (`main` / `v7-docs-update-2`). Always do it in a **copy** of the project (e.g. `BMAD-SETUP-V7`).

## Before you start {v6.12.4, v7}

| Tip | Why / How | Important |
|---|---|---|
| **Decide: stay on 6.12.4 or go v7 alpha** | v6.12 is the stable line (frozen, bug fixes only: `npx bmad-method install`). v7 alpha changes often and updates can break a setup. Try it in a copy, never in the working project | ★ |
| Work in a copy of the project | Copy the whole folder (incl. `_bmad/`, `_bmad-output/`, `.claude/skills/`) to `<project>-V7`; keep the original usable | ★ |
| Check the prerequisites | Node.js 20.12+, npm, Git, Python 3.10+, and `uv` (setup stops without it): `node -v`, `uv --version`, `python --version` |  |
| Close Claude Code before touching skills | The skill catalog is read at session start: after the install, open a **new** session so the v7 skills are loaded |  |
| Commit or copy `.claude/` and `_bmad/custom/` | Your overrides in `_bmad/custom/` survive setup, but a backup costs nothing |  |

## Upgrade procedure {v6.12.4, v7}

| Tip | Why / How | Important |
|---|---|---|
| **1. Install the v7 skills** | From the project root: `npx skills add bmad-code-org/BMAD-METHOD --skill '*'` (it asks which coding tools to target; pick Claude Code). To install a few: `--skill bmad --skill bmod-core-tools --skill bmod-method --skill bmad-build --skill bmad-agent-po` | ★ |
| **2. Open a new session and run `bmad setup`** | Ask the `bmad` skill: "run bmad setup". One flow: installs the runtime scripts under `_bmad/`, asks new config questions, moves renamed `_bmad/custom/` files, offers to delete retired skills, lists v6 leftovers, then offers the migration. It always asks before deleting | ★ |
| **3. Accept the v6 leftover cleanup** | It backs up `_bmad/` first, then removes stale config keys and unused customizations v7 no longer reads |  |
| **4. Run `bmad migrate method`** | Moves v6 planning and implementation files (epics, sprint-status, stories, PRDs, specs) into an `initiative-<slug>/` ticket tree. Backs up `_bmad/` and the output folder; changes nothing until you approve the plan | ★ |
| **5. Verify with `bmad status`** | Shows the installation and module versions |  |
| Update later | Run `bmad setup` again (it runs `npx skills update` when a module has a newer version). If you run `npx skills update` by hand, run `bmad setup` afterwards |  |
| Don't mix install methods | One method per skill (Skills CLI **or** plugin marketplace) or you get duplicate commands. The `bmad-plugins` marketplace is not v7-ready yet |  |

## Check after the upgrade {v6.12.4, v7}

| Tip | Why / How | Important |
|---|---|---|
| **Read the migration plan** | `_bmad-output/migration-v6-v7/migration-v6-v7.md` records every question, answer and checklist result | ★ |
| Check the skill catalog | In a new session `bmad-help` and the slash menu must list the v7 skills (`bmad`, `bmad-agent-po`, `bmad-toolsmith`, `bmad-ux`, `bmad-eval`...) and no retired one |  |
| Check the layout | `initiative-<slug>/` with `tickets/tickets.toml`, one `epic-<slug>/` per epic, `archive-v6/` holding the v6 sources unchanged, `backlog/` for stories with no epic |  |
| Check the active initiative | `active_initiative` now lives under `[core]` in `_bmad/custom/config.user.toml` (was `[modules.bmm]` on preview builds) |  |
| Fix references outside `_bmad/` and the output folder | The migration lists them but never edits them: README, AGENTS.md, CLAUDE.md, scripts, hooks that point to `planning_artifacts` / `implementation_artifacts` or old skill names | ★ |
| Check the git state | In an existing repo each move is a `git mv` with a commit per step, never pushed. If it created a repo for the planning files, accept its initial commit |  |
| Delete the backup when satisfied | `.v6-v7-migration-backup-<datetime>/` at the project root (git-ignored). Keep it until the first v7 build works |  |
| Test one real cycle | `bmad-build` on the next entry, `bmad-code-review`, `bmad-retrospective` on an epic, `bmad-project-context` for a root `AGENTS.md` naming the active initiative |  |

## Retired and renamed skills {v6.12.4, v7}

| Tip | Why / How | Important |
|---|---|---|
| `bmad-sprint-planning`, `bmad-create-epics-and-stories`, `bmad-correct-course` → `bmad-agent-po` | Sofia, the Product Owner, replaces them (ticket tree instead of sprint-status.yaml) | ★ |
| `bmad-quick-spec`, `bmad-spec` → removed | Sofia writes the requirements into the ticket itself |  |
| `bmad-create-ux-design` → `bmad-ux` | Plain rename |  |
| `bmad-agent-builder`, `bmad-workflow-builder`, `bmad-module-builder` → `bmad-toolsmith` | The Toolsmith agent replaces the three builders |  |
| `bmad-eval-runner` → `bmad-eval` | Plain rename |  |
| `bmad-bmm-document-project`, `bmad-bmm-generate-project-context` → `bmad-project-context` | One skill replaces both |  |
| `bmad-ticket` customization → `bmad-agent-po.toml` | Setup moves `_bmad/custom/bmad-ticket.toml`; `persistent_facts` and `activation_steps_*` go from `[workflow]` to `[agent]`. Overrides of `bmad-spec` / `bmad-correct-course` are not moved: copy what you still need |  |

## Breaking changes {v6.12.4, v7}

| Tip | Why / How | Important |
|---|---|---|
| `planning_artifacts` and `implementation_artifacts` are no longer read | `bmad migrate method` finds the v6 files through them and moves them | ★ |
| The ticketing store `root` key is gone | The tree is `{output_folder}/{active_initiative}`; to move it set `core.output_folder` in `_bmad/custom/config.toml` |  |
| `tickets.py` refuses the old layout | An initiative or epic must keep `tickets.toml`, child epics and plans in a `tickets/` folder; migrate to fix it |  |
| Web bundles are removed | `web-bundles/` and its packager are gone; use the skills instead of Gemini Gems / Custom GPTs |  |
| Stories in progress | The migration asks whether to finish them in v6 first (default). Finish or park them before migrating |  |
