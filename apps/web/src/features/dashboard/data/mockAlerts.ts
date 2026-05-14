import type { SecurityAlert } from "@security-signal-desk/shared";

export const mockAlerts: SecurityAlert[] = [
  {
    id: "alert-1",
    title: "Suspicious login attempt",
    description: "Multiple failed login attempts were detected from an unknown IP address.",
    severity: "high",
    status: "open",
    source: "Authentication Service",
    createdAt: "2026-05-14T10:30:00Z",
  },
  {
    id: "alert-2",
    title: "Malware signature detected",
    description: "Endpoint protection detected a known malware signature on a workstation.",
    severity: "critical",
    status: "investigating",
    source: "Endpoint Detection",
    createdAt: "2026-05-14T11:15:00Z",
  },
  {
    id: "alert-3",
    title: "Unusual data download volume",
    description: "A user account downloaded an unusually large number of files.",
    severity: "medium",
    status: "open",
    source: "Data Loss Prevention",
    createdAt: "2026-05-14T12:00:00Z",
  },
];