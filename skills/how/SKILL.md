---
name: how
description: Explain how code works, walk through a subsystem before a change, and identify where behavior belongs. Use for /how or questions about runtime flow, ownership, or layering. Use why for motivation.
---

# How

Explain the code well enough to give an engineer a working model of the subsystem. Trace real entry points, data, and runtime behavior. Do not annotate every line.

## When a question includes a design proposal

Separate the user's outcome and constraints from the proposed mechanism. Mark source-backed facts, assumptions, and decisions separately. Before turning a new entity, identifier, state, capability, or boundary into an API or acceptance criterion, compare the smallest model that meets the outcome with the proposed model. Name the assumption most likely to change the design and find evidence or an observation that could disprove it. Keep acceptance criteria about user-visible behavior or required invariants, not a restatement of the proposed implementation. For choices that establish persistent state or cross-service contracts, apply [Model the Domain](../principle-model-the-domain/SKILL.md) and [Foundational Thinking](../principle-foundational-thinking/SKILL.md) before recommending a shape.

## Assess the scope

- A narrow question about one function or module needs one pass through the source.
- A subsystem spanning files or services needs two to four distinct research angles.

When user and project instructions permit delegation, use `invoke_subagent` with `TypeName: "research"` for independent read-only exploration angles. Read `.agents/pstack-models.yaml` or `~/.gemini/config/pstack-models.yaml` if present and pass a configured `Model` tier (`inherit`, `flash_lite`, `flash`, `pro`) when set; otherwise pass `Model: "inherit"`. If delegation is disallowed, inspect the angles serially and say so only if the answer needs parallel coverage.

## Explore

For a complex scope, divide the work into distinct questions, such as:

- Where does the behavior start?
- Which data shapes and state transitions carry it?
- Which boundaries, services, or callers affect it?
- Which tests or runtime evidence show the behavior?

Give each subagent the relevant files, the question it owns (plus [`references/explorer-prompt.md`](references/explorer-prompt.md) when helpful), and the requirement to cite paths and symbols. Subagents are read-only and must not edit files.

## Synthesize

Combine the findings into one explanation (using [`references/explainer-prompt.md`](references/explainer-prompt.md) as a guide). Check important claims against source before presenting them. Separate observed behavior from inference.

## Output

Use only the sections that help answer the question:

- **Overview**: the subsystem's purpose and entry point.
- **Key concepts**: the data shapes and state owners.
- **How it works**: the runtime sequence, with clickable `file:///absolute/path#Lstart-Lend` links for relevant paths and symbols.
- **Where things live**: the module boundaries and callers.
- **Gotchas**: verified edge cases or missing evidence.
