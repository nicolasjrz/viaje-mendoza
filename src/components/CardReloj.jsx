import { Paper, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const CardReloj = ({ value, type }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 120,
        height: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column", // Agregamos esta línea para mostrar los elementos en columna
      }}
    >
      <Typography sx={{ fontSize: 55, fontWeight: 300 }}>{value}</Typography>
      <Typography>{type}</Typography>
    </Paper>
  );
};
