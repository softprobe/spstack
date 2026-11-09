# Spstack for Antigravity

Spstack is Softprobe's Antigravity-native fork of [pstack](https://github.com/cursor/plugins/tree/main/pstack), created by [Lauren Tan (@poteto)](https://x.com/poteto). The upstream project is licensed under MIT. See [LICENSE](./LICENSE) and [UPSTREAM.md](./UPSTREAM.md) for attribution and source details.

The repository packages one Antigravity plugin with a single canonical `skills/` tree and bundled subagents under `agents/`.

## Install

Install from a checkout with the Antigravity CLI:

```sh
git clone -b antigravity https://github.com/softprobe/spstack.git
cd spstack
agy plugin install .
```

Or clone/symlink directly into your global Antigravity plugins directory (`~/.gemini/config/plugins/spstack`):

```sh
git clone -b antigravity https://github.com/softprobe/spstack.git ~/.gemini/config/plugins/spstack
```

Antigravity automatically discovers and enables the plugin on the next turn. You can review or toggle it in the Customizations UI (`customization://spstack`). Run `/setup-pstack` only if you want role-specific subagent model preferences, then start a substantial task with `/poteto-mode`.

When working inside the `spstack` checkout itself, `.agents/skills.json` registers `./skills` so all skills are discovered at the workspace level automatically.

## Use the stack

`/poteto-mode` is the entry point for non-trivial engineering work. It selects one of the included playbooks, builds a short task checklist, and routes to focused skills as needed. State the goal, constraints, and a check that can pass or fail.

Use a focused skill directly when you need a specific workflow, such as `/how`, `/why`, `/architect`, `/tdd`, `/interrogate`, or `/create-verification-skill`. Skills are loaded via progressive disclosure, so their full instructions stay out of context until activated.

The included skills cover:

- 23 `poteto-mode` playbooks for investigation, design, implementation, verification, PR work, and longer runs.
- Reusable engineering workflows for code understanding, review, test-driven changes, verification, technical writing, and skill authoring.
- 24 focused principle skills (`disable-slash-command: true`) that `poteto-mode` reads on demand when a task triggers them.
- Bundled delegate subagents (`poteto-agent` and `comment-sicko`) under [`agents/`](./agents/).

Create project-specific verification skills under `.agents/skills/verify-<app>/`. Keep those skills in the project that owns the app, rather than adding each one to Spstack.

## Model preferences

Subagents spawned via `invoke_subagent` inherit the parent Antigravity session model (`Model: "inherit"`) by default. Run `/setup-pstack` only when you want role-specific preferences. It writes `~/.gemini/config/pstack-models.yaml` (or `.agents/pstack-models.yaml` for a workspace) using Antigravity's native subagent model tiers (`inherit`, `flash_lite`, `flash`, `pro`).

## Development

The plugin manifest is [`plugin.json`](./plugin.json). The single canonical skill tree is [`skills/`](./skills/). Bundled subagent definitions live in [`agents/`](./agents/), and workspace skill discovery is configured in [`.agents/skills.json`](./.agents/skills.json).

When editing a skill, keep it self-contained: use native Antigravity tools directly (`read_file`, `edit_file`, `write_file`, `run_command`, `manage_task`, `invoke_subagent`, `define_subagent`, `manage_subagents`, `send_message`, `ask_question`, `schedule`, `search_web`, `call_mcp_tool`), link to local references only when they add detail, and check that YAML frontmatter and local links resolve.
