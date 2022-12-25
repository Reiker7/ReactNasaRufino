import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import logo from "../assets/load.gif";

export default function App(props) {
  const [input, setInput] = useState("");
  const [claseFilter, setClaseFilter] = useState("");
  const [pesoFilter, setPesoFilter] = useState("");
  const [datos, setDatos] = useState([]);
  // const [lat, setLat] = useState(0);
  // const [lon, setLon] = useState(0);

  const getNasa = async (direc) => {
    try {
      const resp = await fetch(`https://test-1yay.onrender.com/landing`);

      const data = await resp.json();

      setDatos(data);
      // data[0].coords && setLat(datos.map((dato)=>(dato.coords.centroid_coordinates.lat)))
      // data[0].coords && setLon(datos.map((dato)=>(dato.coords.centroid_coordinates.lon)))
    } catch (error) {
      console.log(error);
    }
  };

  // const peso = async () => {
  //   await getNasa();
  //   await setDatos([...datos.filter((e)=>{ return e.mas === NaN ? '' : +e.mass <= +input })])

  //   console.log(datos.length);

  // };

  useEffect(() => {
    getNasa();
  }, []);

  let filteredDatos = datos;

  if (claseFilter) {
    filteredDatos = filteredDatos.filter((d) => d.recclass === claseFilter);
  }
  if (pesoFilter) {
    filteredDatos = filteredDatos.filter((e) => +e.mass <= +pesoFilter);
  }
  if (datos.length === 0) return <img src={logo} alt="loading..." />;

  return (
    <div>
      <input
        placeholder="Peso:500,Clase:L5"
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button
        onClick={() => {
          setPesoFilter(input);
          setClaseFilter("");
        }}
      >
        Peso
      </button>
      <button
        onClick={() => {
          setClaseFilter(input);
          setPesoFilter("");
        }}
      >
        Clase
      </button>
      <button
        onClick={() => {
          setClaseFilter("");
          setPesoFilter("");
        }}
      >
        Todos
      </button>
      Resultados: {filteredDatos.length}
      <Link to={"/landing/list"} className="btnH">
        Panel de Control
      </Link>
      {datos.length === 0 ? null : (
        <MapContainer center={[0, 0]} zoom={3} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* datos.slice(0,900).map */}
          {filteredDatos.map((dato, index) =>
            !dato.geolocation ? (
              ""
            ) : (
              <Marker
                position={[
                  dato.geolocation.latitude,
                  dato.geolocation.longitude,
                ]}
                key={index}
              >
                <Popup>
                  latitud: {dato.geolocation.latitude} <br />
                  longitud: {dato.geolocation.longitude} <br />
                  name: {dato.name} <br />
                  year: {dato.year}
                </Popup>
              </Marker>
            )
          )}
        </MapContainer>
      )}
    </div>
  );
}
