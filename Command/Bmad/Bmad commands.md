# Bmad Commands {v6.12.4}

BMad skills are invoked as slash commands in Claude Code (e.g. `/bmad-prd`) or by naming them in chat. The `[CODE]` prefix is the agent menu code shown by `bmad-help`. Run each workflow in a fresh context window (`/clear`). **Version 6.12.4** (core and bmm 6.12.4 · bmb v2.2.2 · cis v0.3.2 · tea v1.19.0 · wds v0.4.3) — sections tagged `{v6.12.4}` apply to it; sections tagged `{v6}` are the previous generation, hidden until you tick "Show v6 (legacy) tips". Most v6 skill names still work as forwarding shims (removal rides the v7 cut).

## Installation {v6.12.4}

| Command | Description | Important |
|---|---|---|
| `npx bmad-method install` | install or update BMad (6.12.4). Prerequisite: `uv` — every workflow skill starts with a `uv run` render step and halts if `uv` is missing | ★ |
| `bmad-bmb-setup` | [SB] Install or update the BMad Builder module config |  |
| `bmad-loop-setup` | Install or update the BMAD Loop module config (unattended build loop) |  |
| `bmad-customize` | [BC] Override how an agent or workflow behaves (persistent facts, rules) — writes to `_bmad/custom/` |  |

## Help & Navigation {v6.12.4}

| Command | Description | Important |
|---|---|---|
| `bmad-help` | [BH] Where am I in the workflow, what to do next — accepts a free-text question as args | ★ |
| `bmad-party-mode` | [PM] Multi-agent roundtable discussion, also custom personas / AI focus-group panels |  |
| `bmad-sprint-planning status` | [SS] Sprint progress, risks, open action items and the recommended next action. Replaces `bmad-sprint-status` | ★ |

## Agents (personas) {v6.12.4}

| Command | Description | Important |
|---|---|---|
| `bmad-agent-analyst` | Mary — business analyst, requirements |  |
| `bmad-agent-pm` | John — product manager, PRD |  |
| `bmad-agent-architect` | Winston — system architect |  |
| `bmad-agent-ux-designer` | Sally — UX designer |  |
| `bmad-agent-dev` | Amelia — developer, implements stories and code changes |  |
| `bmad-tea` | Murat — test architect and quality advisor |  |
| `bmad-cis-agent-brainstorming-coach` | Carson — brainstorming specialist |  |
| `bmad-cis-agent-creative-problem-solver` | Dr. Quinn — master problem solver |  |
| `bmad-cis-agent-design-thinking-coach` | Maya — design thinking maestro |  |
| `bmad-cis-agent-innovation-strategist` | Victor — disruptive innovation oracle |  |
| `bmad-cis-agent-presentation-master` | Caravaggio — slide decks, pitch decks, visual storytelling |  |
| `bmad-cis-agent-storyteller` | Sophia — master storyteller |  |
| `wds-agent-saga-analyst` | Saga — WDS strategic analyst (phases 1-2) |  |
| `wds-agent-freya-ux` | Freya — WDS UX designer (phases 3-4) |  |

## Phase 1 — Analysis {v6.12.4}

| Command | Description | Important |
|---|---|---|
| `bmad-brainstorming` | [BP] Guided brainstorming with one or more techniques |  |
| `bmad-deep-recon` | [RS] Research to support a decision: draft a prompt for your own AI tool, summarize a returned report with cited sources, or run the web research here. Types: market, domain, technical, competitive, user-voice, academic-lit. Replaces the three `*-research` skills | ★ |
| `bmad-product-brief` | [CB] Nail down the product idea in a brief — create, update or validate | ★ |
| `bmad-prfaq` | [WB] Working Backwards PRFAQ challenge (alternative to the brief) |  |
| `bmad-forge-idea` | [FI] Pressure-test an idea with different personas until it hardens or dies; can hand off to `bmad-spec` / `bmad-build` |  |

## Phase 2 — Planning {v6.12.4}

| Command | Description | Important |
|---|---|---|
| `bmad-prd` | [PRD] Create, update or validate a PRD (validate gives an HTML findings report). Replaces `bmad-create-prd` / `edit-prd` / `validate-prd` | ★ |
| `bmad-ux` | [CU] Two documents: DESIGN.md (how it looks) and EXPERIENCE.md (how it behaves) |  |
| `bmad-spec` | [SPC] Distill any input into a short SPEC.md plus supporting files; also updates, validates and breaks a spec into stories |  |
| `bmad-project-context` | [PC] Set up, adopt, refresh, record or audit the repo's agent instructions (the AGENTS.md block). Replaces `bmad-generate-project-context` and `bmad-document-project` | ★ |

## Phase 3 — Solutioning {v6.12.4}

