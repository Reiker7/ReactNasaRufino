import React, { useState } from "react";

function App(props) {
  const [input, setInput] = useState("");
  const [datos, setDatos] = useState([]);

  const apiKey = "ayeMiCfPGLdmPPcYO07hETSuiYvgROqZEfqfufcc";
  const date = "&date=";
  //   const valor = "2010-12-11"

  const getNasa = async (props) => {
    try {
      const resp = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${date}${props}`
      );
      const data = await resp.json();

      setDatos(data);
      console.log(datos);
    } catch (error) {
      console.error(error);
    }
    console.log(datos);
  };

  const buscar = () => {
    getNasa(input);
  };

  return (
    <div>
      <input
        placeholder="2000-10-10"
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button onClick={buscar}>Buscar</button>
      {datos.date === undefined ? (
        ""
      ) : (
        <div style={{ padding: 10 }}>
          <span>
            <h2>{datos.title}</h2>
          </span>
          <p>{datos.explanation}</p>
          <img alt="estrellas" style={{ width: 500 }} src={datos.url}></img>
        </div>
      )}
    </div>
  );
}

export default App;
