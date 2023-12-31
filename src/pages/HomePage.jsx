import { Box, Stack, Typography } from "@mui/material";
import { useFechas } from "../hooks/useFechas";
import { Reloj } from "../components/Reloj";
import { Particulas } from "../components/Particulas";
import GifPlayer from "../components/GifPlayer";
import { Emojis } from "../components/Emojis";

// eslint-disable-next-line react/prop-types
export const HomePage = ({ isLoading }) => {
  const { days, hours, minutes, seconds } = useFechas();

  return (
    <Stack
      p={3}
      sx={{ visibility: isLoading ? "visible" : "hidden" }}
      className="animate__animated  animate__bounceInDown"
    >
      <Stack
        sx={{
          flexDirection: { lg: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          className="title"
          variant="h2"
          sx={{ fontFamily: "Bebas", color: "#464545" }}
        >
          Viaje a Mendoza con cami
        </Typography>
        <Typography>
          <Emojis />
        </Typography>
      </Stack>

      <Stack mt={1}>
        {days === "00" &&
        hours === "00" &&
        minutes === "00" &&
        seconds === "00" ? (
          <Box>
            <Particulas />
            <GifPlayer />
          </Box>
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
