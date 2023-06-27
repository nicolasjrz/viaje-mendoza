import { Stack } from "@mui/material";
import { CardReloj } from "./CardReloj";

// eslint-disable-next-line react/prop-types
export const Reloj = ({ days, hours, minutes, seconds }) => {
  return (
    <Stack
      mt={1}
      spacing={3}
      direction={{ lg: "row", xs: "column" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CardReloj value={days} type={"dias"} />
      <CardReloj value={hours} type={"horas"} />
      <CardReloj value={minutes} type={"minutos"} />
      <CardReloj value={seconds} type={"segundos"} />
    </Stack>
  );
};
