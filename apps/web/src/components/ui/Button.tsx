
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = {
    children: ReactNode;
    variant?: ButtonVariant;
};

export function Button({ children, variant = "primary" }: ButtonProps) {
    return <button className={`button button-${variant}`}>{children}</button>;
}

