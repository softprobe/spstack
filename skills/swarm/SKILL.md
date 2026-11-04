---
name: swarm
description: Run independent parallel checks across slices or race attempts, then combine the evidence into one report. Use for $swarm, "swarm this", or parallel coverage and exploration.
---

# Swarm

Use a swarm when work divides into independent slices, or when several attempts at one brief would reveal useful alternatives. Keep ownership and outputs separate.

## Frame

1. State the completion predicate and the artifact or report the swarm must return.
2. Choose a shape: partition into slices, race identical briefs, or combine both.
3. For a race, declare `first pass`, `rank all`, or `best of` before running candidates.
4. Read `$CODEX_HOME/pstack-models.yaml`, or `~/.codex/pstack-models.yaml` when `CODEX_HOME` is unset, only if the session exposes supported model selection. Otherwise use the current model.
5. Give every worker a complete brief with the goal, owned slice, exact evidence to collect, output format, and verification steps.

## Fan out

Use Codex collaboration tools only when they are available and the user and project instructions permit delegation. Follow the active tool schema. Ask for one independent task per worker. Use separate worktrees or output directories for workers that write. If the session cannot provide isolation, keep workers read-only or run them serially.

Do not describe a worker as running in the cloud or on another machine unless the active Codex tool confirms that behavior. If collaboration is unavailable, run the same slices in sequence and report that they were sequential.

If a worker stops, continue with the remaining workers and record the missing slice.

## Aggregate

Check every result against the named evidence. For measured work, require the exact revision and method. A missing result is a coverage gap, not a pass. For a race, apply the rule declared in Phase A. Combine findings that share a cause. Do not paste raw worker output.

## Report

Return the completion predicate, the result per slice or candidate, verified issues, gaps or dropouts, and the selected race rule when one applies.
