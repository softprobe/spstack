### Autopilot stack

Use `autopilot-full.md` to build and verify the requested PR queue, then stop before merging.

1. Stack a PR only when it depends on the code in its parent PR. Independent PRs target the repository's trunk branch.
2. Keep each child based on its parent branch. When a parent changes, restack children only within the user's requested scope and recheck each changed revision.
3. At handoff, make no further pushes, retargets, or rebases until the user asks to continue.

**Reply:** each PR's URL, base branch, current revision, checks, review evidence, and any remaining work.
