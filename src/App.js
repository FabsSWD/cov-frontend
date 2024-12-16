import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import LoadingScreen from "./components/LoadingScreen";
import ResultDisplay from "./components/ResultDisplay";
import { Container, Typography } from "@mui/material";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [originalImage, setOriginalImage] = useState(null); // Guardar imagen original

  const handleReset = () => {
    setResult(null);
    setOriginalImage(null);
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom marginTop={4}>
        Clasificación de Imágenes
      </Typography>
      {loading && <LoadingScreen />}
      {!loading && !result && (
        <ImageUpload
          setLoading={setLoading}
          setResult={setResult}
          setOriginalImage={setOriginalImage}
        />
      )}
      {!loading && result && (
        <ResultDisplay result={result} originalImage={originalImage} onReset={handleReset} />
      )}
    </Container>
  );
};

export default App;
