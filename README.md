# Spstack

Spstack is Softprobe's maintained fork of [pstack](https://github.com/cursor/plugins/tree/main/pstack), created by [Lauren Tan (@poteto)](https://x.com/poteto). The upstream project is licensed under MIT. See [LICENSE](./LICENSE) and [UPSTREAM.md](./UPSTREAM.md) for attribution and sync details.

## Branch strategy

Spstack separates shared workflow logic from runtime-specific tool bindings so each harness gets clean, single-dialect instructions without context bloat:

| Branch | Purpose | Target runtime |
|---|---|---|
| [`main`](https://github.com/softprobe/spstack/tree/main) | Upstream `pstack` syncs and shared Softprobe workflow gates (domain model gates, comment rationale policy, scope gate). | Shared base (runtime-neutral) |
| [`codex`](https://github.com/softprobe/spstack/tree/codex) | Codex-native plugin: Codex marketplace manifest, `$CODEX_HOME/pstack-models.yaml`, and Codex tool bindings. | OpenAI Codex |
| [`agy`](https://github.com/softprobe/spstack/tree/agy) | Antigravity-native plugin: `agy` plugin layout, `~/.gemini/config/pstack-models.yaml`, and Antigravity tool bindings (`invoke_subagent`, `update_steps`, `manage_task`). | Google Antigravity (`agy`) |

### Sync flow

```text
cursor/plugins (pstack/) ──▶ main (shared + upstream sync) ──┬──▶ codex
                                                            └──▶ agy
```

1. Sync upstream `pstack` changes and author shared workflow improvements on `main`.
2. Merge `main` into `codex` and `agy` to propagate shared changes to each runtime branch.
3. Keep product-specific tool names, paths, and manifests strictly on `codex` or `agy`.

## Install

### Google Antigravity (`agy`)

Clone or check out the `agy` branch and install with the Antigravity CLI:

```sh
git clone -b agy https://github.com/softprobe/spstack.git
agy plugin install ./spstack
agy plugin validate ./spstack
```

### Codex

Add the Softprobe marketplace from the `codex` branch and install Spstack:

```sh
codex plugin marketplace add softprobe/spstack#codex
codex plugin add spstack@softprobe-spstack
```

Or install from a local checkout of the `codex` branch:

```sh
git clone -b codex https://github.com/softprobe/spstack.git
codex plugin marketplace add ./spstack
codex plugin add spstack@softprobe-spstack
```

Antigravity automatically discovers and enables the plugin on the next turn. You can review or toggle it in the Customizations UI (`customization://spstack`). Run `/setup-pstack` only if you want role-specific subagent model preferences, then start a substantial task with `/poteto-mode`.

When working inside the `spstack` checkout itself, `.agents/skills.json` registers `./skills` so all skills are discovered at the workspace level automatically.

## Use the stack

`poteto-mode` is the entry point for non-trivial engineering work. It selects one of the included playbooks, builds a short task checklist, and routes to focused skills as needed. State the goal, constraints, and a check that can pass or fail.

See [docs/guide/README.md](./docs/guide/README.md) for the full user guide, or run `setup-pstack` in a new session to configure optional role-specific model preferences.
