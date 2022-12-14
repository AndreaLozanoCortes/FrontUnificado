import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../globalStates/globalStates";

function Sidebar() {
  const [classSidebar] = useGlobalState("sidebar_class");
  console.log(classSidebar);

  return (
    <aside id="sidebar" className={classSidebar}>
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/admin/home">
            <i className="bi bi-grid"></i> <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#components-nav-perfil"
            data-bs-toggle="collapse"
            to="/admin/home"
          >
            <i className="bi bi-person-fill"></i>
            <span>Mi Perfil</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="components-nav-perfil"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/admin/editarusuario">
                <i className="bi bi-circle"></i>
                <span>Editar mi usuario</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/cambiocontrasena">
                <i className="bi bi-circle"></i>
                <span>Cambiar mi contraseña</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            to="/admin/home"
          >
            <i className="bi bi-cart3"></i>
            <span>Ventas</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="components-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/admin/punto-de-ventas">
                <i className="bi bi-circle"></i>
                <span>Punto de venta</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/home">
                <i className="bi bi-circle"></i>
                <span>Opción 2</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/home">
                <i className="bi bi-circle"></i>
                <span>Opción 3</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/home">
                <i className="bi bi-circle"></i>
                <span>Opción 4</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#otros-nav"
            data-bs-toggle="collapse"
            to="#"
          >
            <i className="bi bi-ui-checks"></i>
            <span>Administración POS</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="otros-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/admin/mostrarcategorias">
                <i className="bi bi-circle"></i>
                <span>Categorías</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarsucursales">
                <i className="bi bi-circle"></i>
                <span>Sucursales</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarsocios">
                <i className="bi bi-circle"></i>
                <span>Socios de Negocio</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarimpuestos">
                <i className="bi bi-circle"></i>
                <span>Impuestos</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrardescuentos">
                <i className="bi bi-circle"></i>
                <span>Descuentos</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarmetodospago">
                <i className="bi bi-circle"></i>
                <span>Métodos de Pago</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarmodopedido">
                <i className="bi bi-circle"></i>
                <span>Modo Pedido</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrartalonarioSAR">
                <i className="bi bi-circle"></i>
                <span>Correlativo</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarPOS">
                <i className="bi bi-circle"></i>
                <span>POS</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            to="#"
          >
            <i className="bi bi-journal-text"></i>
            <span>Inventario</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="forms-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/admin/mostrararticulos">
                <i className="bi bi-circle"></i>
                <span>Artículos</span>
              </Link>
            </li>

            <li>
              <Link to="/admin/MostrarCentroCosto">
                <i className="bi bi-circle"></i>
                <span>Bodega</span>
              </Link>
            </li>

            <li>
              <Link to="/admin/mostrarmateriales">
                <i className="bi bi-circle"></i>
                <span>Materiales</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarunidadesmedida">
                <i className="bi bi-circle"></i>
                <span>Unidades de Medida</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/crearcompra">
                <i className="bi bi-circle"></i>
                <span>Compras</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarsalidamds">
                <i className="bi bi-circle"></i>
                <span>Salida de Mercadería</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            to="#"
          >
            <i className="bi bi-layout-text-window-reverse"></i>
            <span>Contabilidad</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="tables-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/admin/mostrarcatalogo">
                <i className="bi bi-circle"></i>
                <span>Catalogo de cuentas</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarcategoriacont">
                <i className="bi bi-circle"></i>
                <span>Categoria contable</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrardestino">
                <i className="bi bi-circle"></i>
                <span>Destino de cuenta</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarinformefinanciero">
                <i className="bi bi-circle"></i>
                <span>Informe Financiero</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarlibromayor">
                <i className="bi bi-circle"></i>
                <span>Libro Mayor</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarsubcuenta">
                <i className="bi bi-circle"></i>
                <span>SubCuentas</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarestado">
                <i className="bi bi-circle"></i>
                <span>Estado Libro Diario</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarlibrodetalle">
                <i className="bi bi-circle"></i>
                <span>Libro Diario Detalle</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarlibroencabezado">
                <i className="bi bi-circle"></i>
                <span>Libro Diario Encabezado</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/mostrarperiodo">
                <i className="bi bi-circle"></i>
                <span>Periodo Contable</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#charts-nav"
            data-bs-toggle="collapse"
            to="#"
          >
            <i className="bi bi-graph-up-arrow"></i>
            <span>Reportes</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="charts-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/admin/reporte-venta-resumen">
                <i className="bi bi-circle"></i>
                <span>Resumen de Ventas</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/home">
                <i className="bi bi-circle"></i>
                <span>Reporte 2</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/home">
                <i className="bi bi-circle"></i>
                <span>Reporte 3</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/home">
                <i className="bi bi-circle"></i>
                <span>Reporte 4</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/home">
                <i className="bi bi-circle"></i>
                <span>Reporte 5</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/home">
                <i className="bi bi-circle"></i>
                <span>Reporte 6</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/home">
                <i className="bi bi-circle"></i>
                <span>Reporte 7</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#forms-nav-seg"
            data-bs-toggle="collapse"
            to="#"
          >
            <i className="bi bi-shield-lock"></i>
            <span>Seguridad</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="forms-nav-seg"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/admin/users">
                <i className="bi bi-people"></i>
                <span>Usuarios</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/roles">
                <i className="bi bi-ui-checks"></i>
                <span>Roles</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/permits">
                <i className="bi bi-toggles"></i>
                <span>Permisos</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/questions">
                <i className="bi bi-patch-question"></i>
                <span>Preguntas de Seguridad</span>
              </Link>
            </li>
            
            <li>
              <Link to="/admin/params">
                <i className="bi bi-gear"></i>
                <span>Par&aacute;metros</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
