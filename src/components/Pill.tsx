interface PillProps {
    label: string;
    variant: "neutral" | "black" | "accent";
}

const variantClasses = {
        neutral: "border border-black text-foreground",
        black: "bg-foreground text-white",
        accent: "border border-accent text-accent",
    }


export function Pill({label, variant}: PillProps) {
    return (
        <span className={`inline-flex bg-background font-mono px-1 py-1 text-sm font-medium ${variantClasses[variant]}`}>
            {label}
        </span>
    )
}