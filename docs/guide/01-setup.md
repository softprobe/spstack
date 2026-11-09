# Set up Spstack for Antigravity

Install the plugin, choose optional delegation preferences, and run a first task.

## Install the plugin

Clone the `antigravity` branch and install Spstack with the Antigravity CLI:

```sh
git clone -b antigravity https://github.com/softprobe/spstack.git
cd spstack
agy plugin install .
```

Or install directly into your global (`~/.gemini/config/plugins/spstack`) or workspace (`.agents/plugins/spstack`) plugins directory:

```sh
mkdir -p ~/.gemini/config/plugins
git clone -b antigravity https://github.com/softprobe/spstack.git ~/.gemini/config/plugins/spstack
```

In Antigravity, open a new conversation or visit [spstack](customization://spstack) in the Customizations UI to inspect its bundled skills and subagents (`poteto-agent`, `comment-sicko`).

## Set optional model preferences

Run `/setup-pstack` only if you want role-specific subagent model tier preferences. The default is `"inherit"`, which uses your current Antigravity conversation model.

The setup skill writes configuration to `.agents/pstack-models.yaml` (workspace-scoped) or `~/.gemini/config/pstack-models.yaml` (global fallback). It maps roles to Antigravity's `invoke_subagent` `Model` tiers (`inherit`, `flash_lite`, `flash`, `pro`).

## Create a project verification skill

If your repository has no app driver, run `/create-verification-skill`. The skill creates `.agents/skills/verify-<app>/` with launch, health-check, drive, evidence, and cleanup steps for your app. It also creates a feature map under `features/`.

Use `/create-formal-verification-skill` when you need to check a property that tests rarely reach, such as a concurrency invariant, retry rule, state machine, or parser condition.

## Run your first task

Start with a small, real change and a check that can pass or fail:

```text
/poteto-mode add a --json flag to this command. Keep text output byte-identical. Verify both formats.
```

`/poteto-mode` selects a playbook and turns its steps into a checklist. Invoke it again when you start a new task. For rules that need to apply across tasks, put them in the repository's `AGENTS.md` or `.agents/rules/`.

Next: [Route work through `/poteto-mode`](./02-poteto-mode.md).
