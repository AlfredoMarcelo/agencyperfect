import React from "react";
import { Context } from "../store/appContext";

/* import { Link } from "react-router-dom"; */

export const Profile = (props) => {
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
          <div className="row text-center">
            <p className="h1">Profile</p>
          </div>
          <Context.Consumer>
            {({ store, actions }) => {
              return (
                <>            
                  <div className="row text-dark text-center">
                  <h1 className="py-5 text-light">{store.currentUser.user.name} {store.currentUser.user.lastname}</h1>
                    <div className="col-12 col-md-6 col-lg-4 mb-5 mx-auto">
                      <div className="card">
                        <div className="card-body">
                          <img src={store.currentUser.user.image} className="img-fluid"></img>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Name User: {store.currentUser.user.name}</li>
                          <li className="list-group-item">Email: {store.currentUser.user.email} </li>
                        </ul>
                        <div className="card-body">
                          <button className="btn btn-outline-dark">
                            Ver más
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
          <div className="row mb-5"></div>
        </div>
      </main>
    </>
  );
};
