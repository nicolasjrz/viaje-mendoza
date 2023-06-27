import { Stack, Typography } from "@mui/material";
import { useFechas } from "../hooks/useFechas";
import { Reloj } from "../components/Reloj";
import { Particulas } from "../components/Particulas";
import GifPlayer from "../components/GifPlayer";

// eslint-disable-next-line react/prop-types
export const HomePage = ({ isLoading }) => {
  const { days, hours, minutes, seconds } = useFechas();

  return (
    <Stack p={3} sx={{ visibility: isLoading ? "visible" : "hidden" }}>
      <Typography
        className="title"
        variant="h2"
        sx={{ fontFamily: "Bebas", color: "#101010" }}
      >
        Viaje a Mendoza con cami
      </Typography>

      <Stack mt={1}>
        {days === "00" &&
        hours === "00" &&
        minutes === "00" &&
        seconds === "00" ? (
          <>
            <Particulas />
            <GifPlayer />
          </>
        ) : (
          <Reloj
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        )}
      </Stack>
    </Stack>
  );
};
