---
name: reflect
description: Review the current Codex conversation for durable lessons, propose skill edits, and wait for approval before applying them. Use when the user says $reflect.
---

# Reflect

Find durable learnings in the current conversation and propose focused skill changes. Skip trivial, off-topic, or already-covered lessons.

## 1. Gather the conversation

Use the active conversation directly. Codex does not promise a stable transcript path. Use Codex history tools only when this session exposes them and the user can access the history. Do not inspect undocumented databases or other workspaces. If the chat is too long to inspect, create a concise evidence digest from the visible conversation.

## 2. Review for patterns

Look for repeated corrections, choices, and workflow failures. One-off preferences are weak evidence. Use Codex collaboration tools for independent reviews only when available and permitted. Give each reviewer a separate lens and the same evidence digest. Otherwise review the conversation yourself and say that there was no independent review.

Reviewers should return candidate lessons with the user's evidence, a proposed skill destination, and a concrete change. A synthesizer may combine duplicates and reject lessons that would not change a future decision.

## 3. Check enforcement

Move a lesson to a structural fix when a type, test, lint rule, or script would enforce it more reliably than prose. Use `$correct` when the underlying repository needs that kind of change.

## 4. Ask before applying skill edits

Show the proposed Accepted, Rejected, and Backlog items. Wait for the user's explicit approval before changing shared skills. Do not file backlog items in an external tracker unless the user asks.

Route approved edits:

- A one-line correction goes directly into the existing skill.
- A substantive skill change uses `$skill-creator` when available.
- A new skill uses `$skill-creator` when available and has no existing skill home.

Project skills live under `.agents/skills/<skill>/`. Personal skills live under `~/.agents/skills/<skill>/`. Never edit Codex's installed plugin cache.

## 5. Validate and report

Check frontmatter and local links. Run the Codex skill validator when available. Report the evidence, approved edits, rejected items with reasons, proposed backlog, and validation results.
