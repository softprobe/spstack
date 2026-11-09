---
name: recall
description: Rebuild recent work context from Antigravity conversations, live repository state, and shared records. Use for /recall, "catch me up", "where did I leave off", or before resuming a topic.
---

# Recall

Rebuild the user's recent working context and return a short current-state brief. Read only the conversations and records that fit the request.

Antigravity stores conversation transcripts at `<appDataDir>/brain/<conversation-id>/.system_generated/logs/transcript.jsonl` (typically `~/.gemini/antigravity/brain/<conversation-id>/.system_generated/logs/transcript.jsonl`). Use only the current conversation, conversations the user links or mentions, or transcripts matching the active workspace. Do not inspect undocumented application databases or search unrelated workspaces.

## Scope

1. Route a specific conversation to the Session pickup playbook. Route a request to capture working habits to `/automate-me`. Use this skill for context across recent work.
2. Set a real time window, topic, and workspace. Default to the active workspace and the last seven days when the user says "recent" without a range.
3. Inspect matching conversation transcripts in `<appDataDir>/brain/*/.system_generated/logs/transcript.jsonl` when accessible and scoped to the current workspace. Start with `transcript.jsonl` and read `transcript_full.jsonl` only for specific lines with `truncated_fields`. Never search unrelated project history.
4. Search the shared record when the topic names a feature or subsystem. Use only connected source-control, issue, document, chat, or observability MCP tools and CLIs available in this session. Record unavailable sources as gaps.
5. Check surfaced branches, pull requests, and tickets against live state with `git`, `gh`, or the connected MCP tool.
6. Sanitize private information before including it in a public artifact.

## Output

Lead with the capsule, then the thread status, problems, and next move.

- **Capsule.** At most five bullets.
- **Threads.** One line per thread with one status: `[merged #N]`, `[open PR #N]`, `[in flight <branch>]`, `[verified, uncommitted]`, `[reverted #N]`, or `[planned, not started]`.
- **Problems.** At most five recurring problems, with shipped or reverted fixes where known.
- **Next move.** One concrete action.

Cite conversation links as `[<label>](conversation://<conversation-id>)` and shared records when available. Do not invent identifiers or citations.
