import Link from "next/link";

const NAME = "Sanda Hajaina RANAIVOARISOA";
const ROLE = "Software engineer";
const LOCATION = "42 Antananarivo";

export function Header() {
    return (
        <header className="flex justify-between items-center border-b border-border px-6 py-2">
            <Link href="/" className="text-heading">{NAME}</Link>
            <span className="text-label font-mono uppercase">{ROLE}</span>
            <span className="text-label font-mono">{LOCATION}</span>
        </header>
    )
}
