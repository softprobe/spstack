import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { expect, test } from "bun:test";

const checker = join(import.meta.dir, "check-plan.mjs");
const validPlan = `# Release plan

## Goal and constraints

Ship the requested change while preserving existing behavior.

## Phases

### Phase 1: Prepare the change

**Depends on.** None.
**Owner.** Engineer
**Files.** \`src/\`
**Outcome.** The behavior is implemented.
**Done when.** The relevant checks pass.
**PR and landing.** Open a PR against main; maintainer merges.

## Verification

Run the project checks and exercise the changed behavior.

## Dependencies and risks

No known external dependency.
`;

const runPlan = (plan: string) => {
  const directory = mkdtempSync(join(tmpdir(), "check-plan-test-"));
  const file = join(directory, "plan.md");
  writeFileSync(file, plan);
  try {
    return spawnSync("node", [checker, file], { encoding: "utf8" });
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
};

test("accepts a complete plan and ignores placeholders in examples", () => {
  const result = runPlan(`${validPlan}\n\`\`\`text\n<example>\n\`\`\`\n`);
  expect(result.status).toBe(0);
});

test("rejects a phase without ownership and verification evidence", () => {
  const result = runPlan(validPlan.replace("**Done when.** The relevant checks pass.\n", ""));
  expect(result.status).toBe(1);
  expect(result.stderr).toContain("add **Done when.**");
});

test("rejects unfinished placeholders", () => {
  const result = runPlan(validPlan.replace("Ship the requested change", "Ship <Program>"));
  expect(result.status).toBe(1);
  expect(result.stderr).toContain("replace unfinished placeholder text");
});
