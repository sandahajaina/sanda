const NAME = "Sanda Hajaina RANAIVOARISOA";
const ROLE = "Software engineer";
const LOCATION = "42 Antananarivo";

export function Header() {
    return (
        <header className="flex justify-between items-center border-b border-secondary/20 px-6 py-4">
            <h1>{NAME}</h1>
            <span>{ROLE}</span>
            <span>{LOCATION}</span>
        </header>
    )
}