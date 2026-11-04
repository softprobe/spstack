---
name: arena
description: Compare independent implementations or designs for one brief, select a base, and combine useful parts. Use for $arena or when one attempt could lock in the wrong shape.
---

# Arena

Use an arena when a non-trivial design or artifact has more than one viable shape. Every candidate gets the same prompt.

## Phase A: Frame

1. Name the artifact each candidate will produce.
2. Write three to six concrete criteria for success. Candidates see the task, not the rubric.
3. Read `$CODEX_HOME/pstack-models.yaml`, or `~/.codex/pstack-models.yaml` when `CODEX_HOME` is unset, only if the session exposes supported model selection. Use configured choices when accepted; otherwise let candidates inherit the current model.
4. Give each candidate a separate output location. Use a worktree for code; otherwise use a separate directory.

## Phase B: Fan out

Use Codex collaboration tools only when available and permitted. Follow their active schema. Spawn independent candidates with the same task and provide the path to shared grounding. Ask each candidate for the artifact and a short rationale. If the session cannot isolate work, keep candidates read-only or run them serially in separate output directories.

If no candidate returns an artifact, report that. If some return, continue with those and record the dropout.

## Phase C: Cross-review

When the session supports an independent reviewer, give it the rubric and candidates labeled by path. Ask it to score each criterion and recommend a base. Use a different supported model only when Codex exposes one and the user or project instructions permit it. If no independent reviewer can run, skip this phase and say why.

## Phase D: Pick a base

Read every candidate. Score each against the rubric, criterion by criterion. Compare the independent review when available. Pick the base that a maintainer can extend with the fewest hidden rules.

## Phase E: Graft

Read each losing candidate once more for ideas worth carrying over. Fold in only changes that improve the base without breaking its core shape. If candidates converge, note the agreement and skip grafting.

## Phase F: Verify

Verify the synthesized artifact against the original brief. Revisit the design if verification exposes a missed alternative or a structural flaw.

## Output

Return the synthesized artifact and a short note that names the base, the accepted grafts, rejected alternatives, missing candidates or review, and verification evidence.
