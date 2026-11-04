### Opening a PR

Invoked at the end of every other playbook.

**Worktree.** Use a git worktree off the target base when the current Codex session supports worktrees. Give each writer a separate worktree. If it does not, keep writes serial. For a dirty branch with unrelated work, preserve those changes and move this task to a clean worktree. Rebuild a snarled worktree from its base and reapply only the needed changes.

**Commits.** Commit liberally. Rebase into small, ordered commits before opening PRs. Each commit is a future PR: landable, ordered to tell the story. Amend when the fix belongs in a just-made commit. New commit when separable. Commit bodies don't restate the subject.

**PRs.** Inspect the diff for narrating comments, unsupported guards, dead paths, and unrelated edits before commit. Run `$no-comments` before review. Write every PR title, description, and commit body with `$technical-writing`, then apply `$unslop`.

**Titles.** Use Conventional Commits `type(scope): subject`, with no trailing period. Choose a type such as `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, or `perf`. Use the changed area as the scope. Keep the subject short and imperative.

**Descriptions.** The PR body is a one-minute briefing, not a lab notebook, for a reviewer who has the diff. It says why the change exists, what it leaves out, what it could break, and how you proved it works. Write short, simple sentences with few identifiers, no walls of text. The body becomes the squash commit body, so keep that commit under about 40 lines. Use `##` headings, not bold lead-ins, in this order, and drop a section with nothing to say:

- `## Why`: the problem and approach, 1–3 short sentences. No SHAs, rebase genealogy, or "based on main" preamble.
- `## What changed`: 1–3 short bullets. Name a real symbol or path only when it carries the change. Name both sides of a rename or retarget.
- `## Scope`: always. 1–3 short items on what it covers and what it deliberately leaves out (a follow-up, a known gap). No symbols, paths, or file-by-file essay.
- `## Tradeoffs`: only rejected alternatives a reviewer would otherwise ask about. Skip when there was no real choice.
- `## Blast Radius`: 1–2 sentences on who or what it touches and why that is safe or risky. If main is red, state the cost of leaving it red.
- `## Verification`: 1–3 bullets, each a real run path and its outcome. Perf: one primary number with its unit, `before → after`, and a link to the arena or swarm directory for the rest. No sample-size methodology, swarm recitals, or metric tables.

After the sections, attach videos or screenshots when they prove a claim. Full SHAs, swarm or arena lane recitals, lever-correction essays, file-by-file checklists, and "CLEAN" verdicts go in a linked artifact, not the body.

**Forge.** Resolve the repository's forge before the first PR operation and use one set of tools for create, edit, view, watch, and merge. Use Codex's GitHub tools when available. Otherwise use `gh` for GitHub or the repository's supported forge CLI.

**Built-in PR tool.** When the current session provides a GitHub or forge tool for the required PR operation, use it. Use the resolved forge CLI for operations the tool does not support, and for all PR operations when no suitable tool is available.

**Size and stacks.** Prefer narrow PRs when they can land independently. A stack is a base-branch chain. The root PR targets trunk. Each child branch rebases onto its parent's exact tip and its PR targets the parent branch. As a parent merges, move its child onto trunk per `playbooks/shipping.md`. Use the resolved forge's create and edit operations. Branch from trunk only for independent work. Rebase on trunk before substantial stack work.

**Readiness.** Open every PR ready, never as a draft. If the available PR tool defaults to draft, mark it ready. With `gh`, omit `--draft`. Read the PR back before you refer to its status.

**Babysit.** Opening a PR does not start a babysit. Post the URL and keep building. Finish the phase or stack first. Run a separate babysit pass only when the user asks for one after the whole stack exists. A babysit for each new PR stalls the build and spends checks on commits later waves restart. Push back when feedback drifts from intent.

An authorized delegate that opens a PR applies the same diff review and `$no-comments` steps, then returns the URL and verification evidence to the coordinator. It does not start babysitting unless the user's request explicitly assigns it that work.
