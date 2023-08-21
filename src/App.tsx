import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/PageMapping";

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

  return <>{load ? "LOADING" : <RouterProvider router={router} />}</>;
}

export default App;
