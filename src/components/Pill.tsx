interface PillProps {
    label: string;
    variant: "neutral" | "black" | "accent";
}

const variantClasses = {
        neutral: "border border-foreground text-foreground",
        black: "bg-foreground text-surface",
        accent: "border border-accent text-accent",
    }


export function Pill({label, variant}: PillProps) {
    return (
        <span className={`inline-flex bg-background font-mono px-1 py-1 text-label ${variantClasses[variant]}`}>
            {label}
        </span>
    )
}