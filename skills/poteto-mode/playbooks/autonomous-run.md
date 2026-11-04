### Autonomous run

**You own the exit condition. Define done, then work toward it without needless pauses.**

1. State the exit condition as a checkable predicate before the first iteration.
2. Check whether the current Codex session exposes a supported background or event-driven feature. Use it only when it fits the request. Otherwise work in the active session. Do not promise that Codex will wake after the session or app ends.
3. Make the smallest change the evidence justifies. Verify it against the predicate. Commit when it advances the goal, and revert changes that did not help.
4. Address in-scope discoveries that support the goal. Put independent fixes in their own commits or pull requests. Ask only for irreversible actions, genuine product choices, or a real dead end.
5. Keep a decision trail with **show-me-your-work**. Log each completed unit and whether the predicate moved.
6. Stop when the predicate is met. If progress stalls, change the approach. Surface a real dead end instead of spinning, and never relax the predicate to claim success.

Before ending the session, leave a checkpoint with the branch, completed work, verification evidence, remaining steps, and risks.

**Reply:** the exit condition, iterations completed, what landed, what was reverted, and the final predicate state.
