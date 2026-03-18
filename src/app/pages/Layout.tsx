import { Outlet, useLocation } from "react-router";
import { Header } from "../components/Header";
import { useEffect } from "react";

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}