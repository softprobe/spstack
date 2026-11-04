# Set up Spstack for Codex

Install the plugin, choose optional delegation preferences, and run a first task.

## Install the plugin

Add the Softprobe marketplace and install Spstack:

```sh
codex plugin marketplace add softprobe/spstack
codex plugin add spstack@softprobe-spstack
```

In Codex desktop, restart the app and enable Spstack from the Plugins directory. Then open a new session.

For a local checkout, run `codex plugin marketplace add .` from the repository root, then run `codex plugin add spstack@softprobe-spstack`.

## Set optional model preferences

Run `$setup-pstack` only if you want role-specific delegate preferences. The default is to inherit the current Codex session model and reasoning effort.

The setup skill writes user configuration to `$CODEX_HOME/pstack-models.yaml`, or `~/.codex/pstack-models.yaml` when `CODEX_HOME` is unset. It uses only values supported by the active Codex collaboration tools. Start a new session after changing the file.

## Create a project verification skill

If your repository has no app driver, run `$create-verification-skill`. The skill creates `.agents/skills/verify-<app>/` with launch, health-check, drive, evidence, and cleanup steps for your app. It also creates a feature map under `features/`.

Use `$create-formal-verification-skill` when you need to check a property that tests rarely reach, such as a concurrency invariant, retry rule, state machine, or parser condition.

## Run your first task

Start with a small, real change and a check that can pass or fail:

```text
$poteto-mode add a --json flag to this command. Keep text output byte-identical. Verify both formats.
```

`$poteto-mode` selects a playbook and turns its steps into a checklist. Invoke it again when you start a new task. For rules that need to apply across tasks, put them in the repository's `AGENTS.md`.

Next: [Route work through `$poteto-mode`](./02-poteto-mode.md).
