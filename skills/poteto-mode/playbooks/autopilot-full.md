### Autopilot full

Drive an explicitly scoped queue of pull requests through implementation, verification, review, and merge. Follow the user's stated boundary: a request to prepare or open PRs stops at that point; a request to land or merge authorizes those in-scope merges.

1. Record the queue, dependencies, excluded work, and completion checks. Resolve the repository's forge and use one set of tools for the run.
2. Give each independent PR a clear owner and non-overlapping scope. Use `invoke_subagent` (`TypeName: "poteto-agent"` or `"self"`, with `Workspace: "share"` or `"branch"` or a separate git worktree) when delegation is permitted. If unavailable, work serially.
3. Save progress in the repository or conversation artifact (`<appDataDir>/brain/<conversation-id>/`) after each meaningful unit. For a long run, leave a durable checkpoint with PRs, branch names, revisions, subagent state (`conversation://<conversation-id>`), checks, and next actions.
4. Open each PR when it has a reviewable change. Follow `opening-a-pr.md`. Run the repository's relevant checks on the pushed revision and report the exact result. Triage review findings against the current diff using `../references/review-finding-triage.md`.
5. Verify each PR at its current head. Use an independent reviewer subagent (`invoke_subagent`) when delegation is permitted. Re-run behavior checks on the actual interface when a suitable driver exists. If an independent review or live check is unavailable, report the gap and do not label it complete.
6. Recheck the base, checks, review threads, and merge state before landing. Merge only PRs within the user's explicit scope and only when their required checks and review gates pass. Respect repository branch protections; do not bypass them.
7. For a stack, land bottom-up. After a parent lands, move its child to the updated base and recheck the child before merging. Do not rewrite stack topology outside the user's scope.
8. Keep follow-up work in the active session unless the user requested a recurring background automation via the `automation` skill (`/automation`).
9. Stop on an unresolved product decision, an irreversible action outside the request, or a blocker that cannot be resolved safely. Report the evidence and the smallest needed decision.

**Reply:** the completed queue, each PR's final state and revision, its checks and review evidence, what was merged, and any remaining gap or decision.
