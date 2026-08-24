const NAME = "Sanda Hajaina RANAIVOARISOA";
const ROLE = "Software engineer";
const LOCATION = "42 Antananarivo";

export function Header() {
    return (
        <header className="flex justify-between items-center border-b border-secondary/20 px-6 py-2">
            <h1 className="text-heading">{NAME}</h1>
            <span className="text-label font-mono uppercase">{ROLE}</span>
            <span className="text-label font-mono">{LOCATION}</span>
        </header>
    )
}