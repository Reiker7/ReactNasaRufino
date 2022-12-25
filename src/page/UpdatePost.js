import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import NavbarNeas from "../components/NavbarNeas";

import axios from "axios";

const apiEndpoint =
  "https://test-1yay.onrender.com/api/astronomy/landings/edit/";

const PostUpdate = (props) => {
  const { postId } = useParams();
  const [fall, setFall] = useState("");
  const [exito, setExito] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [name, setName] = useState("");
  const [mass, setMass] = useState("");
  const [nametype, setNametype] = useState("");
  const [recclass, setRecclass] = useState("");
  const [reclat, setReclat] = useState("");
  const [reclong, setReclong] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !longitude || !latitude) return alert("Faltan datos");

    const updatedPost = {
      name,
      fall,
      latitude,
      longitude,
      mass,
      nametype,
      recclass,
      reclat,
      reclong,
      year,
    };

    const { data } = await axios.put(apiEndpoint + postId, updatedPost);
    console.log(data);
    await setExito(
      <button type="button" className="btn btn-success">
        Modificado
      </button>
    );
  };

  return (
    <>
      <NavbarNeas />
      <form
        onSubmit={handleSubmit}
        style={{
          width: "60%",
          padding: "0% 5%",
        }}
      >
        <Link to={"/landing/list"} className="btn btn-secondary">
          Volver
        </Link>
        <h4>Editar - {postId}</h4>
        <div className="form-group">
          <label htmlFor="createLanding">name</label>
          <input
            placeholder="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="editLanding"
          ></input>
          <label htmlFor="createLanding">fall</label>
          <input
            placeholder="Fell"
            type="text"
            className="form-control"
            value={fall}
            onChange={(e) => setFall(e.target.value)}
            id="editLanding"
          ></input>
          <label htmlFor="createLanding">Latitude</label>
          <input
            placeholder="50.775000"
            type="text"
            className="form-control"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            id="editLanding"
          ></input>
          <label htmlFor="createLanding">Longitude</label>
          <input
            placeholder="6.083330"
            type="text"
            className="form-control"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            id="editLanding"
          ></input>
          <label htmlFor="createLanding">Mass</label>
          <input
            placeholder="mass"
            type="text"
            className="form-control"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
            id="editLanding"
          ></input>
          <label htmlFor="createLanding">Nametype</label>
          <input
            placeholder="nametype"
            type="text"
            className="form-control"
            value={nametype}
            onChange={(e) => setNametype(e.target.value)}
            id="editLanding"
          ></input>
          <label htmlFor="createLanding">Recclass</label>
          <input
            placeholder="recclass"
            type="text"
            className="form-control"
            value={recclass}
            onChange={(e) => setRecclass(e.target.value)}
            id="editLanding"
          ></input>
          <label htmlFor="createLanding">Reclat</label>
          <input
            placeholder="50.775000"
            type="text"
            className="form-control"
            value={reclat}
            onChange={(e) => setReclat(e.target.value)}
            id="editLanding"
          ></input>
          <label htmlFor="createLanding">Reclong</label>
          <input
            placeholder="6.083330"
            type="text"
            className="form-control"
            value={reclong}
            onChange={(e) => setReclong(e.target.value)}
            id="editLanding"
          ></input>
          <label htmlFor="createLanding">Year</label>
          <input
            placeholder="1880-01-01T00:00:00.000"
            type="text"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            id="editLanding"
          ></input>
        </div>
        <Button type="submit">Enviar</Button>
        {exito}
      </form>
    </>
  );
};

export default PostUpdate;
