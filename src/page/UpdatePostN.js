import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import NavbarNeas from "../components/NavbarNeas";
import axios from "axios";

const apiEndpoint = "https://test-1yay.onrender.com/api/astronomy/neas/edit/";

const PostUpdate = (props) => {
  const { designatId } = useParams();
  const [exito, setExito] = useState("");
  const [discovery_date, setDiscovery_date] = useState("");
  const [h_mag, setH_mag] = useState("");
  const [moid_au, setMoid_au] = useState("");
  const [q_au_1, setQ_au_1] = useState("");
  const [q_au_2, setQ_au_2] = useState("");
  const [period_yr, setPeriod_yr] = useState("");
  const [i_deg, setI_deg] = useState("");
  const [pha, setPha] = useState("");
  const [orbit_class, setOrbit_class] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!orbit_class) return alert("Faltan datos");

    const updatedPost = {
      discovery_date,
      h_mag,
      moid_au,
      q_au_1,
      q_au_2,
      period_yr,
      i_deg,
      orbit_class,
      pha,
    };

    const { data } = await axios.put(apiEndpoint + designatId, updatedPost);
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
        {" "}
        <Link to={"/neas/list"} className="btn btn-secondary">
          Volver
        </Link>
        <div>
          <h4>Editar Nea</h4>

          <label htmlFor="createNeas">Discovery_date</label>
          <input
            placeholder="2011-01-07T00:00:00.000"
            type="text"
            className="form-control"
            value={discovery_date}
            onChange={(e) => setDiscovery_date(e.target.value)}
            id="createNeas"
          ></input>
          <label htmlFor="createNeas">H_mag</label>
          <input
            placeholder="19.7"
            type="text"
            className="form-control"
            value={h_mag}
            onChange={(e) => setH_mag(e.target.value)}
            id="createNeas"
          ></input>
          <label htmlFor="createNeas">Moid_au</label>
          <input
            placeholder="0.035"
            type="text"
            className="form-control"
            value={moid_au}
            onChange={(e) => setMoid_au(e.target.value)}
            id="createNeas"
          ></input>
          <label htmlFor="createNeas">Q_au_1</label>
          <input
            placeholder="0.84"
            type="text"
            className="form-control"
            value={q_au_1}
            onChange={(e) => setQ_au_1(e.target.value)}
            id="createNeas"
          ></input>
          <label htmlFor="createNeas">Q_au_2</label>
          <input
            placeholder="4.26"
            type="text"
            className="form-control"
            value={q_au_2}
            onChange={(e) => setQ_au_2(e.target.value)}
            id="createNeas"
          ></input>
          <label htmlFor="createNeas">Period_yr</label>
          <input
            placeholder="4.06"
            type="text"
            className="form-control"
            value={period_yr}
            onChange={(e) => setPeriod_yr(e.target.value)}
            id="createNeas"
          ></input>
          <label htmlFor="createNeas">I_deg</label>
          <input
            placeholder="9.65"
            type="text"
            className="form-control"
            value={i_deg}
            onChange={(e) => setI_deg(e.target.value)}
            id="createNeas"
          ></input>
          <label htmlFor="createNeas">Pha</label>
          <input
            placeholder="Y"
            type="text"
            className="form-control"
            value={pha}
            onChange={(e) => setPha(e.target.value)}
            id="createNeas"
          ></input>
          <label htmlFor="createNeas">Orbit_class</label>
          <input
            placeholder="Apollo"
            type="text"
            className="form-control"
            value={orbit_class}
            onChange={(e) => setOrbit_class(e.target.value)}
            id="createNeas"
          ></input>
        </div>
        <Button type="submit">Submit</Button>
        {exito}
      </form>
    </>
  );
};

export default PostUpdate;
