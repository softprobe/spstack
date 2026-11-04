### Multi-phase or multi-PR plan

Use this when work has independent phases, dependencies, or multiple pull requests. The plan is the deliverable. Do not implement it unless the user also asked you to start.

1. Skip a written plan for a small change with an obvious approach.
2. State the goal, constraints, and a completion check. Resolve uncertain product behavior with a small prototype when the repository can show the answer.
3. Explore the relevant code and documentation. Split independent research across Codex collaborators only when the current session provides them and the user and project permit delegation. Otherwise explore serially.
4. Save a durable plan in the repository when the work will span sessions; follow the project's documentation convention, or use `docs/plans/<short-name>.md`. Keep a shorter plan in the conversation for work that fits the session.
5. Break work into phases or PRs with dependencies, owned paths, observable outcomes, and evidence. Keep each unit small enough to review and verify on its own.
6. Include unit, integration, live, and performance checks only when they apply. Name the actual command or driver and the pass condition. For user-facing behavior, verify the real interface when a suitable driver exists. Explain any unverified surface or missing tool.
7. Name who is allowed to push, retarget, or merge each PR. Treat requests to plan as distinct from requests to begin implementation or merge.
8. Check the plan structure with the `check-plan.mjs` script beside the loaded `poteto-mode/SKILL.md`. Run it with `node <script-path> <plan.md>` and fix every reported issue.

Use this outline and remove sections that do not apply:

```markdown
# <Program> plan

## Goal and constraints

<What changes, for whom, and what must stay true.>

## Phases

### Phase 1: <verb phrase>

**Depends on.** None.
**Owner.** <person or role>
**Files.** <paths or globs>
**Outcome.** <observable result>
**Done when.** <commands, scenarios, or review evidence>
**PR and landing.** <base branch, reviewer, and who may merge>

## Verification

<Checks shared by multiple phases, with commands and pass conditions.>

## Dependencies and risks

<External dependencies, tool limits, and risks with a response.>

## Decisions

<Open choices, the options, and evidence that can settle each one.>

## References

<Relevant repository docs, issues, and prototype artifacts.>
```

**Reply:** the plan path or conversation checklist, phase dependencies, open decisions, and any verification gap that affects the plan.
