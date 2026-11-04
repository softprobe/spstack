---
name: poteto-help
description: Help users set up Spstack for Codex, choose a workflow, or recover from a run that went wrong. Use for $poteto-help or questions about Spstack.
---

# Poteto help

Answer the question and give the user a prompt they can send. Do not start the requested work when the user asked only how to do it. If the user asks to do the work, route to `$poteto-mode` and continue.

Read the skill or guide that owns the answer before you quote it. Link to its public copy at `https://github.com/softprobe/spstack/blob/main/` plus the repository path.

## Set up Spstack

1. Add the marketplace with `codex plugin marketplace add softprobe/spstack`.
2. Install the plugin with `codex plugin add spstack@softprobe-spstack`.
3. In Codex desktop, restart Codex and enable Spstack in the Plugins directory.
4. In a new session, run `$setup-pstack` only if you want role-specific model or reasoning preferences.
5. Start a substantial task with `$poteto-mode`, a clear goal, and a check that can pass or fail.

Use the local checkout commands in the [README](../../README.md) when developing Spstack. The plugin packages one canonical `skills/` tree. It does not require a separate install script or adapter file.

Spstack does not configure provider-specific model IDs by default. Delegates inherit the current Codex session model. The optional user config lives at `$CODEX_HOME/pstack-models.yaml`, or `~/.codex/pstack-models.yaml` when `CODEX_HOME` is unset.

## Start a task with `$poteto-mode`

`$poteto-mode` matches the request to a playbook, copies its steps into a checklist, and invokes related skills as needed. A useful prompt says what you want, what must stay unchanged, and what evidence proves completion.

Invoke `$poteto-mode` for each task you want it to route. To make rules apply across turns, add them to the project's `AGENTS.md`; Codex does not turn a skill into a persistent mode automatically.

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
| Create or revise a skill | `$skill-creator` |
| Pick model preferences | [`$setup-pstack`](../setup-pstack/SKILL.md) |
| Summarize work in this chat | [`$ketchup`](../ketchup/SKILL.md) |

The `principle-*` skills describe one rule each. `$poteto-mode` reads a principle when a task triggers it.

Playbooks live under [`poteto-mode/playbooks/`](../poteto-mode/playbooks/). They have no separate skill invocation. Say “babysit this PR,” “land the stack,” “take over this branch,” or “pause safely” while using `$poteto-mode` to route into the corresponding playbook.

## Understand Codex limits

The plugin supplies instructions and resources. Codex supplies the collaboration, app, browser, and shell tools. A workflow that needs a tool unavailable in the current session must continue with a supported fallback or report the specific step it could not run.

Use Codex collaboration only when the current session exposes it and the user and project permit delegation. Otherwise work serially where possible and state any step that depends on unavailable tools. `$make-bot-ui` builds a UI for a webhook the user provides; it does not create an automation or webhook service.

## Recover from a run that went wrong

| Symptom | Next step |
|---|---|
| Skills do not appear | Confirm that the plugin is installed and enabled, then restart Codex and open a new session. |
| Model preferences did not change | Check `$CODEX_HOME/pstack-models.yaml` or `~/.codex/pstack-models.yaml`, then start a new session. |
| Parallel work could not start | Continue serially or name the unavailable collaboration tool in the result. |
| A task claimed success from a build alone | Ask for the command, user flow, stored value, or profile that proves the result. |
| A skill gave the wrong workflow | Fix the skill in a separate change, validate its links and frontmatter, and keep the product task moving. |

## Reply

Lead with the answer. Give at most one example prompt, then link to the skill or guide that supports the answer.
