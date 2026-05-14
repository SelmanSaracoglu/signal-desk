import type { Permission } from "./permission";

export type Role = "admin" | "security_analyst" | "viewer";

export type User = {
    id: string;
    name: string;
    role: Role;
};

export type RolePermissions = Record<Role, Permission[]>;