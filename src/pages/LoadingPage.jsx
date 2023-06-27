import { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Aquí puedes ajustar el tiempo de carga simulada según tus necesidades
  }, []);

  return (
    <Backdrop
      open={isLoading}
      sx={{
        background: "white",
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
