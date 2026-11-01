import { useEffect, useState } from "react";
import { estimateCycles, estimateFleetCycles } from "./cycle-estimate";

// Add confirmed ISO installation timestamps here; never infer dates from a visit.
const installations: { name: string; installedAt: string | null; planned?: boolean }[] = [
  { name: "Line 4", installedAt: "2026-10-04T00:00:00-05:00" },
  { name: "Second gripper", installedAt: "2026-10-11T00:00:00-05:00" },
  { name: "Texas", installedAt: null, planned: true },
];
const flangesPerShift = 300;
const shiftsPerWeek = 15;
const cyclesPerWeek = flangesPerShift * shiftsPerWeek;
const number = new Intl.NumberFormat("en-US");
const date = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "America/Chicago" });

export default function GripperProduction() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const counts = installations.filter(item => !item.planned).map(item => estimateCycles(item.installedAt, now, cyclesPerWeek));
  const total = estimateFleetCycles(installations.filter(item => !item.planned).map(item => item.installedAt), now, cyclesPerWeek);
  return <div className="production-estimate">
    <div className="production-counter"><span>Estimated cycles since installation</span><strong>{total === null ? "—" : number.format(total)}</strong><p>{total === null ? "Installation dates pending." : counts.some(value => value === null) ? "Includes installations with confirmed dates." : "Across the two installed grippers."}</p></div>
    <p className="production-assumption">300 flanges per shift × 15 shifts = 4,500 estimated cycles per week per gripper, averaged across seven days from each installation date. Not a live machine count.</p>
    <dl className="installation-list">{installations.map(item => <div key={item.name}><dt>{item.name}</dt><dd>{item.installedAt ? <time dateTime={item.installedAt}>{date.format(new Date(item.installedAt))}</time> : item.planned ? "Installation TBD" : "Installed · date pending"}</dd></div>)}</dl>
  </div>;
}
