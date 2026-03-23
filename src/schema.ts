import { z } from "zod";

const dateField = z
  .string()
  .regex(/^\d{4}-\d{2}$/)
  .transform((s) => {
    const [year, month] = s.split("-").map(Number);
    return new Date(year, month - 1);
  });

const ProfileSchema = z.object({
  name: z.string(),
  url: z.string(),
});

const RoleSchema = z.object({
  title: z.string(),
  start: dateField,
  end: dateField.optional(),
  bullets: z.array(z.string()),
  techStack: z.array(z.string()),
});

const CompanySchema = z.object({
  name: z.string(),
  start: dateField,
  end: dateField.optional(),
  roles: z.array(RoleSchema),
});

const EducationSchema = z.object({
  institution: z.string(),
  field: z.string(),
  dates: z.string(),
  details: z.string(),
});

const PatentSchema = z.object({
  title: z.string(),
  id: z.string(),
  grantedDate: z.string(),
  description: z.string(),
  url: z.url(),
});

const CertificationSchema = z.object({
  name: z.string(),
  id: z.string(),
  issuer: z.string(),
  date: z.string(),
  url: z.url(),
});

const InterestSchema = z.object({
  name: z.string(),
  bullets: z.array(z.string()),
});

const CVSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  profiles: z.array(ProfileSchema),
  summary: z.string(),
  experience: z.array(CompanySchema),
  education: z.array(EducationSchema),
  patents: z.array(PatentSchema),
  certifications: z.array(CertificationSchema),
  interests: z.array(InterestSchema),
});

export type Role = z.infer<typeof RoleSchema>;
export type Company = z.infer<typeof CompanySchema>;
export type CV = z.infer<typeof CVSchema>;

export function parse(json: unknown): CV {
  return CVSchema.parse(json);
}
