---
name: architect
description: Sketch data shapes, signatures, and module boundaries before implementing a non-trivial change. Use for /architect, design questions, or changes that cross a function boundary.
---

# Architect

Sketch the caller's usage first. Derive types, signatures, and module boundaries from it. Keep the sketch small enough to replace if implementation proves the design wrong.

## Phases

1. **Ground.** Use `/how` to understand the systems the change touches. Use `/why` when the change alters an existing ownership or layering decision.
2. **Sketch.** Use `/arena` with `references/runner-prompt.md` to explore distinct shapes. Use the configured `architect runners` model preference from `.agents/pstack-models.yaml` or `~/.gemini/config/pstack-models.yaml` when set to a valid `invoke_subagent` `Model` tier (`inherit`, `flash_lite`, `flash`, `pro`). Otherwise pass `Model: "inherit"`.
3. **Review.** Compare candidates on the rubric and screen them with [`references/design-red-flags.md`](references/design-red-flags.md). Choose a shape with a small public surface and clear ownership.
4. **Implement.** Treat the chosen sketch as the contract. Surface any implementation need that would change it.
5. **Scrap when needed.** If the same shape of workaround appears repeatedly, re-ground with `/how`, subtract dead structure, and run a new design round.

Use `invoke_subagent` when delegation is permitted. If subagents are unavailable or disallowed, compare the designs in one session and say that no independent candidates ran.

A human checkpoint is opt-in. Pause only when the user asks to review the sketch before implementation.

## Output

Return the caller usage sketch, core types and signatures, module map, synthesis decision, and the contract invariants implementation must preserve. Follow [`references/rationale-template.md`](references/rationale-template.md) when the user asks for a standalone rationale document.
