---
name: automate-me
description: Create or revise a personal Codex skill from the user's working preferences. Use for "automate me", "create my mode skill", or requests to capture how the user works.
---

# Automate me

Turn working conventions into a focused personal skill. Use only evidence the user owns and has made available.

## 1. Find an existing skill

Search the active repository's `.agents/skills/` and the user's `~/.agents/skills/` for a matching `*-mode/SKILL.md`. If several match, show their paths and ask which one to update. Update by default when the user names an existing skill.

## 2. Gather evidence

Use the current Codex conversation. Use Codex conversation-history tools only if the session exposes them and the user has access to the history. Do not search undocumented local databases or other workspaces. If recent history is unavailable, ask the user for examples or preferences instead of pretending to mine it.

Look for repeated preferences about response style, delegation, verification, code and prose, tools, and process. Treat a single instance as weak evidence. Keep exact user corrections as evidence. Ask one concise question for the preferences the evidence cannot resolve.

Use Codex collaboration tools for independent history slices only when the session exposes them and delegation is permitted. Otherwise review the available material serially.

## 3. Draft the skill

Use `$skill-creator` when it is available. Otherwise follow the Codex skill format directly:

- Create a project skill at `.agents/skills/<handle>-mode/`, or a personal skill at `~/.agents/skills/<handle>-mode/` when the user wants a personal install.
- Add a `SKILL.md` with `name` and `description` frontmatter.
- Trigger on the chosen skill name and the user's request to work in their style. Avoid generic triggers such as "write code" or "review a PR".
- Keep only preferences that would change future decisions. Link to other skills instead of copying their instructions.

Apply `$unslop` to the draft. Ask the user for feedback before finalizing a subjective personal mode. Do not commit, open a PR, or copy a skill to another repository unless the user asks.

## 4. Validate

Check the frontmatter, trigger, referenced files, and cross-skill links. If the Codex skill validator is available, run it. If the skill needs an objective behavior check, create a blinded eval only when the user asks for one.

## Reply

Summarize the evidence used, the destination path, the choices the draft encodes, and any validation gaps.

## When not to use

- A task-specific workflow belongs in `$skill-creator`.
- A single narrow preference can be written directly into the user's `AGENTS.md` when they want it to apply to a repository.