| Command | Description | Important |
|---|---|---|
| `bmad-architecture` | [CA] Architecture decisions that keep separately built parts consistent — create, update or validate | ★ |
| `bmad-create-epics-and-stories` | [CE] Break the PRD and architecture into epics and stories with acceptance criteria | ★ |
| `bmad-sprint-planning` | [SP] Readiness gate (PASS / CONCERNS / FAIL) then generate `sprint-status.yaml`. Intents: `readiness`, `status`, `validate`, `fix`. Replaces `bmad-check-implementation-readiness` | ★ |

## Phase 4 — Build & Ship {v6.12.4}

| Command | Description | Important |
|---|---|---|
| `bmad-build` | [BD] The standard implementation flow: clarify → plan → implement → review → present. Takes an idea, a story, an issue link or a spec file; resumes an unfinished spec. Replaces `bmad-quick-dev` and, in practice, `create-story` + `dev-story` | ★ |
| `bmad-code-review` | [CR] Ad hoc review of any code change with parallel reviewers — optional extra check after Build's own review | ★ |
| `bmad-walkthrough` | [WT] Guided human review of a change: purpose, what to look at, how to test. Replaces `bmad-checkpoint-preview` |  |
| `bmad-qa-generate-e2e-tests` | [QA] Generate API/E2E tests for implemented code |  |
| `bmad-retrospective` | [ER] Retrospective of a completed epic with sourced findings, action items and an acceptance decision |  |
| `bmad-story-automator` | [SA] Automate create → dev → QA → review → retro across an epic (resumable, tmux) |  |
| `bmad-story-automator-review` | [SAR] Non-interactive review used by story-automator sessions (auto-fix, sprint-status sync) |  |
| `bmad-build-auto` | One iteration of an unattended build loop — invoked by name, not for interactive use |  |
| `bmad-loop-resolve <story-key>` | Interactive: resolve a CRITICAL escalation a bmad-loop run paused on, so the story can be re-driven |  |
| `bmad-loop-sweep` | [ST] Automation-only triage of the deferred-work ledger (called by bmad-loop, not by humans) |  |

## Anytime {v6.12.4}

| Command | Description | Important |
|---|---|---|
| `bmad-correct-course` | [CC] Assess a significant mid-sprint change and produce a sprint change proposal | ★ |
| `bmad-review` | [RV] Review anything before it ships — diff, PR, PRD, spec, story, prose — through lenses: `adversarial`, `edge-case-hunter`, `verification-gap` (code), `structure`, `prose` (docs). Ask for lenses by name | ★ |
| `bmad-advanced-elicitation` | [AE] Push the LLM to critique its last output (socratic, first principles, pre-mortem, red team…) |  |

## Test Architecture (TEA) {v6.12.4}

| Command | Description | Important |
|---|---|---|
| `bmad-teach-me-testing` | [TMT] TEA Academy — 7 progressive sessions |  |
| `bmad-testarch-test-design` | [TD] Risk-based test plan |  |
| `bmad-testarch-framework` | [TF] Initialize Playwright / Cypress framework |  |
| `bmad-testarch-ci` | [CI] CI/CD quality pipeline |  |
| `bmad-testarch-atdd` | [AT] Red-phase acceptance test scaffolds |  |
| `bmad-testarch-automate` | [TA] Expand test coverage |  |
| `bmad-testarch-test-review` | [RV] Test quality audit (0-100) |  |
| `bmad-testarch-nfr` | [NR] NFR evidence audit |  |
| `bmad-testarch-trace` | [TR] Traceability matrix and quality gate |  |

## Creative Intelligence Suite (CIS) {v6.12.4}

| Command | Description | Important |
|---|---|---|
| `bmad-cis-innovation-strategy` | [IS] Disruption opportunities, business model innovation |  |
| `bmad-cis-problem-solving` | [PS] Systematic problem-solving |  |
| `bmad-cis-design-thinking` | [DT] Human-centered design process |  |
| `bmad-cis-storytelling` | [ST] Narrative frameworks |  |

## Builder (BMB) {v6.12.4}

| Command | Description | Important |
|---|---|---|
| `bmad-agent-builder` | [BA] Build an agent / [AA] Analyze an agent |  |
| `bmad-workflow-builder` | [BW] Build / [AW] Analyze / [CW] Convert a workflow or skill |  |
| `bmad-module-builder` | [IM] Ideate / [CM] Create / [VM] Validate a module |  |
| `bmad-eval-runner` | Run a skill's evals and report results |  |

## Web Design Studio (WDS) {v6.12.4}

| Command | Description | Important |
|---|---|---|
| `wds-0-project-setup` | Project onboarding — project type, complexity, tech stack, routes to the right phase |  |
| `wds-0-alignment-signoff` | Stakeholder alignment and sign-off before starting |  |
| `wds-1-project-brief` | Project brief — foundation for all design work |  |
| `wds-2-trigger-mapping` | Map business goals to user psychology (personas, driving forces) |  |
| `wds-3-scenarios` | UX scenario outlines from the Trigger Map |  |
| `wds-4-ux-design` | Detailed visual specifications, scenario by scenario |  |
| `wds-5-agentic-development` | AI-assisted development, testing and reverse engineering |  |
| `wds-6-asset-generation` | Generate visual and text assets from the specs |  |
| `wds-7-design-system` | Create, import, browse and maintain design-system components and tokens |  |
| `wds-8-product-evolution` | Brownfield improvements — the WDS pipeline in miniature |  |

