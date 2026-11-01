export const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

// Calendar-week average, including weekends. This is an estimate, not telemetry.
export function estimateCycles(installedAt: string | null, now: number, cyclesPerWeek: number): number | null {
  if (!installedAt) return null;
  const start = Date.parse(installedAt);
  if (!Number.isFinite(start) || start > now || cyclesPerWeek < 0) return null;
  return Math.floor((now - start) / WEEK_MS * cyclesPerWeek);
}

export function estimateFleetCycles(installationDates: (string | null)[], now: number, cyclesPerWeek: number): number | null {
  const starts = installationDates.filter((value): value is string => value !== null)
    .map(value => Date.parse(value)).filter(value => Number.isFinite(value) && value <= now);
  if (!starts.length || !Number.isFinite(now) || !Number.isFinite(cyclesPerWeek) || cyclesPerWeek < 0) return null;
  // Round after combining estimates so two lines advance the total one cycle at a time.
  return Math.floor(starts.reduce((sum, start) => sum + (now - start) / WEEK_MS * cyclesPerWeek, 0));
}
