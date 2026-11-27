---
name: poteto-help
description: Help users set up Spstack for Antigravity or Codex, choose a workflow, or recover from a run that went wrong. Use for $poteto-help or questions about Spstack.
---

# Poteto help

Answer the question and give the user a prompt they can send. Do not start the requested work when the user asked only how to do it. If the user asks to do the work, route to `$poteto-mode` and continue.

Read the skill or guide that owns the answer before you quote it. Link to its public copy at `https://github.com/softprobe/spstack/blob/main/` plus the repository path.

## Set up Spstack

### In Antigravity (`agy`)
1. Install the plugin from a local checkout with `agy plugin install /path/to/spstack` (or enable it with `agy plugin enable spstack`).
2. Verify installation with `agy plugin list` and `agy plugin validate /path/to/spstack`.
3. Run `$setup-pstack` only if you want role-specific subagent model preferences (`~/.gemini/config/pstack-models.yaml`).
4. Start a substantial task with `$poteto-mode`, a clear goal, and a check that can pass or fail.

### In Codex
1. Add the marketplace with `codex plugin marketplace add softprobe/spstack`.
2. Install the plugin with `codex plugin add spstack@softprobe-spstack`.
3. In Codex desktop, restart Codex and enable Spstack in the Plugins directory.
4. In a new session, run `$setup-pstack` only if you want role-specific model or reasoning preferences.
5. Start a substantial task with `$poteto-mode`, a clear goal, and a check that can pass or fail.

Use the local checkout commands in the [README](../../README.md) when developing Spstack. The plugin packages one canonical `skills/` tree. It does not require a separate install script or adapter file.

Spstack does not configure provider-specific model IDs by default. Delegates inherit the current session model. The optional user config lives at `~/.gemini/config/pstack-models.yaml` in Antigravity (or `$CODEX_HOME/pstack-models.yaml` / `~/.codex/pstack-models.yaml` in Codex).

## Start a task with `$poteto-mode`

`$poteto-mode` matches the request to a playbook, copies its steps into a checklist, and invokes related skills as needed. A useful prompt says what you want, what must stay unchanged, and what evidence proves completion.

Invoke `$poteto-mode` for each task you want it to route. To make rules apply across turns, add them to the project's `AGENTS.md` or `GEMINI.md`; a skill does not become a persistent mode automatically.

## Pick a skill

Use `$poteto-mode` for non-trivial work. Invoke a focused skill when you want one workflow directly.

| Goal | Skill |
|---|---|
| Understand what code does | [`$how`](../how/SKILL.md) |
| Trace design rationale or history | [`$why`](../why/SKILL.md) |
| Explain a change in plain language | [`$teach`](../teach/SKILL.md) |
| Rebuild recent context | [`$recall`](../recall/SKILL.md) |
| Compare designs or implementations | [`$architect`](../architect/SKILL.md) or [`$arena`](../arena/SKILL.md) |
| Split parallel work into independent slices | [`$swarm`](../swarm/SKILL.md) |
| Challenge a change with evidence | [`$interrogate`](../interrogate/SKILL.md) |
| Fix a bug test-first | [`$tdd`](../tdd/SKILL.md) |
| Verify app behavior through a real driver | [`$create-verification-skill`](../create-verification-skill/SKILL.md) |
| Keep a verification skill in sync with the app | [`$maintain-verification-skill`](../maintain-verification-skill/SKILL.md) |
| Check a formal property | [`$create-formal-verification-skill`](../create-formal-verification-skill/SKILL.md) |
| Review comments before shipping | [`$no-comments`](../no-comments/SKILL.md) |
| Improve writing | [`$unslop`](../unslop/SKILL.md) or [`$technical-writing`](../technical-writing/SKILL.md) |
| Create or revise a skill | `agy-customizations` or `$skill-creator` |
| Pick model preferences | [`$setup-pstack`](../setup-pstack/SKILL.md) |
| Summarize work in this chat | [`$ketchup`](../ketchup/SKILL.md) |

The `principle-*` skills describe one rule each. `$poteto-mode` reads a principle when a task triggers it.

Playbooks live under [`poteto-mode/playbooks/`](../poteto-mode/playbooks/). They have no separate skill invocation. Say “babysit this PR,” “land the stack,” “take over this branch,” or “pause safely” while using `$poteto-mode` to route into the corresponding playbook.

## Understand environment limits

The plugin supplies instructions and resources. Antigravity (or Codex) supplies the subagent (`invoke_subagent`, `define_subagent`, `send_message`, `manage_subagents`), scheduling (`schedule`), background task (`manage_task`), browser, and shell tools. A workflow that needs a tool unavailable in the current session must continue with a supported fallback or report the specific step it could not run.

Use subagent delegation only when the current session exposes it and the user and project permit delegation. Otherwise work serially where possible and state any step that depends on unavailable tools. `$make-bot-ui` builds a UI for a webhook the user provides; it does not create an automation or webhook service.

## Recover from a run that went wrong

| Symptom | Next step |
|---|---|
| Skills do not appear | Confirm that the plugin is installed and enabled (`agy plugin list`), then open a new session. |
| Model preferences did not change | Check `~/.gemini/config/pstack-models.yaml` (or `$CODEX_HOME/pstack-models.yaml`), then start a new session. |
| Parallel work could not start | Continue serially or name the unavailable subagent tool in the result. |
| A task claimed success from a build alone | Ask for the command, user flow, stored value, or profile that proves the result. |
| A skill gave the wrong workflow | Fix the skill in a separate change, validate its links and frontmatter (`agy plugin validate`), and keep the product task moving. |

## Reply

Lead with the answer. Give at most one example prompt, then link to the skill or guide that supports the answer.
