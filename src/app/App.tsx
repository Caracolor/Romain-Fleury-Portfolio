import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "./components/LanguageContext";

// App entry point — v2
export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}