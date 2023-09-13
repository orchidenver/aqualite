import { useState, useEffect } from "react";
import { router } from "./router/PageMapping";
import Preloader from "./components/Preloader";
import { CartProvider } from "./context";
import { RouterProvider } from "react-router-dom";

function App() {
  const [load, setLoad] = useState<boolean>(false);

  function authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 0));
  }

  useEffect(() => {
    setLoad(true);
    authenticate().then(() => {
      setLoad(false);
    });
  }, []);

  return (
    <CartProvider>
      {load ? <Preloader /> : <RouterProvider router={router} />}
    </CartProvider>
  );
}
export default App;
