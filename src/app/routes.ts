import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import RouteError from "./pages/RouteError";

const Home = lazy(() => import("./pages/Home"));
const ProjectChronicPrograms = lazy(() => import("./pages/ProjectChronicPrograms"));
const ProjectMedicalTime = lazy(() => import("./pages/ProjectMedicalTime"));
const ProjectMonetization = lazy(() => import("./pages/ProjectMonetization"));
const ProjectBrandedCall = lazy(() => import("./pages/ProjectBrandedCall"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    // Last-resort net: an unhandled render crash anywhere below, or a
    // failure in Layout itself. Genuine 404s (unmatched paths) are instead
    // handled by the "*" child route below, which keeps the Header mounted.
    ErrorBoundary: RouteError,
    children: [
      { index: true, Component: Home },
      { path: "project/chronic-programs", Component: ProjectChronicPrograms },
      { path: "project/medical-time", Component: ProjectMedicalTime },
      { path: "project/health-monetization", Component: ProjectMonetization },
      { path: "project/branded-call", Component: ProjectBrandedCall },
      { path: "*", Component: NotFound },
    ],
  },
]);
