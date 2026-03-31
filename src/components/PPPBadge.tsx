interface PPPBadgeProps {
  level: "Mandatory" | "Recommended" | "Absent";
}

export default function PPPBadge({ level }: PPPBadgeProps) {
  const styles = {
    Mandatory: "bg-emerald-100 text-emerald-800 border-emerald-200",
    Recommended: "bg-amber-50 text-amber-800 border-amber-200",
    Absent: "bg-neutral-100 text-neutral-500 border-neutral-200",
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-medium rounded border ${styles[level]}`}
    >
      {level}
    </span>
  );
}
