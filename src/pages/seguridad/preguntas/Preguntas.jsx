import React, { useEffect, useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { downloadCSV, getOneParam, toUpperCaseField } from '../../../utils/utils';
import '../preguntas/preguntas.css';
// const urlapi = "http://localhost:3001";

export default function Pregunta(props) {

  var dataPar = JSON.parse(localStorage.getItem("params")) || []
  var urlApiParam = getOneParam(dataPar, "URL_API")
  const urlapi = urlApiParam.valor

  /** 
     ** Creando bitacora  
     * enviado infromacion de bitacora a la BD
     * */
  const saveLog = async () => {
    const userdata = JSON.parse(localStorage.getItem('data'))
    let log = {
      fecha: new Date(),
      id_usuario: userdata.data.id || 0,
      accion: 'LECTURA',
      descripcion: 'Ingreso a pantalla ROLES',
    }
    fetch(urlapi + "/logs/save"
      , {
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(responseJson => {
        // console.log("responseJson",responseJson)
      })
      .catch(error => {
        // console.log(error)   
      })
  };
  const [registros, setRegistros] = useState([]);
  const getRegistros = async () => {
    fetch(urlapi + "/ms_pregunta/getall"
      , {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(responseJson => {
        // console.log("responseJson",responseJson)
        // console.log("responseJson.status",responseJson.status)
        setRegistros(responseJson.object);
        setPending(false)
      })
      .catch(error => {
        // console.log(error)   
      })
  };

  useEffect(() => {
    saveLog()
    getRegistros();
  }, []);


  //Configuramos las columnas de la tabla
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id_pregunta,
      sortable: false,
    },
    {
      name: "Pregunta",
      selector: (row) => toUpperCaseField(row.pregunta),
      sortable: false,
    },



  ];

  //Configurar la paginaci??n de la tabla
  const paginationComponentOptions = {
    rowsPerPageText: "Filas por p??gina",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };




  //Barra de busqueda
  const [busqueda, setBusqueda] = useState("")
  //capturar valor a buscar
  const valorBuscar = (e) => {
    setBusqueda(e.target.value)
  }
  //metodo de filtrado 
  let results = []
  if (!busqueda) {
    results = registros
  } else {
    results = registros.filter((dato) =>
      dato.id_pregunta.toString().includes(busqueda.toLocaleLowerCase()) ||
      dato?.pregunta?.toLowerCase().includes(busqueda.toLocaleLowerCase())
    )
  };
  const [pending, setPending] = React.useState(true);

  return (
    <div className="container">
      <h5>Preguntas de seguridad</h5>

      <br />
      {/*Mostrar los botones: Nuevo, Excel y PDF */}
      <div className="row">
        <div className="col">
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <Link
                to="/admin/home"
                type="button"
                className="btn btn-primary"
                title="Agregar Nuevo"
              >
                <i className="fa-solid fa-plus"></i> Nuevo
              </Link>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <Link
                to="/"
                type="button"
                className="btn btn-success"
                title="Exportar a Excel"
              >
                <i className="fa-solid fa-file-excel"></i>EXCEL
              </Link>
              <Link
                to="/"
                type="button"
                className="btn btn-danger"
                title="Exportar a PDF"
              >
                <i className="fa-solid fa-file-pdf"></i>PDF
              </Link>
            </div>
          </div>
        </div>

        {/*Mostrar la barra de busqueda*/}
        <div className="col-4">
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              className="form-control me-2"
              type="text"
              placeholder="Buscar..."
              aria-label="Search"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <DataTable
          columns={columns}
          data={results}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          highlightOnHover
          fixedHeader
          fixedHeaderScrollHeight="550px"
          progressPending={pending}
          progressComponent="Cargando datos..."
          noDataComponent="---Datos no encontrados ---"
          paginationPerPage="6"
        />
      </div>
    </div>
  );
}
