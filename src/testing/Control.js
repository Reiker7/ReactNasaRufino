import React, { useState } from "react";
import Lista from "./Lista";
import NavbarLanding from "../components/NavbarLanding";
import { useEffect } from "react";
import logo from "../assets/load.gif";

export default function Control(props) {
  const [datos, setDatos] = useState([]);
  const [divisor, setDivisor] = useState([]);
  const [numPagina, setNumPagina] = useState(0);

  const ItemsPage = 25;

  const getNasa = async () => {
    try {
      const resp = await fetch(`https://test-1yay.onrender.com/landing`);

      const data = await resp.json();

      setDatos(data);
      setDivisor([...datos].splice(0, ItemsPage));
    } catch (error) {
      console.log(error);
    }
  };

  const todos = async () => {
    getNasa();
  };
  const nextHandler = async () => {
    const nextPage = numPagina + 1;
    const totalElementos = Math.ceil(datos.length / 25);
    const firstIndex = numPagina * ItemsPage;
    if (numPagina === totalElementos) return;

    setNumPagina(nextPage);
    setDivisor([...datos].splice(firstIndex, ItemsPage));
  };
  const prevHandler = () => {
    const prevPage = numPagina - 1;

    const prevIndex = numPagina * ItemsPage;
    if (numPagina <= 0) return;
    setNumPagina(prevPage);
    setDivisor([...datos].splice(prevIndex, ItemsPage));
  };

  useEffect(() => {
    getNasa();
  }, []);

  if (datos.length === 0) return <img src={logo} alt="loading..." />;

  return (
    <div>
      <NavbarLanding />

      <h1>
        Página: {numPagina} de {Math.ceil(datos.length / 25)}
      </h1>
      <button onClick={todos}>Reload</button>
      <button onClick={prevHandler}>Prev</button>
      <button onClick={nextHandler}>Next</button>
      <h2>Nombres</h2>
      <ul>
        {divisor.map((dato, index) => (
          <Lista nombre={dato.name} otro={dato.fall} key={index} />
        ))}
      </ul>
    </div>
  );
}
