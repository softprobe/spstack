# Spstack for Codex

Spstack is Softprobe's Codex-first fork of [pstack](https://github.com/cursor/plugins/tree/main/pstack), created by [Lauren Tan (@poteto)](https://x.com/poteto). The upstream project is licensed under MIT. See [LICENSE](./LICENSE) and [UPSTREAM.md](./UPSTREAM.md) for attribution and source details.

The repository packages one Codex plugin with a single canonical `skills/` tree. The Codex workflow and setup are maintained here without a parallel adapter layer.

## Install

Add the Softprobe marketplace and install Spstack:

```sh
codex plugin marketplace add softprobe/spstack
codex plugin add spstack@softprobe-spstack
```

In the Codex desktop app, restart Codex after adding the marketplace. Then enable Spstack in the Plugins directory. In a new session, run `$setup-pstack` to configure optional delegation preferences, then start a substantial task with `$poteto-mode`.

To install a development checkout, run these commands from its repository root:

```sh
codex plugin marketplace add .
codex plugin add spstack@softprobe-spstack
```

## Use the stack

`$poteto-mode` is the entry point for non-trivial engineering work. It selects one of the included playbooks, builds a short task checklist, and routes to focused skills as needed. State the goal, constraints, and a check that can pass or fail.

Use a focused skill directly when you need a specific workflow, such as `$how`, `$why`, `$architect`, `$tdd`, `$interrogate`, or `$create-verification-skill`. The bundled skills are invoked explicitly, and `$poteto-mode` routes substantial tasks to the relevant playbook and skills. Their full instructions stay out of context until used.

The included skills cover:

- 23 `poteto-mode` playbooks for investigation, design, implementation, verification, PR work, and longer runs.
- Reusable engineering workflows for code understanding, review, test-driven changes, verification, technical writing, and skill authoring.
- 24 focused principle skills that `poteto-mode` reads only when a task calls for them.

Create project-specific verification skills under `.agents/skills/verify-<app>/`. Keep those skills in the project that owns the app, rather than adding each one to Spstack.

## Model preferences

Delegates inherit the current Codex session model by default. Run `$setup-pstack` only when you want role-specific preferences. It writes `pstack-models.yaml` under `CODEX_HOME` (normally `~/.codex/`) and uses only model and reasoning values supported by the active Codex tools.

If the current session does not expose Codex collaboration tools, the skills continue serially where possible and report any parallel-only step they could not run.

## Development

The plugin manifest is [`plugin.json`](./plugin.json). The single canonical skill tree is [`skills/`](./skills/). The repo marketplace manifest is [`.agents/plugins/marketplace.json`](./.agents/plugins/marketplace.json).

When editing a skill, keep it self-contained: use Codex tools directly, link to local references only when they add detail, and do not require a separate adapter document. Run the skill validator on changed skills and check that local links resolve.
