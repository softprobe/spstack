#!/usr/bin/env node
import fs from "node:fs";
import process from "node:process";

const REQUIRED_SECTIONS = [
  "Goal and constraints",
  "Phases",
  "Verification",
  "Dependencies and risks",
];
const PHASE_FIELDS = [
  "Depends on.",
  "Owner.",
  "Files.",
  "Outcome.",
  "Done when.",
  "PR and landing.",
];

const file = process.argv[2];
if (!file) {
  console.error("Usage: node check-plan.mjs <plan.md>");
  process.exit(2);
}

const source = fs.readFileSync(file, "utf8");
const problems = [];
const fail = (line, message) => problems.push(`${file}:${line}: ${message}`);
const lines = source.split(/\r?\n/);
const prose = [];
let fence = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const match = line.match(/^\s*(`{3,}|~{3,})/);
  if (match) {
    const marker = match[1];
    if (!fence) fence = { char: marker[0], length: marker.length };
    else if (marker[0] === fence.char && marker.length >= fence.length) fence = null;
    continue;
  }
  if (fence) continue;
  prose.push({ number: i + 1, text: line });
}

if (fence) fail(lines.length, "unclosed code fence");
if (!prose.some(({ text }) => /^#\s+\S/.test(text))) fail(1, "add a plan title");

for (const section of REQUIRED_SECTIONS) {
  if (!prose.some(({ text }) => text === `## ${section}`))
    fail(1, `missing section "## ${section}"`);
}

const phasesIndex = prose.findIndex(({ text }) => text === "## Phases");
const phaseHeadings = prose
  .map(({ number, text }, index) => ({ number, text, index }))
  .filter(({ text, index }) => index > phasesIndex && /^### Phase\s+\d+:\s+\S/.test(text));
if (phasesIndex !== -1 && phaseHeadings.length === 0)
  fail(prose[phasesIndex].number, "add at least one numbered phase");

for (let i = 0; i < phaseHeadings.length; i++) {
  const phase = phaseHeadings[i];
  const next = prose.slice(phase.index + 1).findIndex(({ text }) => /^#{1,3} /.test(text));
  const end = next === -1 ? prose.length : phase.index + 1 + next;
  const body = prose.slice(phase.index + 1, end).map(({ text }) => text).join("\n");
  for (const field of PHASE_FIELDS) {
    if (!body.includes(`**${field}**`))
      fail(phase.number, `${phase.text}: add **${field}**`);
  }
}

const placeholder = /<(?!https?:\/\/)[^>\n]+>|\b(?:TODO|TBD)\b/i;
for (const line of prose) {
  if (placeholder.test(line.text)) fail(line.number, "replace unfinished placeholder text");
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`OK: ${file} follows the multi-phase plan structure.`);
