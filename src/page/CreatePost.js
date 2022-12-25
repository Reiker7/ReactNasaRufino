import { useState } from "react";
import Button from "react-bootstrap/Button";
import NavbarLanding from "../components/NavbarLanding";
import axios from "axios";

const apiEndpoint =
  "https://test-1yay.onrender.com/api/astronomy/landings/create";

const CreatePost = () => {
  const [fall, setFall] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [mass, setMass] = useState("");
  const [nametype, setNametype] = useState("");
  const [recclass, setRecclass] = useState("");
  const [reclat, setReclat] = useState("");
  const [reclong, setReclong] = useState("");
  const [year, setYear] = useState("");
  const [exito, setExito] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !id) return alert("Faltan datos");

    const newPost = {
      fall,
      name,
      id,
      nametype,
      recclass,
      reclat,
      reclong,
      year,
      geolocation: [latitude, longitude],
    };

    const { data } = await axios.post(apiEndpoint, newPost);
    console.log(data);
    await setExito(
      <button type="button" className="btn btn-success">
        Creado
      </button>
    );
  };

  return (
    <>
      <NavbarLanding />
      <form
        onSubmit={handleSubmit}
        style={{
          width: "60%",
          padding: "0% 5%",
        }}
      >
        <div>
          <h4>Crear Landing</h4>
          <label htmlFor="createLanding">Name</label>
          <input
            placeholder="Aachen"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="createLanding"
          ></input>
          <label htmlFor="createLanding">fall</label>
          <input
            placeholder="Fall"
            type="text"
            className="form-control"
            value={fall}
            onChange={(e) => setFall(e.target.value)}
            id="createLanding"
          ></input>
          <label htmlFor="createLanding">Latitude</label>
          <input
            placeholder="50.775"
            type="text"
            className="form-control"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            id="createLanding"
          ></input>
          <label htmlFor="createLanding">Longitude</label>
          <input
            placeholder="6.08333"
            type="text"
            className="form-control"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            id="createLanding"
          ></input>
          <label htmlFor="createLanding">Id</label>
          <input
            placeholder="1"
            type="text"
            className="form-control"
            value={id}
            onChange={(e) => setId(e.target.value)}
            id="createLanding"
          ></input>
          <label htmlFor="createLanding">Mass</label>
          <input
            placeholder="21"
            type="text"
            className="form-control"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
            id="createLanding"
          ></input>
          <label htmlFor="createLanding">Nametype</label>
          <input
            placeholder="Valid"
            type="text"
            className="form-control"
            value={nametype}
            onChange={(e) => setNametype(e.target.value)}
            id="createLanding"
          ></input>
          <label htmlFor="createLanding">Recclass</label>
          <input
            placeholder="L5"
            type="text"
            className="form-control"
            value={recclass}
            onChange={(e) => setRecclass(e.target.value)}
            id="createLanding"
          ></input>
          <label htmlFor="createLanding">Reclat</label>
          <input
            placeholder="50.775000"
            type="text"
            className="form-control"
            value={reclat}
            onChange={(e) => setReclat(e.target.value)}
            id="createLanding"
          ></input>
          <label htmlFor="createLanding">Reclong</label>
          <input
            placeholder="6.083330"
            type="text"
            className="form-control"
            value={reclong}
            onChange={(e) => setReclong(e.target.value)}
            id="createLanding"
          ></input>
          <label htmlFor="createLanding">Year</label>
          <input
            placeholder="1880-01-01T00:00:00.000"
            type="text"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            id="createLanding"
          ></input>
        </div>
        <Button type="submit">Submit</Button>
        {exito}
      </form>
    </>
  );
};

export default CreatePost;
