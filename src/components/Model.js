import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './Model.css';


function Model() {
  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } = useUnityContext({
    loaderUrl: "build/webb.loader.js",
    dataUrl: "build/webb.data",
    frameworkUrl: "build/webb.framework.js",
    codeUrl: "build/webb.wasm",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className="container">
      {isLoaded === false && (
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <div className="unity-container">
        <Unity className="unity" unityProvider={unityProvider} />
        <button className="fullscreen-button" onClick={() => requestFullscreen(true)}>
          Fullscreen
        </button>
      </div>
    </div>
  );
}

export default Model;