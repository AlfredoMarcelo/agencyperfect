import React, { useEffect, useState } from "react";
import { Context } from "../store/appContext";

/* import { Link } from "react-router-dom"; */

export const Portfolio = (props) => {

  let [lista, setLista] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  

  const fetchData = async () => {
    const data = await fetch("http://127.0.0.1:5000/api/projects/all");
    const cancion = await data.json();
    setLista(cancion);
    console.log(cancion);
  };


  return (
    <>
      <main className="bg-dark text-white mt-5 py-5">
        <div className="container">
          <div className="row py-2"></div>
          <div className="row text-center">
            <p className="h1">Projects</p>
            <i className="bi bi-archive h1"></i>
          </div>
          <div className="row text-dark text-center pt-4">
            {lista.map((item, i) => (
              <div className="col-12 col-md-6 col-lg-4 mb-5">
                <div className="card" key={item.id}>
                  <div className="card-body">
                    <img src={item.project_image} className="img-fluid"></img>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      User: {item.user.name}
                    </li>
                    <li className="list-group-item">
                      Project Name: {item.project_name}
                    </li>
                  </ul>
                  <div className="card-body">
                    <button className="btn btn-success me-1">
                      <i class="bi bi-folder2-open"></i> See Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
