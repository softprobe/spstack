---
name: how
description: Explain how code works, walk through a subsystem before a change, and identify where behavior belongs. Use for $how or questions about runtime flow, ownership, or layering. Use why for motivation.
---

# How

Explain the code well enough to give an engineer a working model of the subsystem. Trace real entry points, data, and runtime behavior. Do not annotate every line.

## Assess the scope

- A narrow question about one function or module needs one pass through the source.
- A subsystem spanning files or services needs two to four distinct research angles.

If the Codex session exposes collaboration tools and the user and project instructions permit delegation, use them for independent read-only research. Ask each delegate not to edit. Follow the active tool schema. If collaboration is unavailable, inspect the angles serially and say so only if the answer needs parallel coverage.

Read `$CODEX_HOME/pstack-models.yaml`, or `~/.codex/pstack-models.yaml` when `CODEX_HOME` is unset, only when the session supports choosing a delegate model. Use configured role preferences only when the tool accepts them. Otherwise inherit the current session model.

## Explore

For a complex scope, divide the work into distinct questions, such as:

- Where does the behavior start?
- Which data shapes and state transitions carry it?
- Which boundaries, services, or callers affect it?
- Which tests or runtime evidence show the behavior?

Give each delegate the relevant files, the question it owns, and the requirement to cite paths and symbols. Do not have two delegates edit the same files.

## Synthesize

Combine the findings into one explanation. Check important claims against source before presenting them. Separate observed behavior from inference.

## Output

Use only the sections that help answer the question:

- **Overview**: the subsystem's purpose and entry point.
- **Key concepts**: the data shapes and state owners.
- **How it works**: the runtime sequence, with relevant paths and symbols.
- **Where things live**: the module boundaries and callers.
- **Gotchas**: verified edge cases or missing evidence.
