
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, XCircle, Clock, Eye } from "lucide-react";
import type { ApplicationSubmission } from "@shared/schema";

export default function AdminPage() {
  const [applications, setApplications] = useState<ApplicationSubmission[]>([]);
  const [selectedApp, setSelectedApp] = useState<ApplicationSubmission | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/applications');
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error('Failed to fetch applications:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/applications/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      fetchApplications();
      setSelectedApp(null);
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500"><CheckCircle2 className="h-3 w-3 mr-1" /> Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" /> Rejected</Badge>;
      default:
        return <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" /> Pending</Badge>;
    }
  };

  const filterByStatus = (status: string) => {
    return applications.filter(app => app.status === status);
  };

  const ApplicationsTable = ({ apps }: { apps: ApplicationSubmission[] }) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Program</TableHead>
          <TableHead>Applied On</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {apps.length === 0 ? (
          <TableRow>
            <TableCell colSpan={6} className="text-center text-muted-foreground">
              No applications found
            </TableCell>
          </TableRow>
        ) : (
          apps.map((app) => (
            <TableRow key={app.id}>
              <TableCell className="font-medium">
                {app.firstName} {app.lastName}
              </TableCell>
              <TableCell>{app.email}</TableCell>
              <TableCell>
                <div className="text-sm">
                  <div className="font-medium">{app.programName}</div>
                  <div className="text-muted-foreground capitalize">{app.programType}</div>
                </div>
              </TableCell>
              <TableCell>{new Date(app.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>{getStatusBadge(app.status)}</TableCell>
              <TableCell>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedApp(app)}
                >
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Admin Dashboard
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Manage student applications and admissions
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{applications.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Pending Review
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {filterByStatus("pending").length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Approved
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">
                    {filterByStatus("approved").length}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All ({applications.length})</TabsTrigger>
                    <TabsTrigger value="pending">Pending ({filterByStatus("pending").length})</TabsTrigger>
                    <TabsTrigger value="approved">Approved ({filterByStatus("approved").length})</TabsTrigger>
                    <TabsTrigger value="rejected">Rejected ({filterByStatus("rejected").length})</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="mt-6">
                    <ApplicationsTable apps={applications} />
                  </TabsContent>
                  
                  <TabsContent value="pending" className="mt-6">
                    <ApplicationsTable apps={filterByStatus("pending")} />
                  </TabsContent>
                  
                  <TabsContent value="approved" className="mt-6">
                    <ApplicationsTable apps={filterByStatus("approved")} />
                  </TabsContent>
                  
                  <TabsContent value="rejected" className="mt-6">
                    <ApplicationsTable apps={filterByStatus("rejected")} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Application Details Dialog */}
      <Dialog open={!!selectedApp} onOpenChange={() => setSelectedApp(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
            <DialogDescription>
              Review and manage this application
            </DialogDescription>
          </DialogHeader>
          
          {selectedApp && (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Personal Information</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-muted-foreground">Name:</div>
                  <div>{selectedApp.firstName} {selectedApp.lastName}</div>
                  <div className="text-muted-foreground">Email:</div>
                  <div>{selectedApp.email}</div>
                  <div className="text-muted-foreground">Phone:</div>
                  <div>{selectedApp.phone}</div>
                  <div className="text-muted-foreground">Date of Birth:</div>
                  <div>{selectedApp.dateOfBirth}</div>
                  <div className="text-muted-foreground">Gender:</div>
                  <div className="capitalize">{selectedApp.gender}</div>
                  <div className="text-muted-foreground">Nationality:</div>
                  <div>{selectedApp.nationality}</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Program Selection</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-muted-foreground">Program Type:</div>
                  <div className="capitalize">{selectedApp.programType}</div>
                  <div className="text-muted-foreground">Program:</div>
                  <div>{selectedApp.programName}</div>
                  <div className="text-muted-foreground">Start Term:</div>
                  <div>{selectedApp.startTerm}</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Educational Background</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-muted-foreground">High School:</div>
                  <div>{selectedApp.highSchool}</div>
                  <div className="text-muted-foreground">Graduation Year:</div>
                  <div>{selectedApp.graduationYear}</div>
                  <div className="text-muted-foreground">GPA:</div>
                  <div>{selectedApp.gpa}</div>
                </div>
                {selectedApp.hasUndergrad === "yes" && (
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm border-l-2 pl-4">
                    <div className="text-muted-foreground">Institution:</div>
                    <div>{selectedApp.undergradInstitution}</div>
                    <div className="text-muted-foreground">Degree:</div>
                    <div>{selectedApp.undergradDegree}</div>
                    <div className="text-muted-foreground">GPA:</div>
                    <div>{selectedApp.undergradGPA}</div>
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-semibold mb-2">Statement of Purpose</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {selectedApp.statementOfPurpose}
                </p>
              </div>

              {selectedApp.achievements && (
                <div>
                  <h3 className="font-semibold mb-2">Achievements</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {selectedApp.achievements}
                  </p>
                </div>
              )}

              <div className="flex gap-4 pt-4 border-t">
                <Button
                  onClick={() => updateStatus(selectedApp.id, "approved")}
                  className="bg-green-600 hover:bg-green-700"
                  disabled={selectedApp.status === "approved"}
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Approve
                </Button>
                <Button
                  onClick={() => updateStatus(selectedApp.id, "rejected")}
                  variant="destructive"
                  disabled={selectedApp.status === "rejected"}
                >
                  <XCircle className="mr-2 h-4 w-4" />
                  Reject
                </Button>
                <Button
                  onClick={() => updateStatus(selectedApp.id, "pending")}
                  variant="outline"
                  disabled={selectedApp.status === "pending"}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Mark as Pending
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
