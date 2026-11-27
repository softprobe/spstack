---
name: no-comments
description: "Review comments in a diff with a fresh, skeptical perspective, remove noise, and preserve rationale that code cannot explain. Use for /no-comments or \"strip comments before review\"."
disable-model-invocation: true
---

# No comments

Spawn Comment Sicko. Act on accepted findings.

Defer to Comment Sicko's fresh perspective. Call a review independent only after a separate reviewer returned a report that you inspected; a spawn attempt is not a report. If no independent reviewer is available or no report is returned, perform the review yourself from the role instructions and disclose that it was not independent.

## Scope

Use the caller's files or diff. Otherwise use the current diff against the base branch, default `main`, including the working tree.

## Steps

1. Spawn `Task` with `subagent_type: "comment-sicko"`. Pass the scope. Pick each subagent's reasoning level for the job, per the Subagents section of the **poteto-mode** skill. Do not restate its rules.
2. Inspect its report and diff. Reject application-code edits, scope escapes, exception-protected deletions, misstated `MUST KILL` reasons, and claims contradicted by evidence. Check nearby code and relevant context outside the diff: contracts, design docs, ADRs, issues, PRs, history, and context supplied by the caller. Treat specific context supplied by the caller as evidence, identify it as caller-provided, and do not require code corroboration to preserve it. Keep concise rationale comments for durable, non-obvious design choices or constraints beside the code they inform. Do not treat the absence of a code-level explanation as evidence that the rationale is false. If a specific, useful rationale is not confirmed or refuted by available context, preserve it as unverified and report that status. If code and a rationale source conflict, report the conflict and possible code defect; do not assume the comment is wrong. Remove or correct rationale only when current authoritative context establishes it is stale, redundant, or no longer useful. Audit missed scoped lint and TypeScript suppressions. Correctness or safety suppressions stay actionable `MUST KILL`s. Revert and rerun one rejected report with the failure named. Reject a second, report it open, and fail `/no-comments`.
3. Fix trivial accepted flags directly by deleting a dead path, dropping a parameter, or using the real API. If any fix needs a shape, run `/architect` once for the accepted set and surrounding code. Stop at the sketch. Architect shapes. Step 4 implements.
4. Implement the smallest root-cause fix in scope. Remove every named workaround. Flag practical enforcement gaps and conflicts separately. If the root cause is out of scope, land the smallest in-scope fix and report the rest open. The **principle-fix-root-causes** and **principle-redesign-from-first-principles** skills guide intent only. Neither authorizes widening the fence nor fixing instances outside it. Never bolt on symptom guards.
5. Constraint comments say `do not remove`, `do not change wording`, or `talk to X before changing`. Leave keeps about things we cannot change and valid rationale comments. Offer the cheapest in-scope type, runtime, test, or CI lint when a practical enforcement gap exists. Wait for interactive approval. Unattended and eval require caller pre-approval. If approved, encode then keep any rationale explaining why the enforcement exists. Otherwise keep the rationale, report the enforcement gap open, and sketch out-of-scope work.
6. Report deletions, rationale comments kept or removed with evidence and provenance (including caller-provided context), any rationale preserved as unverified, restored comments, reruns, architect sketch, fixes, encoding offers, encodings, unenforced constraints, whether an independent report was actually received and inspected, and other open work.
