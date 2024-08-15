import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../src/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/assets/vendor/swiper/swiper-bundle.min.css";

import "../src/assets/vendor/glightbox/css/glightbox.min.css";
import "../src/assets/vendor/aos/aos.css";

import "../src/assets/css/variables.css";
import "../src/assets/css/main.css";

import "../src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "../src/assets/vendor/swiper/swiper-bundle.min.js";
import "../src/assets/vendor/glightbox/js/glightbox.min.js";

import "../src/assets/js/main.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
