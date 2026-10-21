# Bmad Commands

BMad skills are invoked as slash commands in Claude Code (e.g. `/bmad-prd`) or by naming them in chat. The `[CODE]` prefix is the agent menu code shown by `bmad-help`. Run each workflow in a fresh context window (`/clear`).

## Installation

| Command | Description | Important |
|---|---|---|
| `npx bmad-method install` | install initial de Bmad, prerequis UV | ★ |
| `bmad-bmb-setup` | [SB] Install or update the BMad Builder module config |  |
| `bmad-customize` | [BC] Override how an agent or workflow behaves (persistent facts, rules) |  |

## Help & Navigation

| Command | Description | Important |
|---|---|---|
| `bmad-help` | [BH] Where am I in the workflow, what to do next — accepts a free-text question as args | ★ |
| `bmad-party-mode` | [PM] Multi-agent roundtable discussion |  |
| `bmad-sprint-status` | [SS] Summarize sprint status and route to the next workflow | ★ |

## Agents (personas)

| Command | Description | Important |
|---|---|---|
| `bmad-agent-analyst` | Mary — business analyst, requirements |  |
| `bmad-agent-pm` | John — product manager, PRD |  |
| `bmad-agent-architect` | Winston — system architect |  |
| `bmad-agent-ux-designer` | Sally — UX designer |  |
| `bmad-agent-dev` | Amelia — developer, story execution |  |
| `bmad-agent-tech-writer` | Paige — tech writer (actions: write, mermaid, validate, explain, update-standards) |  |
| `bmad-tea` | Murat — test architect |  |

## Phase 1 — Analysis

| Command | Description | Important |
|---|---|---|
| `bmad-brainstorming` | [BP] Guided brainstorming with one or more techniques |  |
| `bmad-market-research` | [MR] Competitive landscape, customer needs, trends |  |
| `bmad-domain-research` | [DR] Industry/domain deep dive |  |
| `bmad-technical-research` | [TR] Technical feasibility and architecture options |  |
| `bmad-product-brief` | [CB] Nail down the product idea in a brief | ★ |
| `bmad-prfaq` | [WB] Working Backwards PRFAQ challenge |  |
| `bmad-forge-idea` | [FI] Pressure-test an idea until it hardens or dies |  |

## Phase 2 — Planning

| Command | Description | Important |
|---|---|---|
| `bmad-prd` | [PRD] Create, update or validate a PRD | ★ |
| `bmad-ux` | [CU] UX patterns and design specifications |  |
| `bmad-spec` | [SP] Distill any input into a SPEC kernel |  |

## Phase 3 — Solutioning

| Command | Description | Important |
|---|---|---|
| `bmad-architecture` | [CA] Architecture spine of invariants | ★ |
| `bmad-create-epics-and-stories` | [CE] Decompose PRD into backlog | ★ |
| `bmad-check-implementation-readiness` | [IR] DoR gate — PRD, UX, Architecture and Epics aligned | ★ |

## Workflow orchestration

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

## Anytime

| Command | Description | Important |
|---|---|---|
| `bmad-quick-dev` | [QQ] Intent in, code out — clarify, plan, implement, review | ★ |
| `bmad-correct-course` | [CC] Handle a significant change mid-sprint | ★ |
| `bmad-investigate` | [IN] Forensic bug/incident investigation |  |
| `bmad-document-project` | [DP] Document a brownfield project |  |
| `bmad-generate-project-context` | [GPC] Generate a lean project-context.md for AI agents | ★ |
| `bmad-index-docs` | [ID] Build an index.md of a docs folder |  |
| `bmad-shard-doc` | [SD] Split a large doc (>500 lines) by sections |  |

## Reviews

| Command | Description | Important |
|---|---|---|
| `bmad-review-adversarial-general` | [AR] Cynical review, findings report |  |
| `bmad-review-edge-case-hunter` | [ECH] Exhaustive edge-case / boundary analysis |  |
| `bmad-editorial-review-prose` | [EP] Copy-edit prose |  |
| `bmad-editorial-review-structure` | [ES] Structural edit — cuts and reorganization |  |
| `bmad-advanced-elicitation` | Push the LLM to critique its last output (socratic, pre-mortem, red team…) |  |

## Test Architecture (TEA)

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

## Creative Intelligence Suite (CIS)

| Command | Description | Important |
|---|---|---|
| `bmad-cis-innovation-strategy` | [IS] Disruption opportunities, business model innovation |  |
| `bmad-cis-problem-solving` | [PS] Systematic problem-solving |  |
| `bmad-cis-design-thinking` | [DT] Human-centered design process |  |
| `bmad-cis-storytelling` | [ST] Narrative frameworks |  |

## Builder (BMB)

| Command | Description | Important |
|---|---|---|
| `bmad-agent-builder` | [BA] Build an agent / [AA] Analyze an agent |  |
| `bmad-workflow-builder` | [BW] Build / [AW] Analyze / [CW] Convert a workflow or skill |  |
| `bmad-module-builder` | [IM] Ideate / [CM] Create / [VM] Validate a module |  |
| `bmad-eval-runner` | Run a skill's evals and report results |  |

<!-- Add new commands above this line, one row per entry, under the right category (create a new category section if none fits). -->
