---
name: how
description: "Use for \"how does X work\", code walkthroughs before changing something, and placement / ownership / layering questions (\"where should this live\", \"which package owns this\", \"is this the right layer\"). Explains subsystem architecture, runtime flow, onboarding mental models. Use why for motivation."
disable-model-invocation: true
---

# How

Explore the codebase to answer "how does X work?" questions.

## When a question includes a design proposal

Separate the user's outcome and constraints from the proposed mechanism. Mark source-backed facts, assumptions, and decisions separately. Before turning a new entity, identifier, state, capability, or boundary into an API or acceptance criterion, compare the smallest model that meets the outcome with the proposed model. Name the assumption most likely to change the design and find evidence or an observation that could disprove it. Keep acceptance criteria about user-visible behavior or required invariants, not a restatement of the proposed implementation. For choices that establish persistent state or cross-service contracts, apply [Model the Domain](../principle-model-the-domain/SKILL.md) and [Foundational Thinking](../principle-foundational-thinking/SKILL.md) before recommending a shape.

If the scope is ambiguous, state your interpretation and explore. The user can redirect.

## 1. Explain

Spawn one Task subagent with `subagent_type: generalPurpose` and `readonly: true` that explores and explains in one pass. Give it the user's question and this brief:

> You are writing an architectural explanation for a senior engineer. Explore the codebase and write an explanation that a senior engineer unfamiliar with this area could read and walk away with a solid mental model. They should understand the architecture well enough to start working in it confidently. You have read-only access to the codebase.

## 2. Present

Present the subagent's output. Light edits for clarity or context from the conversation are fine. Do not substantially rewrite it.
