import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProjectChronicPrograms from "./pages/ProjectChronicPrograms";
import ProjectMedicalTime from "./pages/ProjectMedicalTime";
import ProjectMonetization from "./pages/ProjectMonetization";
import ProjectBrandedCall from "./pages/ProjectBrandedCall";

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
