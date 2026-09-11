import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import RouteError from "./pages/RouteError";

const Home = lazy(() => import("./pages/Home"));
const HomeManager = lazy(() => import("./pages/HomeManager"));
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
      // "/" and "/IC" render the exact same default (Senior/Staff IC)
      // homepage — "/IC" exists only as a discreet, shareable alias for
      // that framing. "/MG" wraps Home in the Design Manager variant. See
      // components/HomeVariant.tsx for what actually differs (hero title,
      // stats order, intro paragraph) — path matching is case-insensitive
      // by default, so "/mg"/"/ic" work too.
      { index: true, Component: Home },
      { path: "IC", Component: Home },
      { path: "MG", Component: HomeManager },
      { path: "project/chronic-programs", Component: ProjectChronicPrograms },
      { path: "project/medical-time", Component: ProjectMedicalTime },
      { path: "project/health-monetization", Component: ProjectMonetization },
      { path: "project/branded-call", Component: ProjectBrandedCall },
      { path: "*", Component: NotFound },
    ],
  },
]);
