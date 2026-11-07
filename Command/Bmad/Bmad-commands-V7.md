# Bmad Commands {v7}

BMad **v7** (preview alpha, release ETA mid-November 2026; skills installed through the Skills CLI, no npm release yet). Modules: **core-tools**, **method**, **toolsmith** (replaces the Builder), **founder**, plus TEA, CIS, WDS, loop and automator. v7 has no `[CODE]` menu codes and no `bmad-help`: the `bmad` skill answers questions and routes you, and the agents (Sofia, John…) are driven by plain phrases. The planning unit is a **ticket tree** (`initiative-<slug>/` → epics → stories) instead of `epics.md` + `sprint-status.yaml`: **the ticket is the spec**. Run each workflow in a fresh context window (`/clear`). Source: the help shipped with the installed skills (`bmad` skill) and `docs.bmad-method.org`. Previous generations: `Bmad-commands-V6.12.4.md` (stable) and `Bmad-commands-V6.md`.

## Install & maintain {v7}

| Command | Description | Important |
|---|---|---|
| `npx skills add bmad-code-org/BMAD-METHOD --skill '*'` | Install the v7 skills in a project (pick Claude Code when asked). To install a few: `--skill bmad --skill bmod-core-tools --skill bmod-method --skill bmad-build --skill bmad-agent-po`. BMad is installed per project | ★ |
| `bmad setup` | Ask the `bmad` skill ("run bmad setup"). Creates/repairs `_bmad/` and the shared scripts, asks each module's new config questions. Run it after every install or update. `bmad setup <module>` (e.g. `tea`) covers one module | ★ |
| `bmad status` | Changes nothing: what is installed, what is missing or outdated, and the one command to run next |  |
| `bmad migrate method` | Move a v6 project (epics, sprint-status, stories, PRDs) into the `initiative-<slug>/` ticket tree. Backs up first, applies nothing until you approve the plan | ★ |
| `npx skills update` | Update installed modules; then run `bmad setup` again |  |
| `npx skills add bmad-code-org/bmad-method-test-architecture-enterprise` | Add the Test Architect module, then `bmad setup tea` |  |
| `bmad-customize` | Override a skill or agent without editing it: persona, standing facts, templates, output paths. Writes `_bmad/custom/<skill>.toml` (team) or `<skill>.user.toml` (personal) |  |
| `bmad-loop-setup` | Install or update the BMAD Loop module config (unattended build loop) |  |

## Help & Navigation {v7}

| Command | Description | Important |
|---|---|---|
| `bmad` | The BMad Agent: asks "what next?", "where do I start?", "how do I use X?" answered from the installed modules' own help. Replaces `bmad-help`. Also setup, migrate and the active initiative | ★ |
| `bmad` (active initiative) | Show, switch, create or clear the active initiative (`active_initiative` under `[core]` in `_bmad/custom/config.user.toml`; personal, so each person can work on another one) | ★ |
| `bmad-party-mode` | Roundtable between agents or personas (custom parties, a default party, memory; the `product-team` room) |  |
| `bmad-advanced-elicitation` | Push a draft off its first answer: critique methods run as independent readers, then one proposed revision. Starts only when named: say "advanced elicitation" (optionally with the method) |  |

## Agents (personas) {v7}

| Command | Description | Important |
|---|---|---|
| `bmad-agent-po` | **Sofia — product owner (new).** Owns the ticket tree: requirements, slicing, board, replan. No menu: say what you want (see *Product Owner phrases*) | ★ |
| `bmad-agent-pm` | John — product manager. Coaches a planning document out of you by altitude (PRD, brief, business case, charter…), then updates or validates it |  |
| `bmad-agent-analyst` | Mary — analyst: brainstorm, research, then a brief, a PRFAQ or a BRD |  |
| `bmad-agent-ux-designer` | Sally — UX designer |  |
| `bmad-agent-architect` | Winston — architect: decisions that keep the parts consistent, readiness |  |
| `bmad-agent-dev` | Amelia — developer: builds stories, generates tests, reviews code, runs a retrospective |  |
| `bmad-toolsmith` | **Smithy — toolsmith (new).** Builds and maintains skills, agents and modules (see *Toolsmith*) |  |
| `bmad-tea` | Murat — test architect and quality advisor |  |
| `bmad-cis-agent-brainstorming-coach` | Carson — brainstorming specialist |  |
| `bmad-cis-agent-creative-problem-solver` | Dr. Quinn — master problem solver |  |
| `bmad-cis-agent-design-thinking-coach` | Maya — design thinking maestro |  |
| `bmad-cis-agent-innovation-strategist` | Victor — disruptive innovation oracle |  |
| `bmad-cis-agent-presentation-master` | Caravaggio — slide decks, pitch decks, visual storytelling |  |
| `bmad-cis-agent-storyteller` | Sophia — master storyteller |  |
| `wds-agent-saga-analyst` | Saga — WDS strategic analyst (phases 1-2) |  |
| `wds-agent-freya-ux` | Freya — WDS UX designer (phases 3-4) |  |

