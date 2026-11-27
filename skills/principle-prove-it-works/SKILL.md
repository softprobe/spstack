---
name: principle-prove-it-works
description: "Apply after completing a task, before declaring done. Verify against the real artifact (run the feature, read the actual value, inspect the diff), not a proxy, self-report, or 'it compiles.'"
disable-model-invocation: true
---

# Prove It Works

Verify every output by checking the real thing directly: run the feature, read the actual value, inspect the diff. Proxies (file mtimes, self-reports, cached output, "it compiles") do not count. When a check fails, suspect the observation method before suspecting the system.

## Verify the design claim

A behavior check proves that the chosen design works; it does not prove that every new entity, identifier, or boundary is necessary. For each architecture-defining addition, state the distinct user need or invariant it serves and check what fails if it is removed or derived from existing data. Check each use independently: a concept justified in one part of the system does not establish that it belongs in every API, assertion, storage key, or query. Keep behavior checks implementation-neutral so they can validate a simpler design too.

Script the check when you can. A deterministic script that reruns the comparison beats a one-time look. Keep its output where the human can see it, and commit it only when the trail must be auditable later.
