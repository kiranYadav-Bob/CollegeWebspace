import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import AcademicsPage from "@/pages/AcademicsPage";
import FacultyPage from "@/pages/FacultyPage";
import AdmissionsPage from "@/pages/AdmissionsPage";
import GalleryPage from "@/pages/GalleryPage";
import ContactPage from "@/pages/ContactPage";
import NewsPage from "@/pages/NewsPage";
import PlacementsPage from "@/pages/PlacementsPage";
import StudentLifeClubsPage from "@/pages/StudentLifeClubsPage";
import StudentLifeEventsPage from "@/pages/StudentLifeEventsPage";
import StudentLifeHostelPage from "@/pages/StudentLifeHostelPage";
import StudentLifeSportsPage from "@/pages/StudentLifeSportsPage";
import AdmissionsFeesPage from "@/pages/AdmissionsFeesPage";
import AcademicsCoursesPage from "@/pages/AcademicsCoursesPage";
import ResearchPage from "@/pages/ResearchPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={HomePage} />
      <Route path="/academics" component={AcademicsPage} />
      <Route path="/academics/departments" component={AcademicsPage} />
      <Route path="/academics/faculty" component={FacultyPage} />
      <Route path="/academics/courses" component={AcademicsCoursesPage} />
      <Route path="/admissions" component={AdmissionsPage} />
      <Route path="/admissions/undergraduate" component={AdmissionsPage} />
      <Route path="/admissions/postgraduate" component={AdmissionsPage} />
      <Route path="/admissions/fees" component={AdmissionsFeesPage} />
      <Route path="/student-life/clubs" component={StudentLifeClubsPage} />
      <Route path="/student-life/events" component={StudentLifeEventsPage} />
      <Route path="/student-life/hostel" component={StudentLifeHostelPage} />
      <Route path="/student-life/sports" component={StudentLifeSportsPage} />
      <Route path="/research" component={ResearchPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/placements" component={PlacementsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;