import * as fs from "fs";
import { parse, type CV, type Company, type Role } from "../schema";
import { formatDates } from "../date";

const css = fs.readFileSync(`${__dirname}/theme.css`, "utf-8");

function bold(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

function renderRole(role: Role): string {
  const bullets = role.bullets
    .map(
      (b) =>
        `      <li><span class="bullet">•</span><span>${bold(b)}</span></li>`,
    )
    .join("\n");
  return `    <div class="role">
      <div class="role-title">${role.title}</div>
      <div class="role-dates">${formatDates(role.start, role.end)}</div>
      <ul>
${bullets}
      </ul>
      <div class="tech">
        <span class="tech-label">Tech: </span>
        <span class="tech-list">${role.techStack.join(" ∙ ")}</span>
      </div>
    </div>`;
}

function renderCompany(company: Company): string {
  const roles = company.roles.map(renderRole).join("\n");
  return `    <div class="company">
      <div class="company-name">${company.name}</div>
      <div class="company-dates">${formatDates(company.start, company.end)}</div>
      <div class="roles-timeline">
${roles}
      </div>
    </div>`;
}

function render(data: CV): string {
  const companies = data.experience.map(renderCompany).join("\n");

  const projects = data.projects
    .map(
      (p) => `    <div class="project-entry">
      <div class="project-name"><a href="${p.url}">${p.name}</a></div>
      <div class="project-description">${p.description}</div>
    </div>`,
    )
    .join("\n");

  const education = data.education
    .map(
      (edu) => `    <div class="education-entry">
      <div class="education-institution">${edu.institution}</div>
      <div class="education-field">${edu.field} ∙ ${edu.dates}</div>
      <div class="education-details">${edu.details}</div>
    </div>`,
    )
    .join("\n");

  const patents = data.patents
    .map((p) => {
      return `    <div class="patent-entry">
      <div class="patent-title">${p.title}</div>
      <div class="patent-meta"><a href="${p.url}">${p.id}</a> ∙ ${p.grantedDate}</div>
      <div class="patent-description">${p.description}</div>
    </div>`;
    })
    .join("\n");

  const certifications = data.certifications
    .map((c) => {
      return `    <div class="certification-entry">
      <div><span class="certification-name">${c.name}</span> <span class="certification-issuer">∙ ${c.issuer}</span></div>
      <div class="certification-id"><a href="${c.url}">${c.id}</a> ∙ ${c.date}</div>
    </div>`;
    })
    .join("\n");

  const interests = data.interests
    .map((h) => {
      const bullets = h.bullets
        .map(
          (b) =>
            `      <li><span class="bullet">•</span><span>${bold(b)}</span></li>`,
        )
        .join("\n");
      return `    <div class="interest-entry">
      <div class="interest-name">${h.name}</div>
      <ul>
${bullets}
      </ul>
    </div>`;
    })
    .join("\n");

  const profiles = data.profiles
    .map((p) => `<a href="${p.url}">${p.name}</a>`)
    .join(" \u2219 ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.name} - CV</title>
  <style>
${css}
  </style>
</head>
<body>
  <h1>${data.name}</h1>
  <div class="tagline">${data.tagline}</div>
  <div class="profiles">${profiles}</div>

  <h2>Summary</h2>
  ${data.summary
    .split("\n\n")
    .map((p) => `<p class="summary">${p}</p>`)
    .join("\n  ")}

  <h2>Experience</h2>
${companies}

${data.projects.length > 0 ? `  <h2>Projects</h2>\n${projects}\n` : ""}
  <h2>Education</h2>
${education}

${data.patents.length > 0 ? `  <h2>Patents</h2>\n${patents}\n` : ""}
${data.certifications.length > 0 ? `  <h2>Certifications</h2>\n${certifications}\n` : ""}
${data.interests.length > 0 ? `  <h2>Interests</h2>\n${interests}\n` : ""}
</body>
</html>`;
}

function main() {
  const json = JSON.parse(fs.readFileSync(`${process.cwd()}/cv.json`, "utf-8"));
  const cv = parse(json);
  const html = render(cv);

  const outputDir = `${process.cwd()}/output`;
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outPath = `${outputDir}/CV.html`;
  fs.writeFileSync(outPath, html);
  console.log(outPath);
}

main();
