import React, { useState, useEffect } from "react";
export default function Home(props) {
  const [datos, setDatos] = useState([]);

  const apiKey = "ayeMiCfPGLdmPPcYO07hETSuiYvgROqZEfqfufcc";

  const getNasa = async (props) => {
    try {
      const resp = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await resp.json();

      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getNasa();
  }, []);

  return (
    <div>
      <div className="menuC">
        {datos.date === undefined ? (
          ""
        ) : (
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <img alt="estrellas" style={{ width: 600 }} src={datos.url}></img>
          </div>
        )}
      </div>
    </div>
  );
}
