import React from "react";
import { Card, CardContent, Typography, Box, Button, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const ResultDisplay = ({ result, originalImage, onReset }) => {
const getResultMessage = (prediction) => {
  const predictionValue = String(prediction); // Convertir predicción a cadena para asegurar compatibilidad
  switch (predictionValue) {
    case "0":
      return { text: "COVID-19", color: "error", icon: <ErrorIcon color="error" /> };
    case "1":
      return { text: "NORMAL", color: "success", icon: <CheckCircleIcon color="success" /> };
    case "2":
      return { text: "PNEUMONÍA VIRAL", color: "warning", icon: <WarningAmberIcon color="warning" /> };
    default:
      return { text: "Resultado Desconocido", color: "secondary", icon: null };
  }
};


  const resultMessage = getResultMessage(result.prediction);

  return (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 5, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom textAlign="center">
          Resultado de la Predicción
        </Typography>

        <Box display="flex" justifyContent="center" alignItems="center" gap={1} mb={3}>
          {resultMessage.icon}
          <Typography variant="h6" color={resultMessage.color}>
            {resultMessage.text}
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6} textAlign="center">
            <Typography variant="subtitle1">Imagen Original:</Typography>
            <img
              src={originalImage}
              alt="Imagen Original"
              style={{ maxWidth: "100%", height: "auto", border: "1px solid #ccc" }}
            />
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <Typography variant="subtitle1">Imagen Procesada:</Typography>
            <img
              src={result.processedImage}
              alt="Imagen Procesada"
              style={{ maxWidth: "100%", height: "auto", border: "1px solid #ccc" }}
            />
          </Grid>
        </Grid>

        <Box mt={3} textAlign="center">
          <Button variant="contained" color="primary" onClick={onReset}>
            Volver a Subir una Imagen
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResultDisplay;
