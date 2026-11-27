---
name: principle-foundational-thinking
description: "Apply before defining persistent or cross-service contracts, or writing logic that chooses core types and data structures, sequences scaffold-vs-feature work, or shares state between concurrent actors. Get the data structures right so downstream code becomes obvious."
disable-model-invocation: true
---

# Foundational Thinking

Get the data shape right before writing logic. Define core types early, trace every access pattern, and choose structures that match the dominant paths. DRY the structure, not every line.

Before building APIs, storage, or cross-service contracts on a new shape, settle the highest-risk ownership, cardinality, and source-of-truth assumptions. If one is still unknown, make resolving it the first verifiable unit instead of propagating it through the implementation.

Before sharing state between actors, ask what happens if another actor modifies it concurrently. If the answer is not "nothing", isolate.

Scaffold first. Whatever helps every later phase (CI, tests, shared types) goes first, after removing dead code. Keep commits small and single-purpose.
