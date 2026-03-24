const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatMonth(date: Date): string {
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

function formatDuration(start: Date, end: Date): string {
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  if (months < 1) {
    months = 1;
  }

  const yrs = Math.floor(months / 12);
  const mos = months % 12;
  const parts: string[] = [];

  if (yrs > 0) {
    parts.push(`${yrs} yr${yrs > 1 ? "s" : ""}`);
  }

  if (mos > 0) {
    parts.push(`${mos} mo${mos > 1 ? "s" : ""}`);
  }

  return parts.join(" ") || "< 1 mo";
}

export function formatDates(start: Date, end?: Date): string {
  if (!end) {
    return `${formatMonth(start)} - Present`;
  }

  return `${formatMonth(start)} - ${formatMonth(end)} ∙ ${formatDuration(start, end)}`;
}
