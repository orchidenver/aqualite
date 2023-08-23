import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Preloader from "../Preloader";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Preloader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
