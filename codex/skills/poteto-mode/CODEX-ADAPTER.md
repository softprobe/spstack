# Codex adapter for pstack

The upstream instructions are retained for provenance. Apply these mappings whenever an upstream skill assumes Cursor or Claude Code behavior.

Cursor-only frontmatter is omitted from Codex copies. Each pstack skill remains explicit-only through `agents/openai.yaml`; Cursor `paths` filters are not carried over.

## Tools and skill routing

- `Task` or `Agent` means the current Codex agent tool, if it is available and current instructions permit delegation. Omit `model` to inherit the parent model unless `../../pstack-models.yaml` names a currently supported model and reasoning effort. Never reuse upstream `claude-*` or `grok-*` model IDs.
- `AskQuestion` means ask only when a material preference or missing fact cannot be inferred. Use the available Codex user-input tool where appropriate; otherwise ask in plain language. Keep working on independent parts while waiting.
- A todo list means a compact checklist in the task when the app provides no todo tool.
- `/skill-name` means explicitly invoke `$skill-name` in Codex, or read the sibling `../skill-name/SKILL.md` when one pstack skill routes to another.
- `Grep` and `Glob` mean use `rg` and the available file tools. Use any configured CodeGraph tools for structural code questions.
- Use only the MCP tools, connectors, shell commands, and app controls that are actually available in the current Codex session. Do not claim a source was searched when its connector is unavailable.

## Cursor-specific features

Cursor automations, Bugbot, cloud agents, Cursor rules, and Cursor-only controls have no automatic Codex equivalent. Use a Codex feature only when its documented behavior fits the requested task. Otherwise skip that step and state why. The `automations/benny/` tree is preserved as upstream reference material; this installation does not create or enable its Slack automations.

Map Cursor paths only when the equivalent is clear. User skills live under `$CODEX_HOME/skills` (normally `~/.codex/skills`); project skills live under `.agents/skills`. Do not invent a global replacement for Cursor rules or read unrelated Cursor transcripts. For Codex conversation history, use the available thread tools and remain within the requested workspace and scope.

## Operating boundaries

Current system, developer, project, and user instructions take precedence over the upstream plugin. A pstack workflow does not by itself authorize sending messages, changing shared pull requests, creating automations, deploying, deleting data, or other externally visible actions. Preserve the request's scope and use the specific tool's documented behavior.

If an upstream helper such as Cursor's `create-skill`, `deslop`, or a UI-control skill is unavailable, use an installed Codex skill or tool only when it genuinely fits. Otherwise continue with supported work and report the skipped part.

## Local configuration

The Codex-side model preference file is `codex/pstack-models.yaml`. From an adapted skill folder, read it as `../../pstack-models.yaml`. Its default is to inherit the parent model. Read it only when delegation is permitted. The shared upstream `poteto-agent` prompt is available at `codex/agents/poteto-agent.md`, or as `../../agents/poteto-agent.md` from the adapted `poteto-mode` folder.
