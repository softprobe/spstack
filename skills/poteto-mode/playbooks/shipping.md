### Shipping

Land a verified pull request or stack after the user asks to ship or merge it. For review and CI work without merge authorization, use `babysit.md` and stop at merge-ready.

1. Resolve the repository's forge and inspect the open PRs, their bases, current heads, review threads, and checks. Identify the lowest unmerged PR and any independent PRs that do not depend on it.
2. Verify each PR against the exact head that would land. Prefer a reviewer who did not write the change when Codex collaboration is available and permitted. Run the relevant unit and integration checks, plus a real-surface check for behavior that needs one. A self-review is useful but is not an independent verdict. Record unavailable checks as gaps.
3. If the head changes after review, rerun checks affected by the change and refresh the review. Compare the actual diff, not just commit IDs, when deciding whether prior evidence still applies.
4. Land only the contiguous verified run from the bottom of a stack. Merge one PR at a time with the resolved forge, then read it back to confirm it is merged before moving to its child.
5. Before each merge, confirm the target branch, current head, required checks, review state, and branch protection requirements. Do not force-push, bypass a required review, or enable auto-merge unless the user asked for that action and the repository supports it safely.
6. After a parent merges, move the child to the resulting base only when the user asked you to land the stack. Recheck conflicts, checks, and review evidence on the updated child.
7. Stop at the first unverified or blocked PR. Report the completed prefix, the PR that stopped progress, and its current evidence.

**Reply:** the PRs that merged, their resulting base and revision, the checks and review used, and any remaining blocker.
