import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-[400px] flex-col items-center justify-center text-center",
        className
      )}
    >
      <div className="mb-4 text-muted-foreground">{icon}</div>
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
      <p className="mb-6 mt-2 text-sm text-muted-foreground">{description}</p>
      {action}
    </div>
  );
}
