---
name: arena
description: Compare independent implementations or designs for one brief, select a base, and combine useful parts. Use for /arena or when one attempt could lock in the wrong shape.
---

# Arena

Use an arena when a non-trivial design or artifact has more than one viable shape. Every candidate gets the same prompt.

## Phase A: Frame

1. Name the artifact each candidate will produce.
2. Write three to six concrete criteria for success. Candidates see the task, not the rubric.
3. Read `.agents/pstack-models.yaml` or `~/.gemini/config/pstack-models.yaml` if present. Use configured `arena runners` model tiers (`inherit`, `flash_lite`, `flash`, `pro`) when set; otherwise let candidates inherit the current model (`Model: "inherit"`).
4. Give each candidate a separate output location. For code, use `Workspace: "share"` or `"branch"` on `invoke_subagent`, or a separate git worktree; otherwise use a separate directory under `<appDataDir>/brain/<conversation-id>/scratch/`.

## Phase B: Fan out

Use `invoke_subagent` when delegation is permitted. Spawn independent candidates (`TypeName: "poteto-agent"` or `"self"`) with the same task and provide the path to shared grounding. Ask each candidate for the artifact and a short rationale. Subagents run asynchronously and notify you on completion. If delegation is disallowed, run the candidates serially in separate output directories.

If no candidate returns an artifact, report that. If some return, continue with those and record the dropout.

## Phase C: Cross-review

When delegation is permitted, spawn an independent reviewer (`invoke_subagent` with `TypeName: "research"` or `"self"`), and give it the rubric and candidates labeled by path. Ask it to score each criterion and recommend a base. If no independent reviewer can run, skip this phase and say why.

## Phase D: Pick a base

Read every candidate. Score each against the rubric, criterion by criterion. Compare the independent review when available. Pick the base that a maintainer can extend with the fewest hidden rules.

## Phase E: Graft

Read each losing candidate once more for ideas worth carrying over. Fold in only changes that improve the base without breaking its core shape. If candidates converge, note the agreement and skip grafting.

## Phase F: Verify

Verify the synthesized artifact against the original brief. Revisit the design if verification exposes a missed alternative or a structural flaw.

## Output

Return the synthesized artifact and a short note that names the base, the accepted grafts, rejected alternatives, missing candidates or review, and verification evidence.
