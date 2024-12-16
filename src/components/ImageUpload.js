import {Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {useState} from "react";

const ImageUpload = ({ setLoading, setResult, setOriginalImage }) => {
  const [image, setImage] = useState(null);
  const [method, setMethod] = useState("raw");

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

      if (data.error) {
        throw new Error(data.error);
      }

      setResult({
        prediction: data.prediction,
        processedImage: data.processed_image,
      });
    } catch (error) {
      console.error("Error al obtener la predicción:", error.message);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Clasificación de Imágenes
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="method-label">Selecciona el método</InputLabel>
            <Select labelId="method-label" value={method} onChange={handleMethodChange}>
              <MenuItem value="raw">Raw</MenuItem>
              <MenuItem value="bilateral">Bilateral</MenuItem>
              <MenuItem value="canny">Canny</MenuItem>
            </Select>
          </FormControl>
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Procesar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ImageUpload;
