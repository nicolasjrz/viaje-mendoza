import { Paper, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const CardReloj = ({ value, type }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 130,
        height: 120,
        display: "flex",

        alignItems: "center",
        flexDirection: "column", // Agregamos esta línea para mostrar los elementos en columna
      }}
    >
      <Typography
        mt={1}
        sx={{
          fontSize: 50,
          color: "#101010",
          fontFamily: "Bebas",
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          fontSize: 18,

          color: "#101010",
          fontFamily: "Bebas",
        }}
      >
        {type}
      </Typography>
    </Paper>
  );
};
