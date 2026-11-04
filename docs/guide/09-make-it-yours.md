# Make Spstack yours

Start with `$poteto-mode` and the focused skills you need. Add project instructions or a new skill when the same need appears more than once.

## Create a personal mode

Run `$automate-me` to draft a personal skill from preferences you state or history Codex exposes in the current session. Codex does not guarantee a transcript path. If history tools are unavailable, give it examples instead of asking it to search local application data.

Personal skills live in `~/.agents/skills/<name>-mode/`. Project skills live in `.agents/skills/<name>-mode/`. Use `$skill-creator` when it is available, and ask for a review before saving a subjective preference skill.

## Capture a lesson with `$reflect`

After a task that exposed a durable lesson, run:

```text
$reflect review this conversation for lessons that would change future decisions. Propose skill edits and wait for my approval.
```

`$reflect` proposes focused skill changes. It waits for approval before editing skills.

## Fix repeated mistakes with `$correct`

When agents repeat the same mistake, use `$correct` to find a structural fix. Prefer architecture, types, lint, or tests before adding another prose rule.

## Author a focused skill

When you know the workflow you want to capture, ask `$skill-creator` to create a skill. If that built-in skill is unavailable, use the [Authoring a skill playbook](../../skills/poteto-mode/playbooks/authoring-a-skill.md). Keep the skill under `.agents/skills/<name>/` for the current project, or `~/.agents/skills/<name>/` for personal use.

Use [`$create-verification-skill`](../../skills/create-verification-skill/SKILL.md) for an app driver and feature map. Use [`$create-formal-verification-skill`](../../skills/create-formal-verification-skill/SKILL.md) for a formal property checker.

## Evaluate a skill change

A skill affects future work, so evaluate it with realistic tasks before relying on it. The [Eval playbook](../../skills/poteto-mode/playbooks/eval.md) uses blinded comparisons when the current Codex session can create isolated candidates. If the session cannot do that, run a smaller serial check and state the limitation.

## Keep scopes separate

Keep project verification skills in the project that owns the app. Keep personal preferences in the user's skill directory. Add a skill to Spstack only when it is a general workflow other projects can use.

Next: [Recipes and pitfalls](./10-recipes-and-pitfalls.md).
