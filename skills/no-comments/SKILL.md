---
name: no-comments
description: Review comments in a diff with a fresh, skeptical perspective, remove noise, and preserve concise rationale for durable constraints. Use for $no-comments or "strip comments before review".
---

# No comments

Use a reviewer that did not write the comments. Read [`references/comment-sicko.md`](references/comment-sicko.md) and include its role instructions in a Codex subagent brief when collaboration tools are available and delegation is permitted. If not, perform the review yourself from the role instructions and disclose that the review was not independent.

## Scope

Use the caller's files or diff. Otherwise use the current diff against the base branch, default `main`, including the working tree.

## Review and fix

1. Give the reviewer the exact scope and ask it to report only. It must not edit application code.
2. Inspect the report and diff. Reject scope escapes, exception-protected deletions, incorrect `MUST KILL` flags, and claims contradicted by the source. Keep concise rationale comments for durable, non-obvious constraints beside the code that enforces them. Check nearby code and its contract before accepting a keep. A valid comment does not excuse a code defect. Audit scoped lint and TypeScript suppressions.
3. Before accepting a claim that an invariant needs a comment, verify it against nearby code and its contract. Use `$how` or `$why` when the claim remains unclear.
4. Delete accepted noise and unsupported comments; keep concise rationale comments that meet the rule above. Fix trivial flags directly. If a fix needs a design, use `$architect` for the accepted set and implement the root cause. Keep edits within the requested scope.
5. If an independent reviewer rejected scope or made an unsupported claim, rerun once with the issue named. If the second report repeats it, reject that report and state the open finding.
6. Report deletions, rationale comments kept or removed with the reason, accepted fixes, rejected claims, review independence, and remaining constraints.
