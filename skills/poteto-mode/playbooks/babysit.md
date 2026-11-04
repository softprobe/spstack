### Babysit

**You own the merge frontier. Clear one pull request at a time and stop where the user's decision begins.** A request to land or ship routes to `playbooks/shipping.md`.

1. **Choose the mode and forge.** `drive` works toward merge-ready. `snapshot` makes one status and triage pass. `threads-only` addresses review threads. `check` reports one status snapshot. Use Codex's GitHub tools when available; otherwise use `gh` for GitHub or the repository's supported forge tools. Keep one forge for the whole run.
2. **Work from the lowest unmerged pull request.** Read higher-stack threads and group fixes, but do not let them restart checks on the current frontier.
3. **Use one owner per stack.** Check that nobody else is already babysitting the same stack.
4. **Do not rewrite stack topology.** Do not retarget, rebase, submit a stack, or force-push from this playbook. Report rebase needs to the owner. If the pull request that owns a fix has merged, open a follow-up on the remaining stack only when the user authorized that work.
5. **Handle blockers in order.** Resolve merge conflicts first, then proven review findings, then CI. Batch known fixes into one push. Report a rebase blocker instead of trying to mask it with retries.
6. **Read the forge's current state.** For GitHub, use the watcher bundled beside this skill when its inputs fit the pull request. Resolve its path from the loaded `poteto-mode/SKILL.md`. In `check` mode, request a status snapshot. In `drive` mode, keep the watcher in the active session until it reaches a terminal state. Re-read review threads after each push. Do not claim an ongoing watcher unless Codex provides one.
7. **Classify CI before retrying.** Give a suspected infrastructure failure one fresh build. If it fails the same way again, inspect the logs and reclassify. Check whether a failure outside the diff comes from a stale base before calling it flaky.
8. **Triage review comments skeptically.** Verify each claim against the current code and use `../references/review-finding-triage.md`. Fix proven findings. Dismiss unsupported findings with the concrete disproof. Ask the user about high-impact ambiguity. Send replies or resolve threads only when the user has authorized those external actions.
9. **Stop at the user's line.** Babysitting does not authorize merging. Merge only after an explicit request. Report blockers, required decisions, and the current merge state.

Codex does not promise that a session keeps polling after the app or session ends. If the user wants to resume later, leave a checkpoint with the pull request, branch, checks, threads, and next action.

**Reply:** mode, forge, frontier, blockers, review findings, checks, and the next required decision.
