---
name: principle-foundational-thinking
description: "Apply before defining persistent or cross-service contracts, or writing logic that chooses core types and data structures, sequences scaffold-vs-feature work, or shares state between concurrent actors. Get the data structures right so downstream code becomes obvious."
disable-model-invocation: true
---

# Foundational Thinking

**Structural decisions** protect option value. **Code-level decisions** protect simplicity.

**Data structures first.** Get the data shape right before writing logic. Define core types early, trace every access pattern, and choose structures that match the dominant paths.

Before building APIs, storage, or cross-service contracts on a new shape, settle the highest-risk ownership, cardinality, and source-of-truth assumptions. If one is still unknown, make resolving it the first verifiable unit instead of propagating it through the implementation.

At code level, DRY the structure, not every line. Types and data models should converge. Three similar statements still beat a premature abstraction. Prefer explicit over clever. Test behavior and edge cases, not line counts.

**Concurrency corollary.** Before sharing state between actors, ask "what happens if another actor modifies this concurrently?" If not "nothing", isolate.

**Scaffold first.** If something helps every later phase, do it first. Ask "does every subsequent phase benefit from this existing?" CI, linting, test infrastructure, and shared types are scaffold. Sequence for option value: setup before features, tests before fixes. Keep commits small and single-purpose.

Each increment should land a coherent abstraction or deepen one that exists. Do not spread a new capability across callers as special-case coordination.

Subtraction comes before scaffolding. Remove dead code first, then lay foundations.
