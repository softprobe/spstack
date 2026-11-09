### Authoring or modifying a skill

1. Follow the Antigravity skill format (see the built-in `agy-customizations` skill): a skill folder with `SKILL.md`, YAML frontmatter containing `name` (matching the directory name) and `description`, plus `disable-slash-command: true` when the skill should not appear as a `/` command, and only the supporting files (`references/`, `scripts/`, `examples/`, `resources/`) the workflow needs.
2. Keep the trigger narrow and user-centered. Put operational details in the body, and link to supporting references instead of duplicating them.
3. Validate the YAML frontmatter, local links, and any scripts.
4. Evaluate objective behavior when a realistic isolated check is available. Do not use a blind comparison for a subjective preference skill.
5. Follow the **Opening a PR** playbook when the user asks to ship the skill.

**Reply:** what the skill covers, its trigger, the validation performed, and any limits.