## Analysis — shape the idea {v7}

| Command | Description | Important |
|---|---|---|
| `bmad-brainstorming` | Coached session that pushes past the obvious ideas. Resumes. Writes `brainstorm-<topic>/` |  |
| `bmad-forge-idea` | Question one half-formed idea hard until you can act on it or drop it. Optional short brief for planning skills |  |
| `bmad-deep-recon` | Research that serves a decision, with cited sources found now. Draft a prompt for your own tool, process a returned report, run the research here, choose between candidates, or research this codebase (how/why, approved ADRs). Writes `research-<topic>/` | ★ |
| `bmad-prfaq` | Working Backwards: press release first, hard FAQs, verdict. Tests whether a concept survives scrutiny |  |
| `bmad-product-brief` | Earlier brief workflow, kept for comparison with John's brief; will be retired. Prefer John |  |

## Prepare big inputs {v7}

| Command | Description | Important |
|---|---|---|
| `bmad-ingest` | Turn a transcript, thread, voice memo or long document into a cited note (decisions, actions, open questions). Original kept unchanged in `{output_folder}/raw/`. Templates: standup, sprint-review, discovery-workshop, user-interview… | ★ |
| `bmad-shard-pro` | Make a long markdown document cheap for agents: leave it, add a contents list, or split it word for word into shards (main file named after the folder, original frozen in `.source/`). Never rewrites content |  |
| `bmad-facilitate` | Coaches you through one document from a template library: decision record (ADR), postmortem, security review, proposal, pitch deck… then updates or validates it. Does not write PRDs (John does) |  |

## Planning — Product Owner phrases (Sofia) {v7}

Say these to `bmad-agent-po`; each phrase dispatches to one capability.

| Command | Description | Important |
|---|---|---|
| `create a spec` / `write the initiative from <PRD, brief, notes, transcript>` | SPEC — write the initiative's Requirements and Constraints (stable `R<n>` ids, each citing its source) from whatever exists; sparse input leaves *Open question* lines | ★ |
| `slice this` / `split this epic` / `break this into stories` | TICKETS — slice an initiative into thin epics, an epic into stories (entries in `tickets.toml`) | ★ |
| `refine this ticket` | REFINE — settle an epic or story before it is built |  |
| `what's ready` / `status of <epic>` | BOARD — what is ready, blocked, in review; start, block, close, drop. Replaces `bmad-sprint-planning status` | ★ |
| `validate these tickets` | VALIDATE — check the tree |  |
| `this changed, what now` | REPLAN — update, re-slice or drop, and record the Decision. Replaces `bmad-correct-course` | ★ |
| `make a ticket` | A standalone bug or story goes to `backlog/` or to the epic you name |  |
| `publish` | Publish tickets to a tracker (Jira, Linear, GitHub) used as the board; ask Sofia to connect it |  |
| `set up the ticket store` | STORE — create/configure the tree and the tracker link |  |

## Planning — documents (John, UX) {v7}

| Command | Description | Important |
|---|---|---|
| `bmad-agent-pm` + `create a PRD` | PRD at any altitude (`prd-light` for hobby work). Also brief, business case, charter, narrative, pitch, BRD, SRS, launch plan, prototype plan, experiment card, agent spec. `update the PRD`, `validate this PRD` | ★ |
| `bmad-prd` | Earlier PRD workflow, kept for comparison with John; will be retired. Prefer John |  |
| `bmad-ux` | DESIGN.md (how it looks) and EXPERIENCE.md (how it behaves); mocks and wireframes. May lead, follow or stand alone |  |

## Solutioning & repo context {v7}

| Command | Description | Important |
|---|---|---|
| `bmad-architecture` | Only the decisions that keep separately built parts consistent (stack, contracts, formats, hosting). Reads the initiative file, so run it after Sofia; she adopts it as a companion the epics cite | ★ |
| `bmad-project-context` | Keep a small verified block of rules for agents in `AGENTS.md`. Use it when an agent got something wrong, no usable `AGENTS.md` exists, or the stack was just decided | ★ |

## Build & Validate {v7}

| Command | Description | Important |
|---|---|---|
| `bmad-build` | The default for any real change: clarify → plan → implement → review → commit. Takes free text, a ticket id or link, or a file; with nothing it picks the next ready ticket and reads it in full with its epic. Writes the plan beside `tickets.toml` (or `plan-<slug>.md`) | ★ |
| `bmad-build-auto` | One unattended build of one ticket, dispatched by a loop or script. Never for attended work |  |
| `bmad-code-review` | Agent review of any diff, PR or branch with triaged findings; with no argument offers the tickets in review. Redundant right after a thorough build review | ★ |
| `bmad-review` | Independent lenses over a diff or document: `adversarial`, `edge-case-hunter`, `verification-gap`, `structure`, `prose`. Runs only when you say "review". Moved to core-tools | ★ |
| `bmad-walkthrough` | You review a commit, PR, file or directory block by block, guided; also a way to learn unfamiliar code |  |
| `bmad-qa-generate-e2e-tests` | API and end-to-end tests for features that already work |  |
| `bmad-retrospective` | Judge a finished epic folder against its *Done when*: sourced findings, action items, acceptance decision, approved ADRs. Then ask Sofia to close the epic | ★ |
| `bmad-loop-resolve <story-key>` | Interactive: resolve a CRITICAL escalation a bmad-loop run paused on, then the story is re-driven |  |
| `bmad-loop-sweep` | Automation-only triage of the deferred-work ledger (called by bmad-loop) |  |
| `bmad-story-automator` | Separate automator module: create → dev → QA → review → retro across an epic (resumable, tmux). Not covered by the v7 method help, check it fits the ticket tree |  |
| `bmad-story-automator-review` | Non-interactive review used by story-automator sessions |  |

