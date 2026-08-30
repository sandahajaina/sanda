interface TechTagProps {
    label: string;
}

export function TechTag ({label} : TechTagProps) {
    return (
        <span className={`inline-flex bg-background border border-border font-mono px-3 py-1 text-metadata`}>
            {label}
        </span>
    )
}