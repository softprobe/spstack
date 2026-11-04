---
name: architect
description: Sketch data shapes, signatures, and module boundaries before implementing a non-trivial change. Use for $architect, design questions, or changes that cross a function boundary.
---

# Architect

Sketch the caller's usage first. Derive types, signatures, and module boundaries from it. Keep the sketch small enough to replace if implementation proves the design wrong.

## Phases

1. **Ground.** Use `$how` to understand the systems the change touches. Use `$why` when the change alters an existing ownership or layering decision.
2. **Sketch.** Use `$arena` with `references/runner-prompt.md` to explore distinct shapes. Use the configured `architect runners` model preferences only when the active Codex collaboration tools accept them. Otherwise inherit the current model.
3. **Review.** Compare candidates on the rubric and screen them with [`references/design-red-flags.md`](references/design-red-flags.md). Choose a shape with a small public surface and clear ownership.
4. **Implement.** Treat the chosen sketch as the contract. Surface any implementation need that would change it.
5. **Scrap when needed.** If the same shape of workaround appears repeatedly, re-ground with `$how`, subtract dead structure, and run a new design round.

Use Codex collaboration tools only when they are available and delegation is permitted. Follow the active tool schema. If they are unavailable, compare the designs in one session and say that no independent candidates ran.

A human checkpoint is opt-in. Pause only when the user asks to review the sketch before implementation.

## Output

For a small change, write one file with the usage and type sketch. For a larger change, write a module map and type definitions. Include the synthesis choice in the rationale shaped by [`references/rationale-template.md`](references/rationale-template.md).
