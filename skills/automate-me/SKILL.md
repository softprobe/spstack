---
name: automate-me
description: Create or revise a personal Antigravity skill from the user's working preferences. Use for /automate-me, "automate me", "create my mode skill", or requests to capture how the user works.
---

# Automate me

Turn working conventions into a focused personal skill. Use only evidence the user owns and has made available.

## 1. Find an existing skill

Search the active repository's `.agents/skills/` and the user's `~/.gemini/config/skills/` (and `~/.gemini/config/plugins/*/skills/`) for a matching `*-mode/SKILL.md`. If several match, show their paths and ask which one to update. Update by default when the user names an existing skill.

## 2. Gather evidence

Use the current Antigravity conversation (`<appDataDir>/brain/<conversation-id>/.system_generated/logs/transcript.jsonl`) and any conversations the user references. Do not search undocumented local databases or unrelated workspaces. If recent history is unavailable, ask the user for examples or preferences instead of pretending to mine it.

Look for repeated preferences about response style, delegation, verification, code and prose, tools, and process. Treat a single instance as weak evidence. Keep exact user corrections as evidence. Ask one concise question for the preferences the evidence cannot resolve.

Use `invoke_subagent` (`TypeName: "research"`) for independent history slices only when delegation is permitted. Otherwise review the available material serially.

## 3. Draft the skill

Follow the Antigravity skill format (see the built-in `agy-customizations` skill):

- Create a project skill at `.agents/skills/<handle>-mode/SKILL.md`, or a personal global skill at `~/.gemini/config/skills/<handle>-mode/SKILL.md` when the user wants a personal install across workspaces.
- Add YAML frontmatter with `name` (matching the folder name) and `description`.
- Trigger on `/<handle>-mode`, the chosen skill name, and the user's request to work in their style. Avoid generic triggers such as "write code" or "review a PR".
- Keep only preferences that would change future decisions. Link to other skills instead of copying their instructions.

Apply `/unslop` to the draft. Ask the user for feedback before finalizing a subjective personal mode. Do not commit, open a PR, or copy a skill to another repository unless the user asks.

## 4. Validate

Check the YAML frontmatter, trigger description, referenced files, and cross-skill links. If the skill needs an objective behavior check, create a blinded eval only when the user asks for one.

## Reply

Summarize the evidence used, the destination path, the choices the draft encodes, and any validation gaps.

## When not to use

- A recurring cron or scheduled background job belongs in the built-in `automation` skill (`/automation` or `/schedule`).
- A single narrow preference can be written directly into the repository's `AGENTS.md` or `GEMINI.md` (or via `/learn`).
