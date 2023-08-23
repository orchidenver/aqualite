import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { PathConstants } from "./PageRoutes";
import Layout from "../components/Layout/Layout";
import Preloader from "../components/Preloader";

const Cart = lazy(() => import("../pages/CartPage"));
const Order = lazy(() => import("../pages/FastOrder"));
const Feedback = lazy(() => import("../pages/FeedbackPage"));
const Form = lazy(() => import("../pages/FormPage"));
const Main = lazy(() => import("../pages/MainPage"));
const Error = lazy(() => import("../pages/Page404"));

const routes = [
  { path: PathConstants.CART, element: <Cart /> },
  { path: PathConstants.FAST_ORDER, element: <Order /> },
  { path: PathConstants.FEEDBACK, element: <Feedback /> },
  { path: PathConstants.FORM, element: <Form /> },
  { path: PathConstants.MAIN_PAGE, element: <Main /> },
];

export const router = createBrowserRouter([
  { element: <Layout />, children: routes },
  {
    path: PathConstants.PAGE404,
    element: (
      <Suspense fallback={<Preloader />}>
        <Error />
      </Suspense>
    ),
  },
]);
