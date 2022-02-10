import { Link } from "react-router-dom";

const Navbar = props => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container justify-content-around">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 ">
        <a className="navbar-brand mb-0 h1" href="#">
          AgencyPerfect
        </a>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
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
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="True"
              >
                Registrate
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Inicia sesión
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
    
      
    )
}
export default Navbar;