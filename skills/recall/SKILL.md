---
name: recall
description: Rebuild recent work context from Codex conversations, live repository state, and shared records. Use for $recall, "catch me up", "where did I leave off", or before resuming a topic.
---

# Recall

Rebuild the user's recent working context and return a short current-state brief. Read only the conversations and records that fit the request.

Codex does not promise a stable transcript path. Use Codex conversation or history tools only when the current session exposes them. Do not inspect undocumented application databases or search other workspaces. If history tools are unavailable, use the current conversation and live repository state. Ask the user for a conversation link or transcript only when it is required to answer.

## Scope

1. Route a specific conversation to the Session pickup playbook. Route a request to capture working habits to `$automate-me`. Use this skill for context across recent work.
2. Set a real time window, topic, and workspace. Default to the active workspace and the last seven days when the user says "recent" without a range.
3. Use the current Codex conversation/history tools to find relevant chats, if available. Read only the matching sections. Never search unrelated project history.
4. Search the shared record when the topic names a feature or subsystem. Use only connected source-control, issue, document, chat, or observability tools available in this session. Record unavailable sources as gaps.
5. Check surfaced branches, pull requests, and tickets against live state with `git`, `gh`, or the connected tool. Read the full transcript when the answer depends on the exact actions an agent took.
6. Sanitize private information before including it in a public artifact.

## Output

Lead with the capsule, then the thread status, problems, and next move.

- **Capsule.** At most five bullets.
- **Threads.** One line per thread with one status: `[merged #N]`, `[open PR #N]`, `[in flight <branch>]`, `[verified, uncommitted]`, `[reverted #N]`, or `[planned, not started]`.
- **Problems.** At most five recurring problems, with shipped or reverted fixes where known.
- **Next move.** One concrete action.

Cite conversation links and shared records when the tools expose them. Do not invent identifiers or citations.
