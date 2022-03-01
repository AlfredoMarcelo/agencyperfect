import { Link, useHistory, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

const NavbarAdmin = (props) => {
  const {store, actions}=useContext(Context)
  const history = useHistory();


  const cerrar=()=>{
    actions.cerrarSesion()
  }

  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
      <div className="container justify-content-around">
        <Link className="navbar-brand mb-0 h1" to="/">
          <i className="bi bi-building me-2"></i>
          AgencyPerfect
        </Link>
        <button
          className="navbar-toggler mt-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={
                  "nav-link active" +
                  (location.pathname === "/" ? "active" : "")
                }
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="True"
              >
                <i className="bi bi-person-workspace h5"></i>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    className={
                      "dropdown-item" +
                      (location.pathname === "/boardPortfolio" ? "active" : "")
                    }
                    to="/boardPortfolio"
                  >
                    Board Portfolio
                    <i className="bi bi-inboxes-fill ms-2"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      "dropdown-item" +
                      (location.pathname === "/boardUser" ? "active" : "")
                    }
                    to="/boardUser"
                  >
                    Board User
                    <i className="bi bi-people-fill ms-2"></i>
                  </Link>
                </li>
                <li  onClick={()=>cerrar()}>
                  <Link className="dropdown-item" to="/">
                    Cerrar Sesión
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
