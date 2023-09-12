import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Preloader from "../Preloader";
import Footer from "../Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Preloader />}>
          <Outlet />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
