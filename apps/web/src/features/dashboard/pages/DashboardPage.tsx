import { Badge } from "../../../components/ui/Badge";
import { Card } from "../../../components/ui/Card";
import { PageHeader } from "../../../components/ui/PageHeader";
import { EmptyState } from "../../../components/ui/EmptyState";
import { Button } from "../../../components/ui/Button";
import { mockCurrentUser } from "../data/mockCurrentUser";
import { mockAlerts } from "../data/mockAlerts";

export function DashboardPage() {
    const openAlertCount = mockAlerts.filter((alert) => alert.status === "open").length;
    const criticalAlertCount = mockAlerts.filter(
        (alert) => alert.severity === "critical",
    ).length;
    const investigatingAlertCount = mockAlerts.filter(
        (alert) => alert.status === "investigating",
    ).length;
  
  return (
    <main className="dashboard-page">
        <PageHeader
            title="Security Signal Desk"
            description="Security operations dashboard for monitoring alerts, signals, and analyst activity."
        >
            <Badge variant="success">Static Preview</Badge>
        </PageHeader>

        <section className="dashboard-hero">
            <div>
                <p className="eyebrow">Operations Overview</p>
                <h2>Monitor active security signals in one place.</h2>
                <p>
                    Review alert volume, current analyst context, and the latest security
                    events from connected systems.
                </p>
            </div>

            <Button variant="primary">Create alert</Button>
        </section>

        <section className="stats-grid">
            <Card title="Total Alerts">
                <p className="stat-value">{mockAlerts.length}</p>
                <p className="stat-label">Signals received today</p>
            </Card>

            <Card title="Open Alerts">
                <p className="stat-value">{openAlertCount}</p>
                <p className="stat-label">Waiting for triage</p>
            </Card>

            <Card title="Critical Alerts">
                <p className="stat-value">{criticalAlertCount}</p>
                <p className="stat-label">Require immediate attention</p>
            </Card>

            <Card title="Investigating">
                <p className="stat-value">{investigatingAlertCount}</p>
                <p className="stat-label">Currently being reviewed</p>
            </Card>
        </section>

        <section className="dashboard-content">
        <Card title="Current Analyst">
          <div className="user-card">
            <div className="avatar">{mockCurrentUser.name.charAt(0)}</div>

            <div>
              <p className="user-name">{mockCurrentUser.name}</p>
              <p className="user-role">{mockCurrentUser.role}</p>
            </div>
          </div>

          <div className="user-meta">
            <p>Session status</p>
            <Badge variant="success">Active</Badge>
          </div>
        </Card>

        <Card title="Security Alerts">
          {mockAlerts.length > 0 ? (
            <div className="alert-list">
              {mockAlerts.map((alert) => (
                <article className="alert-item" key={alert.id}>
                  <div className="alert-item-header">
                    <div>
                      <h3>{alert.title}</h3>
                      <p>{alert.description}</p>
                    </div>

                    <Badge
                      variant={
                        alert.severity === "critical" ? "danger" : "warning"
                      }
                    >
                      {alert.severity}
                    </Badge>
                  </div>

                  <div className="alert-item-footer">
                    <span>{alert.source}</span>

                    <Badge
                      variant={
                        alert.status === "resolved" ? "success" : "default"
                      }
                    >
                      {alert.status}
                    </Badge>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No alerts found"
              description="There are no security alerts to display."
            />
          )}
        </Card>
      </section>

   
    </main>
  );
}