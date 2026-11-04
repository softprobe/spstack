# Run a long task safely

A long task needs a finish condition, a way to verify progress, and a checkpoint the user can inspect later. Codex plugin skills do not guarantee that a session continues after Codex closes, or that Codex wakes itself on a timer.

## Write a clear handoff

State the goal, completion checks, workspace, permissions, and what to do at a real dead end:

```text
$poteto-mode I'm stepping away. Migrate every caller to the new parser in a fresh worktree off <base>.
Done means zero old callers, all parser fixtures pass, and the old API is deleted.
Keep a decision log. Commit the work in small verified steps. Stop only at a real blocker and write down what remains.
```

A finish condition gives Codex an observable result to pursue. A worktree protects other work. A decision log makes the run easier to review.

## Know the session boundary

Do not assume that a Codex session remains active after the app closes, or that a skill can schedule its own wakeups. If the current environment exposes a supported background task or automation feature, use it only when it fits the request. Otherwise keep the work in the active session.

Before you step away, ask Codex to save a checkpoint with the branch, changed files, completed checks, remaining steps, and any risks. Use the [Pause safely playbook](../../skills/poteto-mode/playbooks/pause-safely.md) when you want to stop and resume later. Use the [Session pickup playbook](../../skills/poteto-mode/playbooks/session-pickup.md) to continue from a checkpoint or pushed branch.

## Review the decision trail

Use [`$show-me-your-work`](../../skills/show-me-your-work/SKILL.md) to maintain a local TSV with each decision and its evidence. Ask for a final audit before handing the work back:

```text
$show-me-your-work review the decision log against the work and verification evidence
```

Use [`$ketchup`](../../skills/ketchup/SKILL.md) for a shorter report of what changed in the current conversation and what still needs your attention.

## Run a queue or a program

Use Autopilot-stack when you want a queue of related PRs prepared for your review. Use Autopilot-full only when you explicitly want the workflow to merge and the active environment supports the required independent verification and forge operations. Use Orchestrate for a program that needs one coordinator to track multiple independent tasks.

These playbooks rely on Codex collaboration tools when available. If the session cannot start independent workers, they continue serially where possible and report the gap. They do not provide persistent background execution.

```text
$poteto-mode prepare these five independent changes as verified PRs. Do not merge them.
```

## Avoid time-based goals

A duration is not a finish condition. “Work on this for four hours” gives Codex nothing to check. Name a command, artifact, user flow, or state that proves completion.

Next: [Use the principles](./08-principles.md).
