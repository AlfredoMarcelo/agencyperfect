import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import {useHistory } from "react-router-dom";

export const Project = (props) => {
    
  const {store,actions} = useContext(Context);

  const history = useHistory();


  useEffect(() => {
    if (!store.isAuth) history.push('/login')
  },[] )

//no esta funcionando la extracción de datos de store.singleProject, error en promesa
  return (
    <>
      <main className="bg-dark text-white">
        <div className="container  mt-5 py-5">
          <div className="row text-center">
            <p className="h1">{store.singleProject.project_name}</p>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-lg-4">
              <h5>Project de Educación</h5>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                suscipit dui ac nisi aliquam lacinia. Vivamus in scelerisque
                quam, non accumsan lorem. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Nulla facilisi. Sed id laoreet magna.
                Etiam posuere velit quis sapien semper dictum. Pellentesque ac
                augue mollis, vestibulum.
              </p>
              <button className="btn btn-outline-light mb-5 mb-lg-0">
                Contactar
              </button>
            </div>
            <div className="col-12 col-lg-8">
              <img src="./img/project-01.jpg" alt="" className="img-fluid rounded" />
            </div>
          </div>
          {/* Este será un componente para los comentarios */}
          <div className="row my-5 py-2">
            <div className="col-12 col-lg-8 mx-auto">
                <p className="h5"><i className="bi bi-person-bounding-box h4 me-4"></i>Alfredo supanta <i className="bi bi-calendar-week h4 mx-4"></i>15/05/2022</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                suscipit dui ac nisi aliquam lacinia. Vivamus in scelerisque
                quam, non accumsan lorem. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Nulla facilisi. Sed id laoreet magna.
                Etiam posuere velit quis sapien semper dictum. Pellentesque ac
                augue mollis, vestibulum.
              </p>
            </div>
          </div>
          <div className="row my-5 py-2">
            <div className="col-12 col-lg-8 mx-auto">
                <p className="h5"><i className="bi bi-person-bounding-box h4 me-4"></i>Alfredo supanta <i className="bi bi-calendar-week h4 mx-4"></i>15/05/2022</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                suscipit dui ac nisi aliquam lacinia. Vivamus in scelerisque
                quam, non accumsan lorem. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Nulla facilisi. Sed id laoreet magna.
                Etiam posuere velit quis sapien semper dictum. Pellentesque ac
                augue mollis, vestibulum.
              </p>
            </div>
          </div>
          {/* Este es un formulario para agregar comentarios */}
          <div className="row my-5">
            <div className="col-12 col-lg-8 mx-auto">
              <form>
                <>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                      Agrega tu comentario: 
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                  />
                  <button className="btn btn-outline-light mt-4" type="submit">
                      Comentar
                  </button>
                </>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
