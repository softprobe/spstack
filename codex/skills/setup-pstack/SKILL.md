---
name: setup-pstack
description: Configure pstack model and reasoning preferences using options supported by the active Codex agent tools. Use for $setup-pstack or when the user asks to configure pstack delegation.
---

Before following this upstream skill, read [the Codex adapter](../poteto-mode/CODEX-ADAPTER.md) and apply its tool, model, and path mappings.

# Setup pstack for Codex

Update `../../pstack-models.yaml` only when the user asks to configure pstack model preferences. Its default inherits the parent model and requires no changes.

1. Read the current configuration and the active `collaboration.spawn_agent` tool schema. Offer only model IDs and reasoning efforts that schema supports. Treat upstream `claude-*` and `grok-*` IDs as Cursor-specific examples.
2. Keep the upstream role labels when they fit the requested configuration. A role value may specify a supported `model` and `reasoning_effort`; use `inherit-parent` to omit that field when spawning.
3. If the user gives a budget, map it to a reasoning effort supported by the active tool. Ask only for choices that cannot be inferred from the request, and show the concrete role map before writing it.
4. Preserve existing role preferences unless the user asks to replace them. Write only to `../../pstack-models.yaml`, in YAML with `defaults` and `roles` keys.
5. Re-read the file and confirm each configured model and reasoning effort is supported by the current tool schema. If the schema does not expose a desired value, leave that role inheriting the parent model and explain the limitation.
