import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingScreen = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="50vh">
      <CircularProgress />
      <Typography variant="h6" marginTop={2}>
        Cargando... Por favor espera.
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