## Toolsmith {v7}

| Command | Description | Important |
|---|---|---|
| `bmad-toolsmith` | Smithy builds a skill, agent or module from a conversation: shows an execution plan and writes nothing until you approve it. Modes: build, edit, convert, review, cut, package, validate, migrate. Replaces the three Builder skills | ★ |
| `bmad-eval` | Run a skill's evals: `baseline` (beats the bare model?), `variant` (stripped/prior version), `quality` (rubric), `trigger` (does the description fire on the right requests). Smithy offers it after a build |  |

## Test Architecture (TEA) {v7}

| Command | Description | Important |
|---|---|---|
| `bmad-teach-me-testing` | TEA Academy — progressive sessions |  |
| `bmad-testarch-test-design` | Risk-based test plan |  |
| `bmad-testarch-framework` | Initialize Playwright / Cypress framework |  |
| `bmad-testarch-ci` | CI/CD quality pipeline |  |
| `bmad-testarch-atdd` | Red-phase acceptance test scaffolds |  |
| `bmad-testarch-automate` | Expand test coverage |  |
| `bmad-testarch-test-review` | Test quality audit |  |
| `bmad-testarch-nfr` | NFR evidence audit |  |
| `bmad-testarch-trace` | Traceability matrix and quality gate |  |

## Creative Intelligence Suite (CIS) {v7}

| Command | Description | Important |
|---|---|---|
| `bmad-cis-innovation-strategy` | Disruption opportunities, business model innovation |  |
| `bmad-cis-problem-solving` | Systematic problem-solving |  |
| `bmad-cis-design-thinking` | Human-centered design process |  |
| `bmad-cis-storytelling` | Narrative frameworks |  |

## Web Design Studio (WDS) {v7}

| Command | Description | Important |
|---|---|---|
| `wds-0-project-setup` | Project onboarding — type, complexity, stack, routes to the right phase |  |
| `wds-0-alignment-signoff` | Stakeholder alignment and sign-off before starting |  |
| `wds-1-project-brief` | Project brief — foundation for all design work |  |
| `wds-2-trigger-mapping` | Map business goals to user psychology |  |
| `wds-3-scenarios` | UX scenario outlines from the Trigger Map |  |
| `wds-4-ux-design` | Detailed visual specifications, scenario by scenario |  |
| `wds-5-agentic-development` | AI-assisted development, testing and reverse engineering |  |
| `wds-6-asset-generation` | Generate visual and text assets from the specs |  |
| `wds-7-design-system` | Create, import, browse and maintain design-system components and tokens |  |
| `wds-8-product-evolution` | Brownfield improvements — the WDS pipeline in miniature |  |

## Retired or renamed since 6.12.4 {v7}

| Command | Description | Important |
|---|---|---|
| `bmad-help` | → `bmad` (the BMad Agent) |  |
| `bmad-sprint-planning`, `bmad-create-epics-and-stories` | → Sofia (`bmad-agent-po`): ticket tree instead of `sprint-status.yaml` | ★ |
| `bmad-correct-course` | → Sofia, *this changed, what now* (REPLAN) |  |
| `bmad-spec`, `bmad-quick-spec` | Removed: Sofia writes the requirements into the ticket itself |  |
| `bmad-agent-builder`, `bmad-workflow-builder`, `bmad-module-builder` | → `bmad-toolsmith` (Smithy) |  |
| `bmad-eval-runner` | → `bmad-eval` |  |
| `bmad-document-project`, `bmad-generate-project-context` | → `bmad-project-context` |  |
| `bmad-ticket` customization | → `_bmad/custom/bmad-agent-po.toml` (`[agent]` instead of `[workflow]`) |  |
| `bmad-prd`, `bmad-product-brief` | Still installed "for comparison", to be retired: use John (`bmad-agent-pm`) |  |

<!-- Add new commands above this line, one row per entry, under the right category. This sheet is the v7 generation (alpha): re-check names against `bmad status` / the installed skills when v7 is released. -->
<!-- AI usage: Claude Code · Sonnet 5.5 · effort <unknown> · <run /cost> in / <run /cost> out tokens · $<run /cost> · 1 session(s) -->
