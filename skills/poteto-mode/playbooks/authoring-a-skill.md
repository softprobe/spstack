### Authoring or modifying a skill

1. Use `$skill-creator` when it is available. Otherwise follow the Codex skill format: a skill folder with `SKILL.md`, YAML frontmatter containing `name` and `description`, and only the supporting files the workflow needs.
2. Keep the trigger narrow and user-centered. Put operational details in the body, and link to supporting references instead of duplicating them.
3. Validate the frontmatter, local links, and any scripts. Run the Codex skill validator when available.
4. Evaluate objective behavior when a realistic isolated check is available. Do not use a blind comparison for a subjective preference skill.
5. Follow the **Opening a PR** playbook when the user asks to ship the skill.

**Reply:** what the skill covers, its trigger, the validation performed, and any limits.
