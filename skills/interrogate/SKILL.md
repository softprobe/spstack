---
name: interrogate
description: "Use for \"interrogate\", \"adversarial review\", \"challenge this\", \"stress test this code\", \"find blind spots\", or \"tear this apart\". Independent reviewers try to break a change or design, and only findings proven by a run survive."
---


# Interrogate

Adversaries try to break a change or a design. A finding survives only when a run proves it. Report the findings. Do not apply fixes.

## Frame

The scope is what the user names. Otherwise it is the branch diff from its merge base with the base branch, through the working tree. State the intent with the **in-your-own-words** skill, from the user's message, the commits, and the PR description. Ask the user when the intent is unclear.

## Fan out

Use the `$arena` framing and isolation rules with four adversarial briefs. Do not run the arena selection or graft phases. If Codex collaboration is available and delegation is permitted, start the reviewers through the active tool schema. Give each reviewer the exact intent and scope, a separate worktree or output directory, and this brief:

> Break this change. Prove each finding with a run against the real code, such as a failing test, a repro script, or command output that shows the wrong behavior. For a design or plan, run a prototype or probe the current tree. Keep repros in your own worktree. Report each finding with a title, the exact command, the output it printed, and the output the intent requires. Leave out anything you did not run. No findings is a valid result.

If the session cannot run four isolated reviewers, use the available number and report the coverage gap. If no collaboration tools are available, perform independent checks sequentially and label them as one reviewer, not a parallel adversarial review.
## Verify

Verify each finding per arena Phase F by rerunning its command. Keep a finding when the output shows the failure and the failure breaks the intent. Drop the rest. Merge findings that share a root cause.

Skip arena Phases C, D, and E. Adversaries find different failures, so the verdict keeps every verified finding, not one reviewer's list.

## Output

- **Intent**: the restatement.
- **Findings**: for each verified finding, the command, its output, how it breaks the intent, and the reviewers that found it. Say "no verified findings" when none survive.
- **Dropped**: for each reviewer, the count of dropped findings and why.
