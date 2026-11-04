---
name: no-comments
description: Review comments in a diff with a fresh, skeptical perspective, remove accepted comments, and fix accepted workaround flags. Use for $no-comments or "strip comments before review".
---

# No comments

Use a reviewer that did not write the comments. Read [`references/comment-sicko.md`](references/comment-sicko.md) and include its role instructions in a Codex subagent brief when collaboration tools are available and delegation is permitted. If not, perform the review yourself from the role instructions and disclose that the review was not independent.

## Scope

Use the caller's files or diff. Otherwise use the current diff against the base branch, default `main`, including the working tree.

## Review and fix

1. Give the reviewer the exact scope and ask it to report only. It must not edit application code.
2. Inspect the report and diff. Reject scope escapes, exception-protected deletions, incorrect `MUST KILL` flags, and claims contradicted by the source. Audit scoped lint and TypeScript suppressions.
3. Before accepting a claim that an external constraint requires a comment, verify the constraint on a live path. Use `$how` or `$why` when source alone does not resolve it.
4. Delete accepted comments. Fix trivial flags directly. If a fix needs a design, use `$architect` for the accepted set and implement the root cause. Keep edits within the requested scope.
5. If an independent reviewer rejected scope or made an unsupported claim, rerun once with the issue named. If the second report repeats it, reject that report and state the open finding.
6. Report the deletion count, accepted fixes, rejected claims, review independence, and remaining constraints.
