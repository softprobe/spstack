---
name: reflect
description: Review the current Antigravity conversation for durable lessons, propose skill edits, and wait for approval before applying them. Use when the user says /reflect.
---

# Reflect

Find durable learnings in the current conversation and propose focused skill changes. Skip trivial, off-topic, or already-covered lessons.

## 1. Gather the conversation

Read the active conversation's transcript at `<appDataDir>/brain/<conversation-id>/.system_generated/logs/transcript.jsonl` (typically `~/.gemini/antigravity/brain/<conversation-id>/.system_generated/logs/transcript.jsonl`). When `truncated_fields` is present on a relevant step, read the corresponding line in `transcript_full.jsonl`. Do not inspect undocumented databases or unrelated workspaces. If the transcript file is unavailable, create a concise evidence digest from the visible conversation.

## 2. Review for patterns

Look for repeated corrections, choices, and workflow failures. One-off preferences are weak evidence. When delegation is permitted, spawn three independent reviewers via `invoke_subagent` (`TypeName: "research"` or `"self"`) using [`references/judgment-reviewer.md`](references/judgment-reviewer.md), [`references/tooling-reviewer.md`](references/tooling-reviewer.md), and [`references/divergent-reviewer.md`](references/divergent-reviewer.md), giving each reviewer the transcript path or evidence digest. Then synthesize their outputs using [`references/synthesizer.md`](references/synthesizer.md). Otherwise review the conversation yourself across all three lenses and say that there was no independent review.

Reviewers should return candidate lessons with the user's evidence, a proposed skill destination, and a concrete change. The synthesizer combines duplicates and rejects lessons that would not change a future decision.

## 3. Check enforcement

Move a lesson to a structural fix when a type, test, lint rule, or script would enforce it more reliably than prose. Use `/correct` when the underlying repository needs that kind of change.

## 4. Ask before applying skill edits

Show the proposed Accepted, Rejected, and Backlog items. Wait for the user's explicit approval before changing shared skills. Do not file backlog items in an external tracker unless the user asks.

Route approved edits:

- A one-line correction goes directly into the existing skill.
- A substantive skill change or new skill follows the built-in `agy-customizations` skill conventions (`SKILL.md` with YAML frontmatter `name` and `description`).

Project skills live under `.agents/skills/<skill>/`. Personal global skills live under `~/.gemini/config/skills/<skill>/` (or inside an owned plugin under `~/.gemini/config/plugins/<plugin>/skills/<skill>/`).

## 5. Validate and report

Check YAML frontmatter (`name` matching folder name, non-empty `description`) and verify that local links resolve. Report the evidence, approved edits, rejected items with reasons, proposed backlog, and validation results.
