import type { ReactNode } from "react";

// Set to false to remove the maintenance overlay and restore normal access.
const MAINTENANCE_MODE = true;
const MESSAGE = "Site en maintenance";

interface MaintenanceModeProps {
    children: ReactNode;
}

export function MaintenanceMode({ children }: MaintenanceModeProps) {
    if (!MAINTENANCE_MODE) return children;

    return (
        <>
            {/* `inert` removes the site from focus, keyboard, pointer and assistive tech. */}
            <div inert className="contents">
                {children}
            </div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/20 p-4 backdrop-blur-[1.5px]">
                <div
                    role="status"
                    className="flex items-center gap-3 bg-foreground px-6 py-3 text-surface"
                >
                    <span aria-hidden="true" className="size-2 bg-accent" />
                    <p className="font-mono text-label uppercase">{MESSAGE}</p>
                </div>
            </div>
        </>
    );
}
