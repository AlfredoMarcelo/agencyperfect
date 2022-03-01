import { useContext } from "react";
import { Link } from "react-router-dom";
import HomeAdmin from "../components/HomeAdmin";
import { Context } from "../store/appContext";


export const Home = (props) => {
  const { store} = useContext(Context);

  return (
    <>
      {store.isAuth && store.currentUser.user.email == "admin@gmail.com" ? 
      <HomeAdmin/>
      : 
        <section id="inicio">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./img/01.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Todos los portafolios en una sola página</h2>
                  <p>!Que esperas para unirte a esta gran comunidad</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./img/02.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Haz que tu portafolio sea único</h2>
                  <p>Demuestra tu potencial a los demas</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./img/03.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Aprovecha las oportunidades</h2>
                  <p>
                    En esta comunidad aumentaras tus contactos y oportunidades
                    laborales
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <main className="bg-dark py-3 ">
            <div className="container">
              <div className="d-grid gap-2 col-12 text-center py-2">
                <Link to="/portfolio">
                  <button className="btn btn-warning border border-4 py-1 rounded-pill">
                    <p className="fs-4 fw-bold">Explorar Portfolio</p>
                    <i className="bi bi-box-arrow-in-up h3"></i>
                  </button>
                </Link>
              </div>
            </div>
          </main>
        </section>
      }
    </>
  );
};
