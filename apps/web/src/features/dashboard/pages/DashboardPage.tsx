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
        (alert) => alert.severity === "critical"
    ).length;
  
  return (
    <main>
        <PageHeader
            title="Security Signal Desk"
            description="Monitor security alerts and operational signals."
        >
            <Badge variant="success">Static Preview</Badge>
        </PageHeader>

        <div className="dashboard-grid">
            <Card title="Current User">
                <p>Name: {mockCurrentUser.name}</p>
                <p>Role: {mockCurrentUser.role}</p>
            </Card>

            <Card title="Alert Summary">
                <p>Total alerts: {mockAlerts.length}</p>
                <p>Open alerts: {openAlertCount}</p>
                <p>Critical alerts: {criticalAlertCount}</p>
                <Button variant="secondary">View all alerts</Button>
            </Card>
        </div>

        <Card title="Security Alerts">
        {mockAlerts.length > 0 ? (
          mockAlerts.map((alert) => (
            <article key={alert.id}>
              <h3>{alert.title}</h3>
              <p>{alert.description}</p>

              <div className="alert-meta">
                <Badge
                  variant={alert.severity === "critical" ? "danger" : "warning"}
                >
                  {alert.severity}
                </Badge>

                <Badge
                  variant={alert.status === "resolved" ? "success" : "default"}
                >
                  {alert.status}
                </Badge>
              </div>

              <p>Source: {alert.source}</p>
            </article>
          ))
        ) : (
          <EmptyState
            title="No alerts found"
            description="There are no security alerts to display."
          />
        )}
      </Card>        
    </main>
  );
}