import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const LoadingScreen = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          padding: 3,
        }}
      >
        <CircularProgress size={80} thickness={4}/>
      </Box>
      <Typography variant="h5" marginTop={3} fontWeight="bold" color="textPrimary">
        Procesando tu imagen...
      </Typography>
      <Typography variant="body1" marginTop={1} color="textSecondary">
        Esto no debería tomar mucho tiempo.
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
