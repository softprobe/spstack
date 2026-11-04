---
name: principle-prove-it-works
description: "Apply after completing a task, before declaring done. Verify against the real artifact (run the feature, read the actual value, inspect the diff), not a proxy, self-report, or 'it compiles.'"
---

Before following this upstream skill, read [the Codex adapter](../poteto-mode/CODEX-ADAPTER.md) and apply its tool, model, and path mappings.

# Prove It Works

Verify every task output by checking the real thing directly. Do not infer from proxies, self-reports, or "it compiles."

**Why:** Unverified work has unknown correctness. Indirect verification (file mtimes, output freshness, agent self-reports, cached screenshots) feels cheaper than direct observation. Acting on a wrong inference costs far more than checking the source.

Check the real thing, not a proxy:
- Check process liveness directly, not indirectly through derived state
- Read the actual value, not a cached or derived representation
- When verification fails, suspect the observation method before suspecting the system

## Verify the design claim

A behavior check proves that the chosen design works; it does not prove that every new entity, identifier, or boundary is necessary. For each architecture-defining addition, state the distinct user need or invariant it serves and check what fails if it is removed or derived from existing data. Check each use independently: a concept justified in one part of the system does not establish that it belongs in every API, assertion, storage key, or query. Keep behavior checks implementation-neutral so they can validate a simpler design too.

## Follow the repository's gate

Read the repository's instructions and local verification skill to find the required checks for the changed surface. Run those checks and report their results. Do not bypass a required check with a skip option unless the user explicitly asks. If a required check cannot run, report the blocker and leave verification incomplete.

## Script the check when you can

The strongest proof is a deterministic script that re-runs the same comparison, not a one-time eyeball. Write the script, run it, and keep its output as an artifact a reviewer can re-run instead of trusting your word.

Keep the artifact visible for the human. Commit it only for large or complex work where the trail has to be auditable later, like a big port or migration (the **show-me-your-work** skill).
