# Cov-Frontend

Frontend for X-ray image classification using **Material UI** and React. This system allows users to upload X-ray images, select a preprocessing method, and receive a prediction result (COVID-19, Normal, or Viral Pneumonia) along with a comparison of the original and processed images.

---

## 📜 **Index**
- [Frontend](https://github.com/FabsSWD/cov-frontend)
- [Backend](https://github.com/FabsSWD/cov-backend)

---

## 🚀 **Technologies Used**
- **React 18** (JavaScript Library for building UI)
- **Material-UI** (Component library for UI design)
- **React-Router** (Navigation and routing)
- **CSS** (Custom styles for responsiveness and layout)

---

## 🧩 **Project Structure**

The project is organized as follows:

```
cov-frontend/
│
├── public/                 # Public assets and HTML
│   ├── favicon.ico
│   ├── index.html          # Main HTML file
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/                    # Source files
│   ├── components/         # Reusable UI components
│   │   ├── ImageUpload.js   # Component for image upload and form
│   │   ├── ResultDisplay.js # Component to display prediction results
│   │   └── LoadingScreen.js # Loading spinner
│   ├── App.js               # Main application logic
│   ├── index.js             # Entry point for React
│   └── styles.css           # Custom styles for components
│
├── package.json           # Project metadata and dependencies
└── README.md              # Documentation
```

---

## 📌 **Features**

### 1. **Image Upload and Prediction**
- Allows users to upload X-ray images (PNG/JPEG).
- Select preprocessing methods: **raw**, **bilateral**, or **canny**.
- Sends the image to the backend for classification.

### 2. **Prediction Result Display**
- Shows the prediction result:
  - **COVID-19**: Displays in red with an error icon.
  - **NORMAL**: Displays in green with a check icon.
  - **VIRAL PNEUMONIA**: Displays in yellow with a warning icon.
- Comparison of **original image** and **processed image** side by side.

### 3. **Loading Screen**
- Displays a loading spinner while the image is being processed.

### 4. **Navigation**
- Includes a button to **reset** the application and upload a new image.

---

## 🛠️ **Setup and Execution**

### **Prerequisites**
- Node.js (v18 or later)
- Install dependencies:
```bash
npm install
```

---

### **Run the Frontend**
```bash
npm start
```
The application will be available at:  
`http://localhost:3000`

---

## 🔢 **Workflow**
1. **Start the backend** ([cov-backend](https://github.com/FabsSWD/cov-backend)) to ensure API availability.
2. **Run the frontend**:
   - Upload an X-ray image.
   - Select a preprocessing method (**raw**, **bilateral**, **canny**).
   - Wait for the loading screen and view the prediction result.
3. The result will include the **prediction** and a visual comparison of the **original** and **processed** images.

---

## 🛡️ **Security**
- Cross-Origin requests are managed using **CORS** in the backend to allow API communication.

---

## 🌐 **Deployment**
For production, build the project using:
```bash
npm run build
```
This will generate an optimized `build/` directory ready for deployment.

---

## 🔮 **Next Steps**
- Improve the UI with more dynamic animations.
- Add support for additional languages using i18n.

---

## 📄 **License**
This project is licensed under the MIT License.
