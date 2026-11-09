---
name: setup-pstack
description: Configure optional Spstack subagent model preferences for Antigravity. Use for /setup-pstack or when the user asks to configure delegation models.
---


# Configure Spstack

Subagents spawned via `invoke_subagent` inherit the current Antigravity session model (`Model: "inherit"`) by default. Leave configuration alone unless the user asks for role-specific model preferences.

Use `.agents/pstack-models.yaml` when the user wants workspace-scoped settings, or `~/.gemini/config/pstack-models.yaml` for global machine-local settings. The file is user configuration, not plugin content.

1. Read the current file if it exists.
2. Offer only model tier values that Antigravity's `invoke_subagent` tool accepts:
   - `inherit`: Uses the parent agent's current model (default).
   - `flash_lite`: The lightest, fastest model for trivial or high-volume tasks.
   - `flash`: A lighter, faster model for simple tasks.
   - `pro`: A larger model for complex work.
3. Keep existing role choices unless the user asks to replace them. Role names are workflow labels such as `feature`, `bug-fix`, `architect runners`, `arena runners`, `swarm workers`, and `why investigators`.
4. Show the proposed role map before writing it. Use `ask_question` only for a choice the request and current configuration cannot resolve.
5. Write YAML with `defaults` and `roles` keys. Use `inherit` when a role should use the parent session's model.
6. Re-read the file and confirm the saved values match the approved map.

Use this starting point when creating the file:

```yaml
defaults:
  model: inherit
roles: {}
```
