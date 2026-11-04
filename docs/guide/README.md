# The Spstack guide

Spstack packages Codex skills for code understanding, design, implementation, and verification. Give Codex a goal and a way to check it. `$poteto-mode` selects a playbook and invokes focused skills as needed.

1. [Set up Spstack](./01-setup.md).
2. [Route work through `$poteto-mode`](./02-poteto-mode.md).
3. [Understand the code](./03-understand.md).
4. [Design the change](./04-design.md).
5. [Build and clean the change](./05-build-and-clean.md).
6. [Verify and ship](./06-verify-and-ship.md).
7. [Run a long task safely](./07-overnight.md).
8. [Use the principles](./08-principles.md).
9. [Make Spstack yours](./09-make-it-yours.md).
10. [Recipes and pitfalls](./10-recipes-and-pitfalls.md).

If you are unsure which skill fits, invoke [`$poteto-help`](../../skills/poteto-help/SKILL.md). It gives you a prompt to send and links the source skill without starting the work.

```text
$poteto-mode the export writes duplicate rows when a retry lands mid-run. Reproduce it, fix the cause, and show the verification output.
```
