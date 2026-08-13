interface PillProps {
    label: string;
    variant: "neutral" | "black" | "accent";
}

const variantClasses = {
        neutral: "border border-border text-foreground",
        black: "bg-foreground text-white",
        accent: "border border-accent text-accent",
    }


export function Pill({label, variant}: PillProps) {
    return (
        <span className={`inline-flex px-4 py-2 text-sm font-medium ${variantClasses[variant]}`}>
            {label}
        </span>
    )
}