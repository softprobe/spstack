### Orchestrate

Coordinate a long-running project made of many independent work units. The coordinator owns scope, dependencies, and review; each worker owns only the unit assigned to it.

Use Codex collaboration tools when the current session exposes them and the user and project permit delegation. Otherwise work serially, reduce the active scope, or report why the requested parallel program cannot proceed. Do not assume workers run in the cloud or persist after the session ends.

#### Set up the program

- Define the program goal, completion checks, phases, dependencies, and decisions that require the user.
- Keep durable state in a project plan or checkpoint under the repository's documentation convention. Record each unit's owner, paths, branch or worktree, current revision, evidence, and next action.
- Start with one representative unit and take it through implementation, review, and landing before expanding the pattern.
- Keep delegation bounded by the available Codex tools. Give each worker a complete brief with scope, allowed paths, forbidden side effects, and the evidence to return.

#### Coordinate work

- Give each writing worker its own branch or worktree. Avoid overlapping file ownership unless one unit explicitly depends on another.
- Start dependent work only after its prerequisite artifact or revision is available. Include the full relevant decisions and reports in a handoff; do not assume workers can see each other's context.
- Review the actual diff or artifact and verify the completion evidence. A worker summary and green CI are inputs, not proof by themselves.
- Use an independent reviewer for risky or user-facing work when the session can provide one. If it cannot, review directly and state that the review was not independent.
- If a worker stalls, ask for a checkpoint through the available collaboration tool. Retry based on the failure cause, then narrow or drop work that remains stuck.
- Check live PR and CI state before reporting. Reassess review evidence after each push because it applies to a specific revision.
- Use an automation or scheduled task only when Codex exposes a suitable feature and the user has asked for ongoing follow-up. Otherwise keep the work in the active session and leave a durable checkpoint before stopping.

#### Close or hand off

- Account for every unit as completed, active, blocked, replaced, or dropped.
- Stop at the user's stated boundary for external actions such as merging or publishing.
- Summarize what landed, each PR's current state and evidence, dropped work, open decisions, and the next action.
