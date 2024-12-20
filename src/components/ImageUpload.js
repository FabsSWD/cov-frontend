import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Typography, Grid, Box } from "@mui/material";
import { useState, useEffect } from "react";

const ImageUpload = ({ setLoading, setResult, setOriginalImage }) => {
  const [image, setImage] = useState(null);
  const [method, setMethod] = useState("raw");
  const [metrics, setMetrics] = useState({ normal: null, covid: null, pneumonia: null });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch("http://localhost:5000/metrics");
        const data = await response.json();
        setMetrics(data.models[method]);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchMetrics();
  }, [method]);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    setOriginalImage(URL.createObjectURL(selectedImage));
  };

  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!image) {
      alert("Por favor, sube una imagen.");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("method", method);
    formData.append("model", method);
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setResult({
        prediction: data.prediction,
        processedImage: data.processed_image,
      });
    } catch (error) {
      console.error(error.message);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 5, boxShadow: 3, padding: 3 }}>
      <CardContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="method-label">Selecciona el método</InputLabel>
              <Select labelId="method-label" value={method} onChange={handleMethodChange}>
                <MenuItem value="raw">Raw</MenuItem>
                <MenuItem value="bilateral">Bilateral</MenuItem>
                <MenuItem value="canny">Canny</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <input
                accept="image/*"
                type="file"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="upload-button"
              />
              <label htmlFor="upload-button">
                <Button variant="contained" component="span" fullWidth>
                  {image ? image.name : "Sube una imagen"}
                </Button>
              </label>
            </FormControl>
          </Grid>
        </Grid>
        <Typography variant="h6" mt={2} textAlign="center">
          Métricas del Modelo
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
            boxShadow: 2,
            padding: 2,
            borderRadius: 1,
            border: "1px solid #ddd",
          }}
        >
          <Typography variant="body1">
            <strong>Normal:</strong> {metrics.normal !== null ? `${metrics.normal * 100}%` : "Cargando..."}
          </Typography>
          <Typography variant="body1">
            <strong>COVID-19:</strong> {metrics.covid !== null ? `${metrics.covid * 100}%` : "Cargando..."}
          </Typography>
          <Typography variant="body1">
            <strong>Neumonía:</strong> {metrics.pneumonia !== null ? `${metrics.pneumonia * 100}%` : "Cargando..."}
          </Typography>
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSubmit} sx={{ mt: 3 }}>
          Procesar
        </Button>
      </CardContent>
    </Card>
  );
};

export default ImageUpload;
