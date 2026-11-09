---
name: make-bot-ui
description: Build a small web UI whose actions call a webhook or backend endpoint the user provides. Use for /make-bot-ui or when the user wants buttons or a dashboard to trigger an external workflow.
---

# Build a webhook UI

Inspect the repository and follow its existing app structure. Use this skill only for the UI and server integration. It does not create an external webhook service; for recurring scheduled agent runs in Antigravity, use the built-in `automation` skill (`/automation`).

## Confirm the endpoint contract

Use the endpoint documentation or configuration the user provides. Identify the method, payload, authentication, expected response, and rate limits. Do not invent endpoint paths, headers, credentials, or side effects. If the contract is missing, ask for the minimum facts needed before wiring the external request.

Keep credentials on the server. Read secrets from environment variables or the project's existing secret manager. Never put them in browser code, committed files, logs, screenshots, or chat. Never send a live request without explicit user authorization.

## Build the UI and server route

1. Define the request shape and validate it at the server boundary.
2. Add a same-origin server route that checks user input and calls the configured endpoint.
3. Keep the browser limited to the local route. Do not let client code choose arbitrary URLs or forward arbitrary headers.
4. Handle timeout, non-success responses, and duplicate submissions according to the endpoint contract.
5. Add a local mock or fixture so the user flow can be checked without triggering the external system.
6. Verify the actual UI and local server route with the project's existing driver or the `chrome-devtools` skill / `/browser` workflow when available.

## Expose the UI

Do not expose a local server to a network by default. If the user asks for LAN or tailnet access, check the repository and machine's existing setup, explain the bind address and access scope, and use an available supported tool. Do not install or reconfigure network software without the user's request.

## Report

Name the local route, the proof you ran, and any endpoint behavior that remains unverified. State whether any live external request was made.
