import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import paginate from "../common/paginate";
import logo from "../assets/load.gif";
import NavBarNEas from "../components/NavbarNeas";

const Neas = () => {
  const [datos, setDatos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  const getNasa = async (direc) => {
    try {
      const resp = await fetch(`https://test-1yay.onrender.com/neas`);
      const data = await resp.json();

      setDatos(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNasa();
  }, []);

  const [filtereddatos, pagedatosCount] = paginate(
    datos,
    pageSize,
    currentPage
  );

  if (datos.length === 0) return <img src={logo} alt="loading..." />;

  return (
    <>
      <NavBarNEas />
      <h4>Neas ({datos.length})</h4>
      <Pagination
        pageSize={pageSize}
        itemsCount={datos.length}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>q_au_1</th>
            <th>q_au_2</th>
          </tr>
        </thead>
        <tbody>
          {filtereddatos.map((dato, index) => (
            <tr key={index}>
              <td>{dato.orbit_class}</td>
              <td>{dato.q_au_1}</td>
              <td>{dato.q_au_2}</td>
              {/* <td>{pha ? "Si" : "No"}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Neas;
