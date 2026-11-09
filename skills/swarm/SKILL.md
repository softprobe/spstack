---
name: swarm
description: Run independent parallel checks across slices or race attempts, then combine the evidence into one report. Use for /swarm, "swarm this", or parallel coverage and exploration.
---

# Swarm

Use a swarm when work divides into independent slices, or when several attempts at one brief would reveal useful alternatives. Keep ownership and outputs separate.

## Frame

1. State the completion predicate and the artifact or report the swarm must return.
2. Choose a shape: partition into slices, race identical briefs, or combine both.
3. For a race, declare `first pass`, `rank all`, or `best of` before running candidates.
4. Read `.agents/pstack-models.yaml` or `~/.gemini/config/pstack-models.yaml` if present. Use the configured `swarm workers` model tier (`inherit`, `flash_lite`, `flash`, `pro`) when set; otherwise use `Model: "inherit"`.
5. Give every worker a complete brief with the goal, owned slice, exact evidence to collect, output format, and verification steps.

## Fan out

Use `invoke_subagent` when user and project instructions permit delegation. Spawn one subagent per slice (`TypeName: "research"` for read-only slices, or `"poteto-agent"` / `"self"` when running commands or writing files). Use `Workspace: "share"` or `"branch"`, a separate git worktree, or a separate scratch directory for workers that write. Subagents run in the background and automatically notify you when they finish; do not poll in a loop.

If delegation is unavailable or disallowed, run the same slices in sequence and report that they were sequential.

If a worker stops or fails, continue with the remaining workers and record the missing slice.

## Aggregate

Check every result against the named evidence. For measured work, require the exact revision and method. A missing result is a coverage gap, not a pass. For a race, apply the rule declared in Frame. Combine findings that share a cause. Do not paste raw worker output.

## Report

Return the completion predicate, the result per slice or candidate, verified issues, gaps or dropouts, and the selected race rule when one applies.
