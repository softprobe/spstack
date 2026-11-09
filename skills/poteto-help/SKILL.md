---
name: poteto-help
description: Help users set up Spstack for Antigravity, choose a workflow, or recover from a run that went wrong. Use for /poteto-help or questions about Spstack.
---

# Poteto help

Answer the question and give the user a prompt they can send. Do not start the requested work when the user asked only how to do it. If the user asks to do the work, route to `/poteto-mode` and continue.

Read the skill or guide that owns the answer before you quote it. Link to its public copy at `https://github.com/softprobe/spstack/blob/antigravity/` plus the repository path.

## Set up Spstack

1. Clone or symlink Spstack into `~/.gemini/config/plugins/spstack`.
2. Verify or toggle the plugin in the Customizations UI (`customization://spstack`).
3. Run `/setup-pstack` only if you want role-specific subagent model tier preferences (`inherit`, `flash_lite`, `flash`, `pro`).
4. Start a substantial task with `/poteto-mode`, a clear goal, and a check that can pass or fail.

Use the local checkout instructions in the [README](../../README.md) when developing Spstack. The plugin packages one canonical `skills/` tree and bundled subagents under `agents/`.

Spstack does not configure provider-specific model IDs by default. Subagents spawned via `invoke_subagent` inherit the current Antigravity session model (`Model: "inherit"`). The optional user config lives at `.agents/pstack-models.yaml` (workspace) or `~/.gemini/config/pstack-models.yaml` (global).

## Start a task with `/poteto-mode`

`/poteto-mode` matches the request to a playbook, copies its steps into a checklist, and invokes related skills as needed. A useful prompt says what you want, what must stay unchanged, and what evidence proves completion.

Invoke `/poteto-mode` for each task you want it to route. To make rules apply across turns, add them to the project's `AGENTS.md` or `GEMINI.md`; Antigravity skills load on demand rather than becoming a permanent rule automatically.

## Pick a skill

Use `/poteto-mode` for non-trivial work. Invoke a focused skill when you want one workflow directly.

| Goal | Skill |
|---|---|
| Understand what code does | [`/how`](../how/SKILL.md) |
| Trace design rationale or history | [`/why`](../why/SKILL.md) |
| Explain a change in plain language | [`/teach`](../teach/SKILL.md) |
| Rebuild recent context | [`/recall`](../recall/SKILL.md) |
| Compare designs or implementations | [`/architect`](../architect/SKILL.md) or [`/arena`](../arena/SKILL.md) |
| Split parallel work into independent slices | [`/swarm`](../swarm/SKILL.md) |
| Challenge a change with evidence | [`/interrogate`](../interrogate/SKILL.md) |
| Fix a bug test-first | [`/tdd`](../tdd/SKILL.md) |
| Verify app behavior through a real driver | [`/create-verification-skill`](../create-verification-skill/SKILL.md) |
| Keep a verification skill in sync with the app | [`/maintain-verification-skill`](../maintain-verification-skill/SKILL.md) |
| Check a formal property | [`/create-formal-verification-skill`](../create-formal-verification-skill/SKILL.md) |
| Review comments before shipping | [`/no-comments`](../no-comments/SKILL.md) |
| Improve writing | [`/unslop`](../unslop/SKILL.md) or [`/technical-writing`](../technical-writing/SKILL.md) |
| Create or revise a skill or plugin | `agy-customizations` or `plugin` |
| Pick model preferences | [`/setup-pstack`](../setup-pstack/SKILL.md) |
| Summarize work in this chat | [`/ketchup`](../ketchup/SKILL.md) |

The `principle-*` skills describe one rule each. `/poteto-mode` reads a principle when a task triggers it.

Playbooks live under [`poteto-mode/playbooks/`](../poteto-mode/playbooks/). They have no separate skill invocation. Say "babysit this PR," "land the stack," "take over this branch," or "pause safely" while using `/poteto-mode` to route into the corresponding playbook.

## Understand Antigravity capabilities

The plugin supplies instructions, subagents, and resources. Antigravity supplies the subagent (`invoke_subagent`, `define_subagent`, `manage_subagents`, `send_message`), terminal (`run_command`, `manage_task`), scheduling (`schedule`), browser (`chrome-devtools` / `/browser`), and MCP (`call_mcp_tool`) tools. A workflow that needs a tool unavailable in the current session must continue with a supported fallback or report the specific step it could not run.

Use `invoke_subagent` when the user and project permit delegation. Otherwise work serially where possible and state any step that depends on unavailable tools. `/make-bot-ui` builds a UI for a webhook the user provides; for scheduled recurring agent runs, use Antigravity's built-in `automation` skill (`/automation`).

## Recover from a run that went wrong

| Symptom | Next step |
|---|---|
| Skills do not appear | Confirm that the plugin is installed in `~/.gemini/config/plugins/spstack` and enabled on `[spstack](customization://spstack)`, or that `.agents/skills.json` points to `skills`. |
| Model preferences did not change | Check `.agents/pstack-models.yaml` or `~/.gemini/config/pstack-models.yaml` for valid `invoke_subagent` `Model` values (`inherit`, `flash_lite`, `flash`, `pro`). |
| Parallel work could not start | Continue serially or name the unavailable subagent capability in the result. |
| A task claimed success from a build alone | Ask for the command, user flow, stored value, or profile that proves the result. |
| A skill gave the wrong workflow | Fix the skill in a separate change, validate its links and frontmatter, and keep the product task moving. |

## Reply

Lead with the answer. Give at most one example prompt, then link to the skill or guide that supports the answer.
