import Home from "./Home";
import { HomeVariantProvider } from "../components/HomeVariant";

/** "/MG" — same homepage, framed for a Design Manager audience. */
export default function HomeManager() {
  return (
    <HomeVariantProvider variant="mg">
      <Home />
    </HomeVariantProvider>
  );
}
