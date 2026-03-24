import * as fs from "fs";
import { parse, type CV, type Company, type Role } from "../schema";
import { formatDates } from "../date";

function renderRole(role: Role): string {
  const lines: string[] = [];
  lines.push(`#### ${role.title}`);
  lines.push(`*${formatDates(role.start, role.end)}*\n`);

  for (const b of role.bullets) {
    lines.push(`- ${b}`);
  }

  lines.push(`\n> **Tech:** ${role.techStack.join(" · ")}\n`);

  return lines.join("\n");
}

function renderCompany(company: Company): string {
  const lines: string[] = [];
  lines.push(`### ${company.name}`);
  lines.push(`*${formatDates(company.start, company.end)}*\n`);

  for (const role of company.roles) {
    lines.push(renderRole(role));
  }

  return lines.join("\n");
}

function render(data: CV): string {
  const lines: string[] = [];

  lines.push(`# ${data.name}\n`);
  lines.push(`**${data.tagline}**\n`);

  const profiles = data.profiles
    .map((p) => `[${p.name}](${p.url})`)
    .join(" · ");
  lines.push(`${profiles}\n`);

  lines.push("---\n");

  lines.push("## Summary\n");
  lines.push(`${data.summary}\n`);

  lines.push("---\n");
  lines.push("## Experience\n");

  for (const company of data.experience) {
    lines.push(renderCompany(company));
  }

  if (data.projects.length > 0) {
    lines.push("---\n");
    lines.push("## Projects\n");

    for (const project of data.projects) {
      lines.push(`**[${project.name}](${project.url})**\n`);
      lines.push(`${project.description}\n`);
    }
  }

  lines.push("---\n");
  lines.push("## Education\n");

  for (const edu of data.education) {
    lines.push(`**${edu.institution}**\n`);
    lines.push(`${edu.field} · ${edu.dates}\n`);
    lines.push(`${edu.details}\n`);
  }

  if (data.patents.length > 0) {
    lines.push("---\n");
    lines.push("## Patents\n");

    for (const patent of data.patents) {
      lines.push(`**${patent.title}**\n`);
      lines.push(`[${patent.id}](${patent.url}) · ${patent.grantedDate}\n`);
      lines.push(`${patent.description}\n`);
    }
  }

  if (data.certifications.length > 0) {
    lines.push("---\n");
    lines.push("## Certifications\n");

    for (const cert of data.certifications) {
      lines.push(`**${cert.name}** · ${cert.issuer}\n`);
      lines.push(`[${cert.id}](${cert.url}) · ${cert.date}\n`);
    }
  }

  if (data.interests.length > 0) {
    lines.push("---\n");
    lines.push("## Interests\n");

    for (const interest of data.interests) {
      lines.push(`**${interest.name}**\n`);
      for (const b of interest.bullets) {
        lines.push(`- ${b}`);
      }
      lines.push("");
    }
  }

  return lines.join("\n");
}

function main() {
  const json = JSON.parse(fs.readFileSync(`${process.cwd()}/cv.json`, "utf-8"));
  const cv = parse(json);
  const md = render(cv);

  const outputDir = `${process.cwd()}/output`;
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outPath = `${outputDir}/CV.md`;
  fs.writeFileSync(outPath, md);
  console.log(outPath);

  const readmePath = `${process.cwd()}/README.md`;
  fs.writeFileSync(readmePath, md);
  console.log(readmePath);
}

main();
