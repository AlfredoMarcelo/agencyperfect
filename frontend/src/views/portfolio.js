import React from "react";
import { Context } from "../store/appContext";

/* import { Link } from "react-router-dom"; */

export const Portfolio = (props) => {
  return (
    <>
      <main className="bg-dark text-white mt-5 py-5">
        <div className="container">
          {/* <div className="row text-center">
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
          </div> */}
          <div className="row py-2"></div>
          <div className="row text-center">
            <p className="h1">Portfolio</p>
            <i className="bi bi-archive h1"></i>
          </div>
          <Context.Consumer>
            {({ store, actions }) => {
              return (
                <>
                  <div className="row text-dark text-center pt-4">
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                      <div className="card">
                        <div className="card-body">
                          <img
                            src="https://i.picsum.photos/id/46/500/450.jpg?hmac=PeRBYWuxzhs7nNrZ_pvrzEe-jGsTWKHZh5GHF09yQOw"
                            className="img-fluid"
                          ></img>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Name User:</li>
                          <li className="list-group-item">Project Name: </li>
                        </ul>
                        <div className="card-body">
                          <button className="btn btn-outline-dark">
                          <i class="bi bi-folder2-open"></i>  Ver proyecto
                             
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                      <div className="card">
                        <div className="card-body">
                          <img
                            src="https://i.picsum.photos/id/46/500/450.jpg?hmac=PeRBYWuxzhs7nNrZ_pvrzEe-jGsTWKHZh5GHF09yQOw"
                            className="img-fluid"
                          ></img>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Name User:</li>
                          <li className="list-group-item">Project Name: </li>
                        </ul>
                        <div className="card-body">
                          <button className="btn btn-outline-dark">
                          <i class="bi bi-folder2-open"></i>  Ver proyecto
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                      <div className="card">
                        <div className="card-body">
                          <img
                            src="https://i.picsum.photos/id/46/500/450.jpg?hmac=PeRBYWuxzhs7nNrZ_pvrzEe-jGsTWKHZh5GHF09yQOw"
                            className="img-fluid"
                          ></img>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Name User:</li>
                          <li className="list-group-item">Project Name: </li>
                        </ul>
                        <div className="card-body">
                          <button className="btn btn-outline-dark">
                          <i class="bi bi-folder2-open"></i>  Ver proyecto
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                      <div className="card">
                        <div className="card-body">
                          <img
                            src="https://i.picsum.photos/id/46/500/450.jpg?hmac=PeRBYWuxzhs7nNrZ_pvrzEe-jGsTWKHZh5GHF09yQOw"
                            className="img-fluid"
                          ></img>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Name User:</li>
                          <li className="list-group-item">Project Name: </li>
                        </ul>
                        <div className="card-body">
                          <button className="btn btn-outline-dark">
                          <i class="bi bi-folder2-open"></i>  Ver proyecto
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                      <div className="card">
                        <div className="card-body">
                          <img
                            src="https://i.picsum.photos/id/46/500/450.jpg?hmac=PeRBYWuxzhs7nNrZ_pvrzEe-jGsTWKHZh5GHF09yQOw"
                            className="img-fluid"
                          ></img>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Name User:</li>
                          <li className="list-group-item">Project Name: </li>
                        </ul>
                        <div className="card-body">
                          <button className="btn btn-outline-dark" >
                          <i class="bi bi-folder2-open"></i>  Ver proyecto
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                      <div className="card">
                        <div className="card-body">
                          <img
                            src="https://i.picsum.photos/id/46/500/450.jpg?hmac=PeRBYWuxzhs7nNrZ_pvrzEe-jGsTWKHZh5GHF09yQOw"
                            className="img-fluid"
                          ></img>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Name User:</li>
                          <li className="list-group-item">Project Name: </li>
                        </ul>
                        <div className="card-body">
                          <button className="btn btn-outline-dark">
                          <i class="bi bi-folder2-open"></i>  Ver proyecto
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            }}
          </Context.Consumer>

          {/* <div className="row text-dark text-center">
              <div className="col-12 col-md-6 col-lg-4 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="my-5">$100</h2>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name User:</li>
                        <li className="list-group-item">Project Name: </li>
                    </ul>
                    <div className="card-body">
                        <button className="btn btn-outline-dark">
                            Ver proyecto
                        </button>
                    </div>
                </div>  
              </div>
            </div> */}
          <div className="row py-5"></div>
        </div>
      </main>
    </>
  );
};
