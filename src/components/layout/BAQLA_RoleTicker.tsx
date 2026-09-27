import { experienceData } from '@/data/experience';

export function BAQLA_RoleTicker() {
  const current = experienceData.find((e) => e.type === 'work');
  if (!current) return null;
  return (
    <p className="text-sm desktop:text-base font-medium tracking-wide">
      {current.title} <span aria-hidden="true">●</span> {current.company}{' '}
      <span aria-hidden="true">●</span> {current.location}
    </p>
  );
}
