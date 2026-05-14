import type { ReactNode } from "react";

type PageHeaderProps = {
    title: string;
    description?: string;
    children?: ReactNode;
};

export function PageHeader({ title, description, children }: PageHeaderProps) {
    return (
        <header className="page-header">
            <div>
                <h1>{title}</h1>
                {description ? <p>{description}</p> : null}
            </div>

            {children ? <div className="page-header-children">{children}</div> : null}
        </header>
    );
}
