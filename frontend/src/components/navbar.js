import { useContext} from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = (props) => {
  const location = useLocation()
  const {store,actions}=useContext(Context)
  /* const history = useHistory() */
  


  const cerrar=(/* history */)=>{
    actions.cerrarSesion()
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container justify-content-around">
        <Link className="navbar-brand mb-0 h1 text-warning" to="/">
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
              <Link className={"nav-link active" + (location.pathname === '/portfolio' ? "active": "")}to="/portfolio">
                Portfolio
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
                <i className="bi bi-person-lines-fill h5"></i>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {store.isAuth?

                <li onClick={()=>cerrar()}>
                  <Link className={"dropdown-item" + (location.pathname === '/login' ? "active": "")} to="/" >
                    Logout
                  </Link>
                </li>
                :
                <>
                <li>
                  <Link className={"dropdown-item" + (location.pathname === '/login' ? "active": "")} to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className={"dropdown-item" + (location.pathname === '/register' ? "active": "")} to="/register">
                    Register
                  </Link>
                </li>
                </>
                }
                {store.isAuth &&
                <li>
                  <Link className={"dropdown-item" + (location.pathname === '/profile' ? "active": "")} to="/profile">
                    Profile
                  </Link>
                </li>}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
