---
name: setup-pstack
description: Configure optional Spstack delegation model and reasoning preferences with values supported by the current Antigravity or Codex session. Use for $setup-pstack or when the user asks to configure delegation.
---


# Configure Spstack

Delegates inherit the current session model by default. Leave configuration alone unless the user asks for role-specific preferences.

In Antigravity, use `~/.gemini/config/pstack-models.yaml` (falling back to `$CODEX_HOME/pstack-models.yaml` or `~/.codex/pstack-models.yaml` if already present). The file is user configuration, not plugin content.

1. Read the current file if it exists. Read the active subagent tool schema (such as Antigravity's `invoke_subagent` tool, which accepts `Model` values `inherit`, `flash_lite`, `flash`, `pro`) if the session exposes one.
2. Offer only model and reasoning values that the active tool accepts. When the tool does not expose those fields, keep the role on `inherit` (or `inherit-parent`) and explain the limit.
3. Keep existing role choices unless the user asks to replace them. Role names are workflow labels such as `feature`, `bug-fix`, `arena runners`, `swarm workers`, and `why investigators`.
4. Show the proposed role map before writing it. Ask only for a choice the request and current configuration cannot resolve.
5. Write YAML with `defaults` and `roles` keys. Use `inherit` (or `inherit-parent`) when the delegate should use the current session's model or reasoning effort.
6. Re-read the file and confirm the saved values match the approved map.

Use this starting point when creating the file:

```yaml
defaults:
  model: inherit
  reasoning_effort: inherit-parent
roles: {}
```
