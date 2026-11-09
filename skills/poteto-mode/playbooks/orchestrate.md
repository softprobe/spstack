### Orchestrate

Coordinate a long-running project made of many independent work units. The coordinator owns scope, dependencies, and review; each worker owns only the unit assigned to it.

Use Antigravity subagent tools (`invoke_subagent`, `manage_subagents`, `send_message`) when the user and project permit delegation. Otherwise work serially, reduce the active scope, or report why the requested parallel program cannot proceed.

#### Set up the program

- Define the program goal, completion checks, phases, dependencies, and decisions that require the user.
- Keep durable state in a project plan (`docs/plans/<short-name>.md`) or Antigravity artifact (`<appDataDir>/brain/<conversation-id>/task.md`). Record each unit's owner (`conversation://<conversation-id>`), paths, branch or worktree, current revision, evidence, and next action.
- Start with one representative unit and take it through implementation, review, and landing before expanding the pattern.
- Give each subagent a complete brief with scope, allowed paths, forbidden side effects, and the evidence to return.

#### Coordinate work

- Give each writing worker its own branch or worktree (`Workspace: "share"` or `"branch"` on `invoke_subagent`, or a dedicated git worktree). Avoid overlapping file ownership unless one unit explicitly depends on another.
- Start dependent work only after its prerequisite artifact or revision is available. Include the full relevant decisions and reports in a handoff; do not assume workers can see each other's context.
- Review the actual diff or artifact and verify the completion evidence. A worker summary and green CI are inputs, not proof by themselves.
- Use an independent reviewer subagent for risky or user-facing work when delegation is permitted. If it cannot run, review directly and state that the review was not independent.
- If a worker stalls, check its state with `manage_subagents` or message it via `send_message`. Retry based on the failure cause, then narrow or drop work that remains stuck.
- Check live PR and CI state before reporting. Reassess review evidence after each push because it applies to a specific revision.
- Use `schedule` for in-conversation timers/cron or the `automation` skill (`/automation`) when the user has asked for recurring background follow-up. Otherwise keep the work in the active session and leave a durable checkpoint before stopping.

#### Close or hand off

- Account for every unit as completed, active, blocked, replaced, or dropped.
- Stop at the user's stated boundary for external actions such as merging or publishing.
- Summarize what landed, each PR's current state and evidence, dropped work, open decisions, and the next action.
