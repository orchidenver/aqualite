import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Spinner from "../Spinner";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