## Help & Navigation {v6}
| Command | Description | Important |
|---|---|---|
| `bmad-help` | [BH] Where am I in the workflow, what to do next — accepts a free-text question as args | ★ |
| `bmad-party-mode` | [PM] Multi-agent roundtable discussion |  |
| `bmad-sprint-status` | [SS] Summarize sprint status and route to the next workflow | ★ |

## Agents (personas) {v6}
| Command | Description | Important |
|---|---|---|
| `bmad-agent-analyst` | Mary — business analyst, requirements |  |
| `bmad-agent-pm` | John — product manager, PRD |  |
| `bmad-agent-architect` | Winston — system architect |  |
| `bmad-agent-ux-designer` | Sally — UX designer |  |
| `bmad-agent-dev` | Amelia — developer, story execution |  |
| `bmad-agent-tech-writer` | Paige — tech writer (actions: write, mermaid, validate, explain, update-standards) |  |
| `bmad-tea` | Murat — test architect |  |

## Phase 1 — Analysis {v6}
| Command | Description | Important |
|---|---|---|
| `bmad-brainstorming` | [BP] Guided brainstorming with one or more techniques |  |
| `bmad-market-research` | [MR] Competitive landscape, customer needs, trends |  |
| `bmad-domain-research` | [DR] Industry/domain deep dive |  |
| `bmad-technical-research` | [TR] Technical feasibility and architecture options |  |
| `bmad-product-brief` | [CB] Nail down the product idea in a brief | ★ |
| `bmad-prfaq` | [WB] Working Backwards PRFAQ challenge |  |
| `bmad-forge-idea` | [FI] Pressure-test an idea until it hardens or dies |  |

## Phase 2 — Planning {v6}
| Command | Description | Important |
|---|---|---|
| `bmad-prd` | [PRD] Create, update or validate a PRD | ★ |
| `bmad-ux` | [CU] UX patterns and design specifications |  |
| `bmad-spec` | [SP] Distill any input into a SPEC kernel |  |

## Phase 3 — Solutioning {v6}
| Command | Description | Important |
|---|---|---|
| `bmad-architecture` | [CA] Architecture spine of invariants | ★ |
| `bmad-create-epics-and-stories` | [CE] Decompose PRD into backlog | ★ |
| `bmad-check-implementation-readiness` | [IR] DoR gate — PRD, UX, Architecture and Epics aligned | ★ |

## Workflow orchestration {v6}
| Command | Description | Important |
|---|---|---|
| `bmad-sprint-planning` | [SP] Generate sprint-status from epics | ★ |
| `bmad-create-story` | [CS] Detail a single story (action `validate` → [VS] Validate Story) | ★ |
| `bmad-dev-story` | [DS] Implement a story with architecture guidance | ★ |
| `bmad-code-review` | [CR] Review code changes — issues → back to DS, approved → next CS | ★ |
| `bmad-checkpoint-preview` | [CK] Human-in-the-loop walkthrough of a change |  |
| `bmad-qa-generate-e2e-tests` | [QA] Generate API/E2E tests for implemented code |  |
| `bmad-retrospective` | [ER] Debrief after epic completion |  |
| `bmad-story-automator` | [SA] Automate create → dev → QA → review → retro across an epic |  |

## Anytime {v6}
| Command | Description | Important |
|---|---|---|
| `bmad-quick-dev` | [QQ] Intent in, code out — clarify, plan, implement, review | ★ |
| `bmad-correct-course` | [CC] Handle a significant change mid-sprint | ★ |
| `bmad-investigate` | [IN] Forensic bug/incident investigation |  |
| `bmad-document-project` | [DP] Document a brownfield project |  |
| `bmad-generate-project-context` | [GPC] Generate a lean project-context.md for AI agents | ★ |
| `bmad-index-docs` | [ID] Build an index.md of a docs folder |  |
| `bmad-shard-doc` | [SD] Split a large doc (>500 lines) by sections |  |

## Reviews {v6}
| Command | Description | Important |
|---|---|---|
| `bmad-review-adversarial-general` | [AR] Cynical review, findings report |  |
| `bmad-review-edge-case-hunter` | [ECH] Exhaustive edge-case / boundary analysis |  |
| `bmad-editorial-review-prose` | [EP] Copy-edit prose |  |
| `bmad-editorial-review-structure` | [ES] Structural edit — cuts and reorganization |  |
| `bmad-advanced-elicitation` | Push the LLM to critique its last output (socratic, pre-mortem, red team…) |  |

<!-- Add new commands above this line, one row per entry, under the right category (create a new category section if none fits). Tag each section {v6.12.4} (current) or {v6} (legacy, hidden by default). -->
