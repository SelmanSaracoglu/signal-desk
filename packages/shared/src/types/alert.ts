export type AlertSeverity = "low" | "medium" | "high" | "critical";

export type AlertStatus = "open" | "investigating" | "resolved" | "false_positive";

export type SecurityAlert = {
    id: string;
    title: string;
    description: string;
    severity: AlertSeverity;
    status: AlertStatus;
    source: string;
    createdAt: string;
};

