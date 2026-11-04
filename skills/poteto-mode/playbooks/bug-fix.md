### Bug fix

**You own this task. Plan, review, and verify.** Use Codex collaborators for independent investigation or implementation only when the current session exposes them and delegation is permitted. Otherwise handle the work serially.

Be scientific. Every shipped line traces to runtime evidence. Belt-and-suspenders that "might help" is a hypothesis, not a fix. It does not ship. When evidence refutes a hypothesis, revert what it motivated. The smallest change the evidence justifies ships, nothing more.

1. Reproduce it yourself on the matching surface through the project's harness or Codex browser and computer-use tools when available. Ask the user to reproduce only when the available drivers cannot reach the target, and say why. If it won't reproduce directly, synthesize the trigger, tighten conditions, or instrument until it fires.
2. Binary-search the cause. Form the candidate hypotheses, then rule them out until one survives. Seed them with `how` over the affected subsystem and the **why** skill for regression history. Each pass, take the split that cuts the most remaining problem space, get runtime evidence, and eliminate. When program state is unclear, add instrumentation or logging and read it as the code runs. Don't guess. Keep driving in the active session while it remains available. Confirm the surviving *mechanism* with runtime evidence before the step-3 architect/interrogate work.
3. Plan the fix. If it crosses a function boundary, use `architect` first. Delegate implementation when Codex collaboration is available and permitted. Use the current session model unless a supported preference for bug-fix is configured. Otherwise implement serially and report that no independent implementation review ran.
4. Verify on the same surface. The original repro now passes. "Inconclusive" or wrong-surface is not a pass. Flag it. Unit tests show branch behavior, not bug absence.
5. Stage the commits so the failing repro lands before the fix in git history. See the **tdd** skill for the failing-test-first cadence when the bug has a cheap local test path. Skip it when the test would be expensive, integration-heavy, or unclear.
   This is the canonical **sequence-verifiable-units** principle skill, the failing test first and the fix on top.
6. Run **Opening a PR**.

**Reply:** what was broken, root cause, fix, how you verified. Paste failing-then-passing repro output verbatim.
