import { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { LoadingPage } from "./pages/LoadingPage";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      setIsLoading(true);
    }, 1700); // Aquí puedes ajustar el tiempo de carga simulada según tus necesidades
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <LoadingPage />
          <HomePage />
        </>
      )} */}

      <LoadingPage />
      <HomePage isLoading={isLoading} />
    </>
  );
}

export default App;
