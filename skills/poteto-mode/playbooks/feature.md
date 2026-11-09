### Feature

**You own the design. Plan, review, verify.** Use Antigravity subagents (`invoke_subagent`) for independent work when delegation is permitted. Otherwise implement serially.

Apply the **Scope gate** in [`../SKILL.md`](../SKILL.md) before design or implementation. Write the requested outcome and acceptance conditions in the checkpoint. Keep adjacent concerns as follow-ups unless evidence proves they block an acceptance condition.

1. `/how` over the affected subsystem.
2. `/architect` for parallel design exploration.
3. Write the throughput checkpoint as four todo items. A dimension that genuinely does not apply (single file, no fan-out) keeps its item with `n/a: <reason>` rather than being dropped:
   - **Blocking first steps.** Gates run before fan-out.
   - **Independent workstreams.** Disjoint files, services, or layers parallelize. Shared writes serialize.
   - **Shared mutable state.** Default to splitting the target (the **separate-before-serializing-shared-state** principle skill). Serialize only for real invariants.
   - **Smallest safe decomposition.** If one worker is best, name why.
4. Delegate code-writing via `invoke_subagent` (`TypeName: "poteto-agent"` or `"self"`) when the request permits it. Use `Model: "inherit"` unless a `feature` model tier (`flash_lite`, `flash`, `pro`) is configured in `.agents/pstack-models.yaml` or `~/.gemini/config/pstack-models.yaml`. Give the delegate a specific scope, data shape, and success criteria. When several valid shapes exist, use **arena** (`/arena`) to compare them first. If delegation is disallowed, implement serially and report that no independent review occurred. Comments follow **Comments**. Keep edits surgical, re-ground against source, update every consumer of a shared primitive, and verify each unit before committing.
5. Verify on the matching surface. "Inconclusive" or wrong-surface is not a pass. Flag it.
6. Rebase into small, ordered commits. Stack follow-ups.
   Use the **sequence-verifiable-units** principle skill, building, verifying, and committing each small unit before the next.
7. If the design is contested, `/interrogate` before shipping.
8. Run **Opening a PR**.

Code-coupled work (one feature, one migration) has one owner and an inline checkpoint. Use delegation only after blocking decisions are settled. Parent-level fan-out is for slices that produce independent artifacts (audits, cross-subsystem investigations, competing experiments). Rewrite the checkpoint at phase boundaries. Keep one owner per writing branch.

**Reply:** what you built, what you chose and why, the throughput checkpoint, open decisions. Tables for design alternatives.
