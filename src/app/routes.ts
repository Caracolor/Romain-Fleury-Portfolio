import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";

const Home = lazy(() => import("./pages/Home"));
const ProjectChronicPrograms = lazy(() => import("./pages/ProjectChronicPrograms"));
const ProjectMedicalTime = lazy(() => import("./pages/ProjectMedicalTime"));
const ProjectMonetization = lazy(() => import("./pages/ProjectMonetization"));
const ProjectBrandedCall = lazy(() => import("./pages/ProjectBrandedCall"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "project/qare", Component: ProjectChronicPrograms },
      { path: "project/temps-medical", Component: ProjectMedicalTime },
      { path: "project/monetisation", Component: ProjectMonetization },
      { path: "project/branded-call", Component: ProjectBrandedCall },
    ],
  },
]);
