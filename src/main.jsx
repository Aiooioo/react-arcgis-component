import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import esriConfig from "@arcgis/core/config.js";
import { setAssetPath as setCalciteAssetPath } from "@esri/calcite-components";
import { setAssetPath as setMapAssetPath } from "@arcgis/map-components";
import '@arcgis/map-components/components/arcgis-map'
import './index.css'
import App from './App.jsx'

esriConfig.assetsPath = "./assets";
setCalciteAssetPath("./assets");
setMapAssetPath("./assets");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
