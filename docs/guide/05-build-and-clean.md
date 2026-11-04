# Build the change and clean the diff

The build playbooks share one discipline. Say what you observed, and let the playbook demand the evidence. This page shows what to put in the prompt for each common build task, then the cleanup habit that keeps diffs reviewable.

## Prompt each build playbook with what you know

A bug prompt states the symptom and asks for a reproduction first:

```text
$poteto-mode this command emits two records after a retry. repro first, then fix and verify.
```

A feature prompt states the behavior and what must not change:

```text
$poteto-mode add a --json flag. text output stays byte-identical. verify both forms.
```

A refactoring prompt pins behavior before structure moves:

```text
$poteto-mode move parsing into one module, zero behavior change. record the current output first and prove it's unchanged after.
```

A perf prompt states the measurement, not an impression:

```text
$poteto-mode startup takes 1.8s on this fixture. trace it, fix the measured cause, show me before and after.
```

Each of these routes to its playbook ([Bug fix](../../skills/poteto-mode/playbooks/bug-fix.md), [Feature](../../skills/poteto-mode/playbooks/feature.md), [Refactoring](../../skills/poteto-mode/playbooks/refactoring.md), [Perf issue](../../skills/poteto-mode/playbooks/perf-issue.md)), and the playbook supplies the steps you didn't type: reproduce before fixing, name the data shape before implementing, pin behavior before restructuring, profile before optimizing.

For sustained improvement of one number, there's the [Hillclimb playbook](../../skills/poteto-mode/playbooks/hillclimb.md). Give it the metric, a target, and a floor on attempts, and it loops one hypothesis at a time with a frozen measurement harness. It keeps wins and reverts everything else.

Both perf playbooks run [`$benchmark-checklist`](../../skills/benchmark-checklist/SKILL.md) on their numbers. Perf issue vets its baseline and every number after it, and Hillclimb vets its harness before freezing it. [Verify and ship](./06-verify-and-ship.md#vet-a-measured-number-with-benchmark-checklist) shows when to type it yourself.

Sometimes you want the cause before any fix. For a live symptom, such as a leak, an idle CPU spin, or a visual glitch, the [Runtime forensics playbook](../../skills/poteto-mode/playbooks/runtime-forensics.md) instruments the running process. For a profile you already captured, the [Trace forensics playbook](../../skills/poteto-mode/playbooks/trace-forensics.md) reads the artifact and maps the hot frame to source. Both return a diagnosis, not a fix:

```text
$poteto-mode here's a cpuprofile from the slow startup. tell me where the time goes and which source lines own it. no fix yet.
```

## Write the failing test first with `$tdd`

When a bug has a cheap local test path, the whole prompt can be two words:

```text
$tdd implement
```

In context, that's enough. [`$tdd`](../../skills/tdd/SKILL.md) writes the smallest test that fails for the intended reason, then the fix, then reruns the test. If a test would need broad harness setup or brittle mocks, the skill says so and uses the closest executable check instead. Don't force a test where a real command is stronger evidence.

## Load the TypeScript rules by name

[`typescript-best-practices`](../../skills/typescript-best-practices/SKILL.md) turns the type-system principles into concrete rules: discriminated unions, `unknown` at boundaries, exhaustive variants, schema-derived types. It doesn't load on its own, so type `$typescript-best-practices` when a task touches `.ts` or `.tsx` files.

## Clean before you commit

Before each commit, inspect the diff for narrating comments, unsupported guards, dead paths, and unrelated edits. Use [`$unslop`](../../skills/unslop/SKILL.md) for PR descriptions and commit messages. Use [`$no-comments`](../../skills/no-comments/SKILL.md) when comments need a separate review.

For prose, `$unslop` takes a target and any extra rules you have:

```text
$unslop the readme changes, no emdashes
```

You'll develop your own shorthand. The skill reads intent fine from terse prompts like `unslop that, tighten it`.

## Review comments with `$no-comments`

Comments need their own pass, and not from the agent that wrote them. An author defends its comments the way you'd defend yours. So before review, hand them to fresh eyes:

```text
$no-comments the diff
```

[`$no-comments`](../../skills/no-comments/SKILL.md) gives a separate Codex reviewer the role in [`comment-sicko.md`](../../skills/no-comments/references/comment-sicko.md) when collaboration is available. The reviewer reports only. It removes narration and redundant or contradicted comments while preserving concise rationale that code cannot explain, including business constraints, design choices, and operational lessons. The reviewer checks relevant contracts, design docs, ADRs, issues, PRs, and history; when useful rationale cannot be confirmed or refuted, it reports it as unverified instead of deleting it. If no independent reviewer is available, the skill applies the same rules itself and states that the review was not independent.

`$unslop` cleans up prose. `$no-comments` reviews code comments with a fresh perspective.

**Pitfall:** a diff with narrating comments, unsupported guards, and unrelated edits is harder to review. Remove that material before you commit.

Next: [Verify and ship](./06-verify-and-ship.md).
