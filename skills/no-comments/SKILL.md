---
name: no-comments
description: Review comments in a diff with a fresh, skeptical perspective, remove noise, and preserve rationale that code cannot explain. Use for $no-comments or "strip comments before review".
---

# No comments

Use a reviewer that did not write the comments. Read [`references/comment-sicko.md`](references/comment-sicko.md) and include its role instructions in a Codex subagent brief when collaboration tools are available and delegation is permitted. If tools are unavailable, delegation is not permitted, a spawn fails, or no report is returned, perform the review yourself from the role instructions and disclose that it was not independent. Call a review independent only after a separate reviewer returned a report that you inspected; a spawn attempt is not a report.

## Scope

Use the caller's files or diff. Otherwise use the current diff against the base branch, default `main`, including the working tree.

## Review and fix

1. Give the reviewer the exact scope and ask it to report only. It must not edit application code.
2. Inspect the report and diff. Reject scope escapes, exception-protected deletions, incorrect `MUST KILL` flags, and claims contradicted by evidence. Check nearby code and relevant context outside the diff: contracts, design docs, ADRs, issues, PRs, history, and context supplied by the caller. These sources may explain rationale that code cannot. Treat specific context supplied by the caller as evidence, identify it as caller-provided, and do not require code corroboration to preserve it. Keep concise rationale comments for durable, non-obvious design choices or constraints beside the code they inform. A valid comment does not excuse a code defect. Audit scoped lint and TypeScript suppressions.
3. Use `$how` or `$why` to investigate behavior when code is unclear, and follow non-code references for the reason behind a design choice or constraint. Do not treat the absence of a code-level explanation as evidence that the rationale is false. If a specific, useful rationale is not confirmed or refuted by available context, preserve it as unverified and report that status. If code and a rationale source conflict, report the conflict and possible code defect; do not assume the comment is wrong. Remove or correct rationale only when current authoritative context establishes it is stale, redundant, or no longer useful.
4. Delete accepted noise and narration; keep supported and unverified rationale that meets the rule above. Flag practical enforcement gaps and conflicts separately. Fix trivial code flags directly. If a fix needs a design, use `$architect` for the accepted set and implement the root cause. Keep edits within the requested scope.
5. If an independent reviewer rejected scope or made an unsupported claim, rerun once with the issue named. If the second report repeats it, reject that report and state the open finding.
6. Report deletions, rationale comments kept or removed with evidence and provenance (including caller-provided context), any rationale preserved as unverified, accepted fixes, rejected claims, whether an independent report was actually received and inspected, and remaining constraints.
