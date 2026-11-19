### Feature

**You own the design. Plan, review, verify.** Use Codex collaborators for independent work when available and permitted. Otherwise implement serially.

Apply the **Scope gate** in [`../SKILL.md`](../SKILL.md) before design or implementation. Write the requested outcome and acceptance conditions in the checkpoint. Keep adjacent concerns as follow-ups unless evidence proves they block an acceptance condition.

1. `how` over the affected subsystem.
2. `architect` for parallel design exploration.
3. Write the throughput checkpoint as four todo items. A dimension that genuinely does not apply (single file, no fan-out) keeps its item with `n/a: <reason>` rather than being dropped:
   - **Blocking first steps.** Gates run before fan-out.
   - **Independent workstreams.** Disjoint files, services, or layers parallelize. Shared writes serialize.
   - **Shared mutable state.** Default to splitting the target (the **separate-before-serializing-shared-state** principle skill). Serialize only for real invariants.
   - **Smallest safe decomposition.** If one worker is best, name why.
4. Delegate code-writing when Codex collaboration tools are available and the request permits it. Use the current session model unless a supported feature preference is configured. Give the delegate a specific scope, data shape, and success criteria. When several valid shapes exist, use **arena** to compare them first. If collaboration is unavailable, implement serially and report that no independent review occurred. Do not leave a parent waiting on a nested delegate. Comments follow **Comments**. Keep edits surgical, re-ground against source, update every consumer of a shared primitive, and verify each unit before committing.
5. Verify on the matching surface. "Inconclusive" or wrong-surface is not a pass. Flag it.
6. Rebase into small, ordered commits. Stack follow-ups.
   Use the **sequence-verifiable-units** principle skill, building, verifying, and committing each small unit before the next.
7. If the design is contested, `interrogate` before shipping.
8. Run **Opening a PR**.

Code-coupled work (one feature, one migration) has one owner and an inline checkpoint. Use delegation only after blocking decisions are settled. Parent-level fan-out is for slices that produce independent artifacts (audits, cross-subsystem investigations, competing experiments). Rewrite the checkpoint at phase boundaries. Keep one owner per writing branch.

**Reply:** what you built, what you chose and why, the throughput checkpoint, open decisions. Tables for design alternatives.
