# pstack for Codex

This directory contains the Codex adaptation of the upstream plugin. The original Cursor plugin remains unchanged in the parent directory.

The adapter installs 58 pstack skills as user-level Codex skills under `$CODEX_HOME/skills` (normally `~/.codex/skills`). Each skill is explicitly invoked, matching the upstream plugin's manual invocation setting. Start with `$poteto-mode`; specialized skills remain available by name.

Run `../scripts/install-codex-skills.sh` to install the skill folders. It is safe to rerun when the installed copies still match, and refuses to replace a conflicting or locally edited skill. Start a new Codex session if the skills do not appear in the current session's picker.

The default model preference is `inherit-parent` in [pstack-models.yaml](./pstack-models.yaml). The setup skill can change this file using model IDs and reasoning efforts supported by the active Codex tools.

The upstream `automations/benny/` sources are retained but dormant. This setup does not create, enable, or schedule automations.
