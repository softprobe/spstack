### Worktree and simulator cleanup

1. Record `df -h /` and run the `worktree-audit.sh` script beside the loaded `poteto-mode/SKILL.md`, with `[-b <pr-base-ref>] [repo-path]`. The script reads worktree paths from Git and reports size, age, merge state, local changes, remote state, PR state, and a review bucket. It does not read Codex chat history or decide whether a chat still uses a worktree.
2. Check the Codex app's available conversation or worktree tools for active and pinned chats that reference each candidate. If those tools are unavailable, use the sidebar or ask the user about ambiguous candidates. A clean branch can still contain active work.
3. Inspect all tracked and untracked changes before pruning a dirty worktree. Preserve work in progress and any untracked files the user may need. Do not treat an audit bucket as authorization to delete.
4. For a worktree confirmed unused, use `git worktree remove <path>` and then `git worktree prune`. Do not add `--force` or manually remove surviving files until you have confirmed they are disposable and the user requested cleanup.
5. To reclaim simulator space, inspect `xcrun simctl list devices` and unavailable devices first. Delete only the simulator set the user asked to remove. Inspect runtimes and caches separately before removing them.
6. Record `df -h /` again and list the paths removed with the reason each was safe to prune.

This playbook removes local state. Keep the evidence for every selected path visible before running a destructive command.

**Reply:** space before and after, worktrees or simulator state removed, and any candidate held because its use or contents could not be confirmed.
