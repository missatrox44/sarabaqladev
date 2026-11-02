import { projects } from '@/data/projects';
import { experienceData } from '@/data/experience';

// Skills not recorded in any project techStack or experience skills.
const extras = ['GraphQL', 'Python'];

const seen = new Map<string, string>();
for (const s of [...projects.flatMap((p) => p.techStack), ...experienceData.flatMap((e) => e.skills ?? []), ...extras]) {
  const key = s.trim().toLowerCase();
  if (!seen.has(key)) seen.set(key, s.trim());
}

export const allSkills = [...seen.values()].sort((a, b) => a.localeCompare(b));
