import { useEffect, Suspense } from "react";
import Navbar from "../Navbar/Navbar";
import Preloader from "../Preloader";
import Footer from "../Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<Preloader />}>
      <Navbar />
      <main>
        <Outlet />
        <Footer />
      </main>
    </Suspense>
  );
}
